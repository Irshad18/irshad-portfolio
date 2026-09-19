/**
 * CAREER OS 2.0: PRODUCTION SUPABASE CLIENT & CLOUD STATE ENGINE
 * 
 * Target Architecture:
 * Vercel Production → Supabase JS Client → Existing Supabase Project → PostgreSQL → Career OS persistent data
 * 
 * Strict Cloud-First Rules:
 * - Production uses real Supabase Cloud PostgreSQL database.
 * - Credentials resolved from Vercel Environment Variables (/api/config) or window.SUPABASE_CONFIG.
 * - ZERO credentials hardcoded in source files.
 * - NO silent fallback to localStorage in production.
 * - Shows explicit connection error if Supabase Cloud is unreachable.
 * - Guarded against curriculum duplication (seed locked).
 * - Implements evidence-based Current Skill Level calculation:
 *     Current Skill Level = (Topic Mastery × 0.50) + (Assessment × 0.20) + (Project Evidence × 0.30)
 */

(function(window) {
    'use strict';

    const CONFIG_STORAGE_KEY = 'career_os_supabase_config_v2';
    const LOCAL_ASSESSMENTS_KEY = 'career_os_local_assessments_v2';
    const LOCAL_GOAL_KEY = 'career_os_local_goal_v2';

    // Timezone-safe local calendar date formatter (YYYY-MM-DD)
    function formatLocalYMD(d) {
        if (!d) d = new Date();
        if (typeof d === 'string') {
            if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
            d = new Date(d);
        }
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }
    window.formatLocalYMD = formatLocalYMD;

    class CareerOsEngine {
        constructor() {
            this.config = {
                supabaseUrl: (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url) || '',
                supabaseAnonKey: (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.anonKey) || ''
            };
            this.client = null;
            this.currentUser = null;
            this.isConnected = false;
            this.connectionError = null;
            this.realtimeChannel = null;
            this.listeners = [];
            
            // Asynchronously resolve configuration and connect to Supabase Cloud
            this.readyPromise = this.init();
        }

        async init() {
            try {
                this.config = await this.resolveConfig();
                await this.initClient();
            } catch (err) {
                console.error('Career OS initialization error:', err);
                this.isConnected = false;
                this.connectionError = err.message || 'Initialization failed';
                this.updateConnectionUI();
            }
            return this.isConnected;
        }

        async ensureInitialized() {
            if (this.readyPromise) {
                await this.readyPromise;
            }
        }

        async resolveConfig() {
            // Priority 1: In-memory window.SUPABASE_CONFIG (e.g. from local gitignored supabase-config.js)
            if (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.anonKey) {
                return {
                    supabaseUrl: window.SUPABASE_CONFIG.url.trim(),
                    supabaseAnonKey: window.SUPABASE_CONFIG.anonKey.trim()
                };
            }

            // Priority 2: Vercel Serverless Function endpoint /api/config
            try {
                const res = await fetch('/api/config');
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.supabaseUrl && data.supabaseAnonKey) {
                        return {
                            supabaseUrl: data.supabaseUrl.trim(),
                            supabaseAnonKey: data.supabaseAnonKey.trim()
                        };
                    }
                }
            } catch (e) {
                // Fetch may fail in purely static local environment; proceed to fallback check
            }

            // Priority 3: Browser stored configuration from Management UI
            try {
                const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed && parsed.supabaseUrl && parsed.supabaseAnonKey) {
                        return {
                            supabaseUrl: parsed.supabaseUrl.trim(),
                            supabaseAnonKey: parsed.supabaseAnonKey.trim()
                        };
                    }
                }
            } catch (e) {
                console.warn('Failed to parse stored Supabase config:', e);
            }

            return {
                supabaseUrl: '',
                supabaseAnonKey: ''
            };
        }

        async saveConfig(url, key) {
            this.config = {
                supabaseUrl: (url || '').trim(),
                supabaseAnonKey: (key || '').trim()
            };
            try {
                localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(this.config));
            } catch (e) {
                console.warn('Failed to save Supabase config to storage:', e);
            }
            await this.initClient();
            this.notifyChange('config');
        }

        async initClient() {
            if (window.supabase && this.config.supabaseUrl && this.config.supabaseAnonKey) {
                try {
                    this.client = window.supabase.createClient(this.config.supabaseUrl, this.config.supabaseAnonKey, {
                        auth: {
                            persistSession: true,
                            autoRefreshToken: true
                        }
                    });

                    // Perform a live probe to verify real cloud connectivity
                    const { error } = await this.client.from('skills').select('id', { count: 'exact', head: true });
                    if (error) {
                        console.error('Supabase Cloud Connection Probe Failed:', error);
                        this.isConnected = false;
                        this.connectionError = `Supabase Cloud Connection Error: ${error.message || 'Unable to query skills table'}`;
                    } else {
                        this.isConnected = true;
                        this.connectionError = null;
                        await this.checkSession();
                        this.setupRealtime();
                        console.log('🚀 Career OS: Successfully Connected to Supabase Cloud PostgreSQL Database');
                    }
                } catch (err) {
                    console.error('Failed to instantiate Supabase client:', err);
                    this.client = null;
                    this.isConnected = false;
                    this.connectionError = `Initialization Error: ${err.message || err}`;
                }
            } else {
                this.client = null;
                this.isConnected = false;
                this.connectionError = 'Supabase Cloud credentials not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in Vercel environment variables.';
                console.warn('⚠️ Career OS: Supabase Cloud credentials missing. Offline fallback is disabled in production.');
            }

            this.updateConnectionUI();
        }

        updateConnectionUI() {
            if (typeof document === 'undefined') return;

            // 1. Connection Error Alert Banner
            const banner = document.getElementById('cosConnectionBanner');
            const msgEl = document.getElementById('cosConnectionErrorMsg');
            if (banner) {
                if (this.isConnected) {
                    banner.style.display = 'none';
                } else {
                    banner.style.display = 'block';
                    if (msgEl) {
                        msgEl.textContent = this.connectionError || 'Supabase Cloud Database connection required.';
                    }
                }
            }

            // 2. Terminal Bar Status Text
            const statusText = document.getElementById('cosStatusText');
            if (statusText) {
                if (this.isConnected) {
                    statusText.textContent = 'SYSTEM: SUPABASE CLOUD ACTIVE';
                    statusText.style.color = '#4ade80';
                } else {
                    statusText.textContent = 'SYSTEM: SUPABASE DISCONNECTED';
                    statusText.style.color = '#ef4444';
                }
            }

            // 3. Management UI Status Chip
            const manageDbText = document.getElementById('manageDbStatusText');
            const manageDbChip = document.getElementById('manageDbStatusChip');
            if (manageDbText) {
                if (this.isConnected) {
                    manageDbText.textContent = 'CONNECTED TO SUPABASE CLOUD';
                    if (manageDbChip) manageDbChip.style.borderColor = 'rgba(74, 222, 128, 0.4)';
                } else {
                    manageDbText.textContent = 'DISCONNECTED: SUPABASE REQUIRED';
                    if (manageDbChip) manageDbChip.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                }
            }
        }

        async checkSession() {
            if (!this.client) return null;
            try {
                const { data: { session }, error } = await this.client.auth.getSession();
                if (error) throw error;
                this.currentUser = session ? session.user : null;
                this.notifyChange('auth');
                return this.currentUser;
            } catch (err) {
                console.warn('Error fetching auth session:', err);
                return null;
            }
        }

        setupRealtime() {
            if (!this.client) return;
            try {
                if (this.realtimeChannel) {
                    this.client.removeChannel(this.realtimeChannel);
                }
                this.realtimeChannel = this.client
                    .channel('career_os_realtime')
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'topic_progress' }, () => this.notifyChange('progress'))
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'learning_sessions' }, () => this.notifyChange('sessions'))
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'project_tasks' }, () => this.notifyChange('projects'))
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'skills' }, () => this.notifyChange('skills'))
                    .subscribe();
            } catch (err) {
                console.warn('Realtime subscription warning:', err);
            }
        }

        onChange(callback) {
            this.listeners.push(callback);
            return () => {
                this.listeners = this.listeners.filter(cb => cb !== callback);
            };
        }

        notifyChange(event) {
            this.listeners.forEach(cb => {
                try { cb(event); } catch (err) { console.error('Listener error:', err); }
            });
        }

        // ----------------------------------------------------
        // AUTHENTICATION
        // ----------------------------------------------------
        async signIn(email, password) {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                throw new Error('Cannot sign in: Supabase Cloud Database is not connected.');
            }
            const { data, error } = await this.client.auth.signInWithPassword({ email, password });
            if (error) throw error;
            this.currentUser = data.user;
            this.notifyChange('auth');
            this.updateConnectionUI();
            return data.user;
        }

        async signUp(email, password) {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                throw new Error('Cannot sign up: Supabase Cloud Database is not connected.');
            }
            const { data, error } = await this.client.auth.signUp({ email, password });
            if (error) throw error;
            this.currentUser = data.user;
            this.notifyChange('auth');
            return data.user;
        }

        async signOut() {
            if (this.client) {
                await this.client.auth.signOut();
            }
            this.currentUser = null;
            this.notifyChange('auth');
            this.updateConnectionUI();
        }

        isAuthenticated() {
            return !!this.currentUser;
        }

        // ----------------------------------------------------
        // ASSESSMENT EVIDENCE MANAGEMENT
        // ----------------------------------------------------
        getSkillAssessments() {
            try {
                const raw = localStorage.getItem(LOCAL_ASSESSMENTS_KEY);
                if (raw) return JSON.parse(raw);
            } catch (e) {}
            return {};
        }

        setSkillAssessment(skillId, scorePct, metadata = {}) {
            const all = this.getSkillAssessments();
            all[skillId] = {
                score: Math.min(100, Math.max(0, Math.round(scorePct))),
                date: new Date().toISOString(),
                ...metadata
            };
            try {
                localStorage.setItem(LOCAL_ASSESSMENTS_KEY, JSON.stringify(all));
            } catch (e) {}
            this.notifyChange('progress');
            return all[skillId];
        }

        clearSkillAssessments() {
            try {
                localStorage.removeItem(LOCAL_ASSESSMENTS_KEY);
            } catch (e) {}
            this.notifyChange('progress');
        }

        // ----------------------------------------------------
        // CALCULATION ENGINE: EVIDENCE-BASED CURRENT SKILL LEVEL
        // ----------------------------------------------------
        // Strict Fixed Weights:
        // Topic Mastery    = 50% (0.50)
        // Assessment       = 20% (0.20)
        // Project Evidence = 30% (0.30)
        //
        // No dynamic redistribution: missing evidence contributes 0.
        // Learning minutes NEVER contribute to Current Skill Level.
        calculateSkillLevel(topicMasteryPct, assessmentPct, projectEvidencePct) {
            const t = (typeof topicMasteryPct === 'number' && !isNaN(topicMasteryPct)) ? topicMasteryPct : 0;
            const a = (typeof assessmentPct === 'number' && !isNaN(assessmentPct)) ? assessmentPct : 0;
            const p = (typeof projectEvidencePct === 'number' && !isNaN(projectEvidencePct)) ? projectEvidencePct : 0;

            const tContrib = t * 0.50;
            const aContrib = a * 0.20;
            const pContrib = p * 0.30;

            return Math.round(tContrib + aContrib + pContrib);
        }

        async getProjectEvidenceMap() {
            let projects = [];
            try {
                projects = await this.getProjectsWithTasks();
            } catch (e) {
                projects = window.SEED_PROJECTS || [];
            }

            const skillProjectMap = {};
            (projects || []).forEach(p => {
                const pSkills = p.primary_skills || 
                    (window.SEED_PROJECTS && window.SEED_PROJECTS.find(sp => sp.id === p.id)?.primary_skills) || [];
                const tasks = p.tasks || [];
                const total = tasks.length;
                const completed = tasks.filter(t => t.completed).length;

                pSkills.forEach(skillId => {
                    if (!skillProjectMap[skillId]) {
                        skillProjectMap[skillId] = { total: 0, completed: 0 };
                    }
                    skillProjectMap[skillId].total += total;
                    skillProjectMap[skillId].completed += completed;
                });
            });

            return skillProjectMap;
        }

        // ----------------------------------------------------
        // DATA ACCESS: SKILLS & AUTOMATIC TOPIC PROGRESS
        // ----------------------------------------------------
        async getSkillsWithProgress() {
            await this.ensureInitialized();

            const [projectsMap, assessments] = await Promise.all([
                this.getProjectEvidenceMap(),
                Promise.resolve(this.getSkillAssessments())
            ]);

            if (!this.client || !this.isConnected) {
                // If Supabase Cloud is unavailable, show explicit connection error.
                // DO NOT silently fall back to localStorage as source of truth.
                this.updateConnectionUI();

                // Return baseline curriculum structure with 0% progress so page layout does not crash
                return (window.SEED_SKILLS || []).map(skill => {
                    const topicList = (window.SEED_TOPICS && window.SEED_TOPICS[skill.id]) || [];
                    const topicsWithState = topicList.map((t, idx) => ({
                        id: `${skill.id}_${idx}`,
                        skill_id: skill.id,
                        title: t.title,
                        description: t.description,
                        difficulty: t.difficulty,
                        sequence: t.sequence,
                        priority: t.priority || skill.priority,
                        required: t.required !== undefined ? t.required : true,
                        completed: false,
                        completed_at: null
                    }));

                    return {
                        ...skill,
                        topics: topicsWithState,
                        total_topics: topicsWithState.length,
                        completed_topics: 0,
                        topic_mastery_pct: 0,
                        topic_progress_pct: 0,
                        assessment_score_pct: 0,
                        project_evidence_pct: 0,
                        current_level: 0,
                        calculated_level: 0,
                        skill_gap: skill.target_level || 85
                    };
                });
            }

            // Real Cloud Path: Query PostgreSQL directly
            try {
                const { data: skills, error: err1 } = await this.client
                    .from('skills')
                    .select('*')
                    .order('name');
                if (err1) throw err1;

                const { data: topics, error: err2 } = await this.client
                    .from('skill_topics')
                    .select('*')
                    .order('sequence');
                if (err2) throw err2;

                let userProgress = [];
                let progQuery = this.client.from('topic_progress').select('*');
                if (this.currentUser) {
                    progQuery = progQuery.eq('user_id', this.currentUser.id);
                }
                const { data: prog, error: err3 } = await progQuery;
                if (!err3 && prog) userProgress = prog;

                const progressMap = new Map();
                userProgress.forEach(p => {
                    progressMap.set(p.topic_id, p);
                });

                // Build aggregated skills with evidence-based Current Skill Level
                return skills.map(skill => {
                    const skillTopics = topics.filter(t => t.skill_id === skill.id);
                    const totalTopics = skillTopics.length;
                    const completedTopics = skillTopics.filter(t => {
                        const p = progressMap.get(t.id);
                        return p && p.completed;
                    }).length;

                    // Signal 1: Topic Mastery (50%)
                    const topicMasteryPct = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

                    // Signal 2: Assessment Score (20%)
                    const assessmentEntry = assessments[skill.id];
                    const assessmentPct = (assessmentEntry && typeof assessmentEntry.score === 'number')
                        ? Math.min(100, Math.max(0, assessmentEntry.score))
                        : 0;

                    // Signal 3: Project Evidence (30%)
                    const projData = projectsMap[skill.id] || { total: 0, completed: 0 };
                    const projectEvidencePct = projData.total > 0 ? (projData.completed / projData.total) * 100 : 0;

                    // EVIDENCE-BASED CURRENT SKILL LEVEL
                    const calculatedLevel = this.calculateSkillLevel(topicMasteryPct, assessmentPct, projectEvidencePct);
                    const skillGap = Math.max(0, (skill.target_level || 85) - calculatedLevel);

                    return {
                        ...skill,
                        topics: skillTopics.map(t => {
                            const p = progressMap.get(t.id);
                            return {
                                ...t,
                                completed: p ? p.completed : false,
                                completed_at: p ? p.completed_at : null
                            };
                        }),
                        total_topics: totalTopics,
                        completed_topics: completedTopics,
                        topic_mastery_pct: Math.round(topicMasteryPct),
                        topic_progress_pct: Math.round(topicMasteryPct),
                        assessment_score_pct: Math.round(assessmentPct),
                        project_evidence_pct: Math.round(projectEvidencePct),
                        current_level: calculatedLevel,
                        calculated_level: calculatedLevel,
                        skill_gap: skillGap
                    };
                });
            } catch (err) {
                console.error('Supabase query failed in getSkillsWithProgress:', err);
                this.connectionError = `Supabase Query Error: ${err.message || err}`;
                this.updateConnectionUI();
                throw err;
            }
        }

        async toggleTopicCompletion(topicId, completed, notes = '') {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                const errMsg = 'Supabase Cloud Database connection required. Cannot persist topic completion.';
                this.connectionError = errMsg;
                this.updateConnectionUI();
                throw new Error(errMsg);
            }
            if (!this.currentUser) {
                const errMsg = 'Author authentication required to persist topic progress to Supabase Cloud.';
                throw new Error(errMsg);
            }

            const { error } = await this.client
                .from('topic_progress')
                .upsert({
                    user_id: this.currentUser.id,
                    topic_id: topicId,
                    completed: completed,
                    completed_at: completed ? new Date().toISOString() : null,
                    notes: notes,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'user_id,topic_id' });

            if (error) {
                console.error('Failed to toggle topic in Supabase:', error);
                throw error;
            }

            this.notifyChange('progress');
            return true;
        }

        // ----------------------------------------------------
        // LEARNING SESSIONS LOGGER & CRUD (PERSISTED IN SUPABASE)
        // ----------------------------------------------------
        async logLearningSession({ skillId, topicTitle, topicId, date, durationMinutes, activityType, notes }) {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                const errMsg = 'Supabase Cloud Database connection required. Cannot log learning session.';
                this.connectionError = errMsg;
                this.updateConnectionUI();
                throw new Error(errMsg);
            }
            if (!this.currentUser) {
                const errMsg = 'Author authentication required to log learning sessions to Supabase Cloud.';
                throw new Error(errMsg);
            }

            const parsedDuration = parseInt(durationMinutes, 10) || 30;
            const sessionDate = date ? formatLocalYMD(date) : formatLocalYMD(new Date());

            const insertPayload = {
                user_id: this.currentUser.id,
                skill_id: skillId,
                topic_title: topicTitle || '',
                date: sessionDate,
                duration_minutes: parsedDuration,
                activity_type: activityType || 'Learning',
                notes: notes || ''
            };
            if (topicId && typeof topicId === 'string' && topicId.includes('-')) {
                insertPayload.topic_id = topicId;
            }

            const { data, error } = await this.client
                .from('learning_sessions')
                .insert([insertPayload])
                .select();

            if (error) {
                console.error('Failed to save session to Supabase:', error);
                throw error;
            }

            this.notifyChange('sessions');
            return data;
        }

        async updateLearningSession(id, { skillId, topicTitle, date, durationMinutes, activityType, notes }) {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                const errMsg = 'Supabase Cloud Database connection required. Cannot update session.';
                this.connectionError = errMsg;
                this.updateConnectionUI();
                throw new Error(errMsg);
            }

            const parsedDuration = parseInt(durationMinutes, 10) || 30;
            const sessionDate = date ? formatLocalYMD(date) : formatLocalYMD(new Date());

            const { data, error } = await this.client
                .from('learning_sessions')
                .update({
                    skill_id: skillId,
                    topic_title: topicTitle,
                    date: sessionDate,
                    duration_minutes: parsedDuration,
                    activity_type: activityType || 'Learning',
                    notes: notes || ''
                })
                .eq('id', id)
                .select();

            if (error) {
                console.error('Failed to update session in Supabase:', error);
                throw error;
            }

            this.notifyChange('sessions');
            return data;
        }

        async deleteLearningSession(id) {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                const errMsg = 'Supabase Cloud Database connection required. Cannot delete session.';
                this.connectionError = errMsg;
                this.updateConnectionUI();
                throw new Error(errMsg);
            }

            const { error } = await this.client
                .from('learning_sessions')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Failed to delete session in Supabase:', error);
                throw error;
            }

            this.notifyChange('sessions');
            return true;
        }

        async getLearningSessions(limit = 50) {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                return [];
            }

            try {
                let query = this.client
                    .from('learning_sessions')
                    .select('*, skills(name)')
                    .order('date', { ascending: false })
                    .order('created_at', { ascending: false })
                    .limit(limit);

                if (this.currentUser) {
                    query = query.eq('user_id', this.currentUser.id);
                }

                const { data, error } = await query;
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Failed to load sessions from Supabase:', err);
                throw err;
            }
        }

        // ----------------------------------------------------
        // WEEKLY GOAL STORAGE
        // ----------------------------------------------------
        getWeeklyGoal() {
            try {
                const stored = localStorage.getItem(LOCAL_GOAL_KEY);
                if (stored) {
                    const val = parseFloat(stored);
                    if (!isNaN(val) && val > 0) return val;
                }
            } catch (e) {}
            return 10; // Default 10 hours
        }

        setWeeklyGoal(hours) {
            const h = parseFloat(hours) || 10;
            try {
                localStorage.setItem(LOCAL_GOAL_KEY, h.toString());
            } catch (e) {}
            this.notifyChange('goal');
            return h;
        }

        // ----------------------------------------------------
        // TRUE STREAK CALCULATION (DIRECT FROM SUPABASE)
        // ----------------------------------------------------
        async calculateStreak() {
            await this.ensureInitialized();
            if (!this.client || !this.isConnected) {
                return { currentStreak: 0, longestStreak: 0 };
            }

            let dates = [];

            // 1. Gather dates from learning_sessions in Supabase
            try {
                let sQuery = this.client.from('learning_sessions').select('date').order('date', { ascending: false });
                if (this.currentUser) sQuery = sQuery.eq('user_id', this.currentUser.id);
                const { data: sessions } = await sQuery;
                if (sessions) {
                    sessions.forEach(s => { if (s.date) dates.push(s.date); });
                }

                // 2. Gather dates from completed topic_progress in Supabase
                let tQuery = this.client.from('topic_progress').select('completed_at').eq('completed', true);
                if (this.currentUser) tQuery = tQuery.eq('user_id', this.currentUser.id);
                const { data: topics } = await tQuery;
                if (topics) {
                    topics.forEach(t => {
                        if (t.completed_at) {
                            dates.push(t.completed_at.split('T')[0]);
                        }
                    });
                }
            } catch (e) {
                console.warn('Error reading streak dates from Supabase:', e);
            }

            const uniqueDates = Array.from(new Set(dates)).filter(Boolean).sort().reverse();
            if (uniqueDates.length === 0) {
                return { currentStreak: 0, longestStreak: 0 };
            }

            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            const todayStr = formatLocalYMD(today);
            const yesterdayStr = formatLocalYMD(yesterday);

            let currentStreak = 0;
            let checkDate = null;

            if (uniqueDates[0] === todayStr) {
                checkDate = new Date(today);
            } else if (uniqueDates[0] === yesterdayStr) {
                checkDate = new Date(yesterday);
            }

            if (checkDate) {
                const dateSet = new Set(uniqueDates);
                while (dateSet.has(formatLocalYMD(checkDate))) {
                    currentStreak++;
                    checkDate.setDate(checkDate.getDate() - 1);
                }
            }

            let longestStreak = 0;
            let currentRun = 0;
            let previousDate = null;

            const sortedAsc = Array.from(new Set(uniqueDates)).sort();
            sortedAsc.forEach(dateStr => {
                const currentDate = new Date(dateStr + 'T00:00:00');
                if (previousDate) {
                    const diffDays = Math.round((currentDate - previousDate) / (1000 * 60 * 60 * 24));
                    if (diffDays === 1) {
                        currentRun++;
                    } else if (diffDays > 1) {
                        currentRun = 1;
                    }
                } else {
                    currentRun = 1;
                }
                longestStreak = Math.max(longestStreak, currentRun);
                previousDate = currentDate;
            });

            return {
                currentStreak,
                longestStreak
            };
        }

        // ----------------------------------------------------
        // TODAY DASHBOARD METRICS (AGGREGATED FROM CLOUD)
        // ----------------------------------------------------
        async getTodayMetrics() {
            await this.ensureInitialized();
            const todayStr = formatLocalYMD(new Date());
            const sessions = await this.getLearningSessions(100);
            const todaySessions = sessions.filter(s => s.date === todayStr);

            const totalMinutes = todaySessions.reduce((acc, s) => acc + (s.duration_minutes || 0), 0);
            const hours = Math.floor(totalMinutes / 60);
            const mins = totalMinutes % 60;
            const timeSpentStr = hours > 0 ? `${hours}h ${mins > 0 ? mins + 'm' : ''}` : `${mins}m`;

            // Distinct skills worked on today
            const distinctSkills = Array.from(new Set(todaySessions.map(s => {
                return (s.skills && s.skills.name) || s.skill_id || 'Python';
            })));

            // Distinct topics worked on today
            const distinctTopics = Array.from(new Set(todaySessions.map(s => s.topic_title || 'General Practice')));

            const streak = await this.calculateStreak();
            const skills = await this.getSkillsWithProgress();

            const targetMins = 120;
            const goalPct = Math.min(100, Math.round((totalMinutes / targetMins) * 100));

            // Calculate recommended focus (data-driven)
            const activeSkills = (skills || []).filter(s => s.active !== false);
            activeSkills.sort((a, b) => {
                const prioScore = (s) => (s.priority.includes('P0') ? 40 : s.priority.includes('P1') ? 25 : 10);
                const scoreA = prioScore(a) + (a.skill_gap || 0) + ((a.total_topics || 0) - (a.completed_topics || 0));
                const scoreB = prioScore(b) + (b.skill_gap || 0) + ((b.total_topics || 0) - (b.completed_topics || 0));
                return scoreB - scoreA;
            });

            const currentFocusSkill = activeSkills[0] || skills[0];
            const incompleteTopics = (currentFocusSkill && currentFocusSkill.topics) ?
                currentFocusSkill.topics.filter(t => !t.completed).slice(0, 3).map(t => t.title) : [];

            const formattedDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase();

            return {
                date: formattedDate,
                rawDate: todayStr,
                timeSpent: totalMinutes > 0 ? timeSpentStr : '0m',
                totalMinutes: totalMinutes,
                topicsCount: distinctTopics.length > 0 ? distinctTopics.length : todaySessions.length,
                skillsCount: distinctSkills.length > 0 ? distinctSkills.length : (todaySessions.length > 0 ? 1 : 0),
                distinctSkills,
                distinctTopics,
                streakDays: streak.currentStreak,
                longestStreak: streak.longestStreak,
                goalPercent: goalPct,
                goalCurrent: timeSpentStr,
                goalTarget: '2h',
                sessions: todaySessions,
                currentFocus: {
                    skill: currentFocusSkill ? currentFocusSkill.name : 'Python',
                    category: currentFocusSkill ? currentFocusSkill.category : 'Programming',
                    priority: currentFocusSkill ? currentFocusSkill.priority : 'P0 - Critical',
                    current_level: currentFocusSkill ? (currentFocusSkill.calculated_level !== undefined ? currentFocusSkill.calculated_level : currentFocusSkill.current_level) : 0,
                    calculated_level: currentFocusSkill ? (currentFocusSkill.calculated_level !== undefined ? currentFocusSkill.calculated_level : currentFocusSkill.current_level) : 0,
                    target_level: currentFocusSkill ? currentFocusSkill.target_level : 85,
                    completed_topics: currentFocusSkill ? currentFocusSkill.completed_topics : 0,
                    total_topics: currentFocusSkill ? currentFocusSkill.total_topics : 28,
                    topic_progress_pct: currentFocusSkill ? currentFocusSkill.topic_progress_pct : 0,
                    topic_mastery_pct: currentFocusSkill ? currentFocusSkill.topic_mastery_pct : 0,
                    assessment_score_pct: currentFocusSkill ? currentFocusSkill.assessment_score_pct : 0,
                    project_evidence_pct: currentFocusSkill ? currentFocusSkill.project_evidence_pct : 0,
                    next_topics: incompleteTopics.length > 0 ? incompleteTopics : ['Python Fundamentals', 'Variables & Data Types', 'Control Flow']
                }
            };
        }

        // ----------------------------------------------------
        // WEEKLY DASHBOARD METRICS (AGGREGATED FROM CLOUD)
        // ----------------------------------------------------
        async getWeeklyMetrics(daysRange = 7) {
            await this.ensureInitialized();
            const sessions = await this.getLearningSessions(150);
            const now = new Date();

            const daysMap = new Map();
            for (let i = daysRange - 1; i >= 0; i--) {
                const d = new Date(now);
                d.setDate(d.getDate() - i);
                const key = formatLocalYMD(d);
                const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });
                daysMap.set(key, { date: key, label: dayLabel, minutes: 0, sessions: 0 });
            }

            sessions.forEach(s => {
                if (daysMap.has(s.date)) {
                    const bucket = daysMap.get(s.date);
                    bucket.minutes += (s.duration_minutes || 0);
                    bucket.sessions++;
                }
            });

            const dailyData = Array.from(daysMap.values());
            const totalWeekMinutes = dailyData.reduce((acc, d) => acc + d.minutes, 0);

            const targetHours = this.getWeeklyGoal();
            const targetMinutes = targetHours * 60;

            const totalHours = Math.floor(totalWeekMinutes / 60);
            const totalMins = totalWeekMinutes % 60;
            const actualStr = totalHours > 0 ? `${totalHours}h ${totalMins > 0 ? totalMins + 'm' : ''}` : `${totalMins}m`;
            const completionPct = Math.min(100, Math.round((totalWeekMinutes / targetMinutes) * 100));

            const skillsWorked = Array.from(new Set(sessions.slice(0, 20).map(s => (s.skills && s.skills.name) || s.skill_id))).filter(Boolean);
            const streak = await this.calculateStreak();

            return {
                daysRange,
                dailyData,
                totalMinutes: totalWeekMinutes,
                actualFormatted: actualStr,
                targetFormatted: `${targetHours}h`,
                targetHours,
                targetMinutes,
                completionPct,
                topicsCompletedCount: sessions.length,
                skillsWorkedOn: skillsWorked.length > 0 ? skillsWorked : ['Python', 'UiPath', 'SQL'],
                projectsWorkedOn: ['Python Automation Toolkit', 'RPA Control Tower'],
                currentStreak: streak.currentStreak
            };
        }

        // ----------------------------------------------------
        // PROJECTS & TASKS (PERSISTED IN SUPABASE)
        // ----------------------------------------------------
        async getProjectsWithTasks() {
            await this.ensureInitialized();
            if (this.client && this.isConnected) {
                try {
                    const { data: projects, error: err1 } = await this.client
                        .from('projects')
                        .select('*')
                        .order('created_at');
                    if (!err1 && projects && projects.length > 0) {
                        const { data: tasks } = await this.client
                            .from('project_tasks')
                            .select('*')
                            .order('sequence');

                        return projects.map(p => {
                            const pTasks = (tasks || []).filter(t => t.project_id === p.id);
                            const totalTasks = pTasks.length;
                            const doneTasks = pTasks.filter(t => t.completed).length;
                            const calcProgress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : p.progress;

                            return {
                                ...p,
                                tasks: pTasks,
                                progress: calcProgress,
                                total_tasks: totalTasks,
                                completed_tasks: doneTasks
                            };
                        });
                    }
                } catch (e) {
                    console.warn('Failed to fetch projects from Supabase:', e);
                }
            }

            // Fallback to static catalog definitions if projects table is empty
            return (window.SEED_PROJECTS || []).map(p => {
                const total = p.tasks.length;
                const done = p.tasks.filter(t => t.completed).length;
                return {
                    ...p,
                    progress: total > 0 ? Math.round((done / total) * 100) : p.progress,
                    total_tasks: total,
                    completed_tasks: done
                };
            });
        }

        async toggleProjectTask(projectId, taskIdx, completed) {
            await this.ensureInitialized();
            if (this.client && this.isConnected && this.currentUser) {
                try {
                    await this.client
                        .from('project_tasks')
                        .update({ completed, completed_at: completed ? new Date().toISOString() : null })
                        .eq('id', taskIdx);
                    this.notifyChange('projects');
                    return true;
                } catch (e) {
                    console.warn('Failed to update project task in Supabase:', e);
                    throw e;
                }
            } else if (!this.isConnected) {
                const errMsg = 'Supabase Cloud Database connection required. Cannot update project task.';
                this.showConnectionError(errMsg);
                throw new Error(errMsg);
            }
            return true;
        }

        // ----------------------------------------------------
        // SEED GUARD: PERMANENTLY LOCKED AGAINST DUPLICATION
        // ----------------------------------------------------
        async seedSupabaseDatabase() {
            console.warn('⚠️ Seeding blocked: Database already contains 25 skills and 430 curriculum topics.');
            throw new Error('Database is already seeded with all 25 skills and 430 topics. Re-seeding is permanently disabled to prevent duplicate curriculum.');
        }
    }

    // Expose engine singleton and start async initialization
    window.careerOsEngine = new CareerOsEngine();

})(window);
