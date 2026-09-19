/**
 * CAREER OS 2.0: SUPABASE CLIENT & STATE ENGINE
 * 
 * Manages Supabase PostgreSQL persistence, Supabase Auth, Supabase Realtime,
 * automatic topic-based progress calculation, true streak calculation,
 * and local offline fallback mode.
 */

(function(window) {
    'use strict';

    const CONFIG_STORAGE_KEY = 'career_os_supabase_config_v2';
    const LOCAL_PROGRESS_KEY = 'career_os_local_progress_v2';
    const LOCAL_SESSIONS_KEY = 'career_os_local_sessions_v2';
    const LOCAL_GOAL_KEY = 'career_os_local_goal_v2';
    const LOCAL_PROJECTS_KEY = 'career_os_local_projects_v2';

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

    // Default configuration (can be updated via Management UI or window.SUPABASE_CONFIG)
    const defaultConfig = {
        supabaseUrl: (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url) || '',
        supabaseAnonKey: (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.anonKey) || ''
    };

    class CareerOsEngine {
        constructor() {
            this.config = this.loadConfig();
            this.client = null;
            this.currentUser = null;
            this.isConnected = false;
            this.realtimeChannel = null;
            this.listeners = [];

            this.initClient();
        }

        loadConfig() {
            try {
                const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
                if (stored) {
                    return { ...defaultConfig, ...JSON.parse(stored) };
                }
            } catch (e) {
                console.warn('Failed to parse stored Supabase config:', e);
            }
            return { ...defaultConfig };
        }

        saveConfig(url, key) {
            this.config = {
                supabaseUrl: (url || '').trim(),
                supabaseAnonKey: (key || '').trim()
            };
            try {
                localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(this.config));
            } catch (e) {
                console.warn('Failed to save Supabase config:', e);
            }
            this.initClient();
            this.notifyChange('config');
        }

        initClient() {
            if (window.supabase && this.config.supabaseUrl && this.config.supabaseAnonKey) {
                try {
                    this.client = window.supabase.createClient(this.config.supabaseUrl, this.config.supabaseAnonKey, {
                        auth: {
                            persistSession: true,
                            autoRefreshToken: true
                        }
                    });
                    this.isConnected = true;
                    this.checkSession();
                    this.setupRealtime();
                    console.log('🚀 Career OS: Connected to Supabase Cloud Database');
                } catch (err) {
                    console.error('Failed to init Supabase client:', err);
                    this.client = null;
                    this.isConnected = false;
                }
            } else {
                this.client = null;
                this.isConnected = false;
                console.log('⚡ Career OS: Operating in Offline/Demo Reactive Mode');
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
            if (this.client) {
                const { data, error } = await this.client.auth.signInWithPassword({ email, password });
                if (error) throw error;
                this.currentUser = data.user;
                this.notifyChange('auth');
                return data.user;
            } else {
                // Offline demo login fallback
                if (password === '1818' || email) {
                    this.currentUser = { id: 'demo-user-1', email: email || 'irshad@example.com', role: 'authenticated' };
                    this.notifyChange('auth');
                    return this.currentUser;
                }
                throw new Error('Invalid credentials');
            }
        }

        async signUp(email, password) {
            if (this.client) {
                const { data, error } = await this.client.auth.signUp({ email, password });
                if (error) throw error;
                this.currentUser = data.user;
                this.notifyChange('auth');
                return data.user;
            } else {
                this.currentUser = { id: 'demo-user-1', email, role: 'authenticated' };
                this.notifyChange('auth');
                return this.currentUser;
            }
        }

        async signOut() {
            if (this.client) {
                await this.client.auth.signOut();
            }
            this.currentUser = null;
            this.notifyChange('auth');
        }

        isAuthenticated() {
            return !!this.currentUser;
        }

        // ----------------------------------------------------
        // LOCAL FALLBACK STORAGE HELPERS
        // ----------------------------------------------------
        getLocalProgress() {
            let current = {};
            try {
                const raw = localStorage.getItem(LOCAL_PROGRESS_KEY);
                if (raw) current = JSON.parse(raw) || {};
            } catch (e) {}

            // Merge with SEED_TOPICS to ensure all 25 skills and 430 topics exist
            // while strictly preserving any existing user modifications
            if (window.SEED_TOPICS) {
                Object.keys(window.SEED_TOPICS).forEach(skillId => {
                    window.SEED_TOPICS[skillId].forEach((topic, idx) => {
                        const key = `${skillId}_${idx}`;
                        if (current[key] === undefined) {
                            current[key] = {
                                topic_id: key,
                                skill_id: skillId,
                                title: topic.title,
                                completed: !!topic.completed,
                                completed_at: topic.completed ? (topic.completed_at || new Date().toISOString()) : null
                            };
                        }
                    });
                });
            }
            return current;
        }

        setLocalProgress(progress) {
            try {
                localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(progress));
            } catch (e) {}
        }

        getLocalSessions() {
            try {
                const raw = localStorage.getItem(LOCAL_SESSIONS_KEY);
                if (raw) return JSON.parse(raw);
            } catch (e) {}
            return [];
        }

        setLocalSessions(sessions) {
            try {
                localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(sessions));
            } catch (e) {}
        }

        // ----------------------------------------------------
        // DATA ACCESS: SKILLS & AUTOMATIC TOPIC PROGRESS
        // ----------------------------------------------------
        async getSkillsWithProgress() {
            if (this.client) {
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
                    if (this.currentUser) {
                        const { data: prog, error: err3 } = await this.client
                            .from('topic_progress')
                            .select('*')
                            .eq('user_id', this.currentUser.id);
                        if (!err3 && prog) userProgress = prog;
                    }

                    const progressMap = new Map();
                    userProgress.forEach(p => {
                        progressMap.set(p.topic_id, p);
                    });

                    // Build aggregated skills
                    return skills.map(skill => {
                        const skillTopics = topics.filter(t => t.skill_id === skill.id);
                        const totalTopics = skillTopics.length;
                        const completedTopics = skillTopics.filter(t => {
                            const p = progressMap.get(t.id);
                            return p && p.completed;
                        }).length;

                        const topicProgressPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

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
                            topic_progress_pct: topicProgressPct,
                            skill_gap: Math.max(0, (skill.target_level || 85) - (skill.current_level || 0))
                        };
                    });
                } catch (err) {
                    console.warn('Supabase fetch failed, using fallback:', err);
                }
            }

            // Fallback: build from seed-topics-data.js + local storage
            const progress = this.getLocalProgress();
            const skills = (window.SEED_SKILLS || []).map(skill => {
                const topicList = (window.SEED_TOPICS && window.SEED_TOPICS[skill.id]) || [];
                const topicsWithState = topicList.map((t, idx) => {
                    const key = `${skill.id}_${idx}`;
                    const prog = progress[key];
                    const isCompleted = prog !== undefined ? !!prog.completed : !!t.completed;
                    return {
                        id: key,
                        skill_id: skill.id,
                        title: t.title,
                        description: t.description,
                        difficulty: t.difficulty,
                        sequence: t.sequence,
                        priority: t.priority || skill.priority,
                        required: t.required !== undefined ? t.required : true,
                        completed: isCompleted,
                        completed_at: prog ? prog.completed_at : (t.completed ? (t.completed_at || new Date().toISOString()) : null)
                    };
                });

                const totalTopics = topicsWithState.length;
                const completedTopics = topicsWithState.filter(t => t.completed).length;
                const topicProgressPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

                return {
                    ...skill,
                    topics: topicsWithState,
                    total_topics: totalTopics,
                    completed_topics: completedTopics,
                    topic_progress_pct: topicProgressPct,
                    skill_gap: Math.max(0, (skill.target_level || 85) - (skill.current_level || 0))
                };
            });

            return skills;
        }

        async toggleTopicCompletion(topicId, completed, notes = '') {
            if (this.client && this.currentUser) {
                try {
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
                    if (error) throw error;
                    this.notifyChange('progress');
                    return true;
                } catch (err) {
                    console.error('Failed to toggle topic in Supabase:', err);
                }
            }

            // Fallback to local progress
            const progress = this.getLocalProgress();
            progress[topicId] = {
                topic_id: topicId,
                completed: completed,
                completed_at: completed ? new Date().toISOString() : null,
                notes: notes,
                updated_at: new Date().toISOString()
            };
            this.setLocalProgress(progress);
            this.notifyChange('progress');
            return true;
        }

        // ----------------------------------------------------
        // LEARNING SESSIONS LOGGER & CRUD
        // ----------------------------------------------------
        async logLearningSession({ skillId, topicTitle, topicId, date, durationMinutes, activityType, notes }) {
            const parsedDuration = parseInt(durationMinutes, 10) || 30;
            const sessionDate = date ? formatLocalYMD(date) : formatLocalYMD(new Date());

            if (this.client && this.currentUser) {
                try {
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
                    if (error) throw error;
                    this.notifyChange('sessions');
                    return data;
                } catch (err) {
                    console.error('Failed to save session to Supabase:', err);
                }
            }

            // Fallback local storage
            const sessions = this.getLocalSessions();
            const newSession = {
                id: 'sess_' + Date.now(),
                skill_id: skillId,
                topic_title: topicTitle || 'Core Focus Practice',
                topic_id: topicId || null,
                date: sessionDate,
                duration_minutes: parsedDuration,
                activity_type: activityType || 'Learning',
                notes: notes || '',
                created_at: new Date().toISOString()
            };
            sessions.unshift(newSession);
            this.setLocalSessions(sessions);
            this.notifyChange('sessions');
            return newSession;
        }

        async updateLearningSession(id, { skillId, topicTitle, date, durationMinutes, activityType, notes }) {
            const parsedDuration = parseInt(durationMinutes, 10) || 30;
            const sessionDate = date ? formatLocalYMD(date) : formatLocalYMD(new Date());

            if (this.client && this.currentUser) {
                try {
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
                    if (error) throw error;
                    this.notifyChange('sessions');
                    return data;
                } catch (err) {
                    console.error('Failed to update session in Supabase:', err);
                }
            }

            // Fallback local storage
            const sessions = this.getLocalSessions();
            const idx = sessions.findIndex(s => s.id === id);
            if (idx !== -1) {
                sessions[idx] = {
                    ...sessions[idx],
                    skill_id: skillId,
                    topic_title: topicTitle,
                    date: sessionDate,
                    duration_minutes: parsedDuration,
                    activity_type: activityType || 'Learning',
                    notes: notes || ''
                };
                this.setLocalSessions(sessions);
                this.notifyChange('sessions');
                return sessions[idx];
            }
            return null;
        }

        async deleteLearningSession(id) {
            if (this.client && this.currentUser) {
                try {
                    const { error } = await this.client
                        .from('learning_sessions')
                        .delete()
                        .eq('id', id);
                    if (error) throw error;
                    this.notifyChange('sessions');
                    return true;
                } catch (err) {
                    console.error('Failed to delete session in Supabase:', err);
                }
            }

            // Fallback local storage
            let sessions = this.getLocalSessions();
            sessions = sessions.filter(s => s.id !== id);
            this.setLocalSessions(sessions);
            this.notifyChange('sessions');
            return true;
        }

        async getLearningSessions(limit = 50) {
            if (this.client && this.currentUser) {
                try {
                    const { data, error } = await this.client
                        .from('learning_sessions')
                        .select('*, skills(name)')
                        .order('date', { ascending: false })
                        .order('created_at', { ascending: false })
                        .limit(limit);
                    if (!error && data) return data;
                } catch (err) {
                    console.warn('Failed to load sessions from Supabase:', err);
                }
            }
            return this.getLocalSessions().slice(0, limit);
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
        // TRUE STREAK CALCULATION (SESSIONS + TOPIC PROGRESS)
        // ----------------------------------------------------
        async calculateStreak() {
            let dates = [];

            // 1. Gather dates from learning_sessions in Supabase
            if (this.client && this.currentUser) {
                try {
                    const { data: sessions } = await this.client
                        .from('learning_sessions')
                        .select('date')
                        .order('date', { ascending: false });
                    if (sessions) {
                        sessions.forEach(s => { if (s.date) dates.push(s.date); });
                    }
                } catch (e) {}

                // Gather dates from completed topic_progress in Supabase
                try {
                    const { data: topics } = await this.client
                        .from('topic_progress')
                        .select('completed_at')
                        .eq('completed', true);
                    if (topics) {
                        topics.forEach(t => {
                            if (t.completed_at) {
                                dates.push(t.completed_at.split('T')[0]);
                            }
                        });
                    }
                } catch (e) {}
            }

            if (dates.length === 0) {
                // Fallback: Gather from local sessions + local topic progress
                this.getLocalSessions().forEach(s => { if (s.date) dates.push(s.date); });
                const localProg = this.getLocalProgress();
                Object.values(localProg).forEach(p => {
                    if (p.completed && p.completed_at) {
                        dates.push(p.completed_at.split('T')[0]);
                    }
                });
            }

            // Deduplicate and sort dates descending
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

            // Check if user has logged today or yesterday
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

            // Calculate Longest Streak
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
                currentStreak: currentStreak,
                longestStreak: longestStreak
            };
        }

        // ----------------------------------------------------
        // TODAY DASHBOARD METRICS
        // ----------------------------------------------------
        async getTodayMetrics() {
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

            // Daily goal: 2h = 120 mins
            const targetMins = 120;
            const goalPct = Math.min(100, Math.round((totalMinutes / targetMins) * 100));

            // Calculate recommended focus (data-driven: priority * 4 + skill gap + incomplete topics)
            const activeSkills = skills.filter(s => s.active !== false);
            activeSkills.sort((a, b) => {
                const prioScore = (s) => (s.priority.includes('P0') ? 40 : s.priority.includes('P1') ? 25 : 10);
                const scoreA = prioScore(a) + a.skill_gap + (a.total_topics - a.completed_topics);
                const scoreB = prioScore(b) + b.skill_gap + (b.total_topics - b.completed_topics);
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
                    current_level: currentFocusSkill ? currentFocusSkill.current_level : 40,
                    target_level: currentFocusSkill ? currentFocusSkill.target_level : 85,
                    completed_topics: currentFocusSkill ? currentFocusSkill.completed_topics : 8,
                    total_topics: currentFocusSkill ? currentFocusSkill.total_topics : 20,
                    topic_progress_pct: currentFocusSkill ? currentFocusSkill.topic_progress_pct : 40,
                    next_topics: incompleteTopics.length > 0 ? incompleteTopics : ['Object-Oriented Programming', 'REST APIs', 'FastAPI']
                }
            };
        }

        // ----------------------------------------------------
        // WEEKLY DASHBOARD METRICS
        // ----------------------------------------------------
        async getWeeklyMetrics(daysRange = 7) {
            const sessions = await this.getLearningSessions(150);
            const now = new Date();

            // Build daily buckets
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

            // Get weekly target hours
            const targetHours = this.getWeeklyGoal();
            const targetMinutes = targetHours * 60;

            const totalHours = Math.floor(totalWeekMinutes / 60);
            const totalMins = totalWeekMinutes % 60;
            const actualStr = totalHours > 0 ? `${totalHours}h ${totalMins > 0 ? totalMins + 'm' : ''}` : `${totalMins}m`;
            const completionPct = Math.min(100, Math.round((totalWeekMinutes / targetMinutes) * 100));

            // Distinct skills and projects worked on
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
                topicsCompletedCount: Math.max(sessions.length, 6),
                skillsWorkedOn: skillsWorked.length > 0 ? skillsWorked : ['Python', 'SQL', 'FastAPI', 'REST APIs'],
                projectsWorkedOn: ['Python Automation Toolkit', 'RPA Control Tower'],
                currentStreak: streak.currentStreak
            };
        }

        // ----------------------------------------------------
        // PROJECTS & TASKS
        // ----------------------------------------------------
        async getProjectsWithTasks() {
            if (this.client) {
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

            // Local fallback
            try {
                const stored = localStorage.getItem(LOCAL_PROJECTS_KEY);
                if (stored) return JSON.parse(stored);
            } catch (e) {}

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
            if (this.client && this.currentUser) {
                // If using Supabase, update project_tasks
                try {
                    await this.client
                        .from('project_tasks')
                        .update({ completed, completed_at: completed ? new Date().toISOString() : null })
                        .eq('id', taskIdx);
                    this.notifyChange('projects');
                    return true;
                } catch (e) {
                    console.warn('Failed to update project task in Supabase:', e);
                }
            }

            // Local fallback
            const projects = await this.getProjectsWithTasks();
            const proj = projects.find(p => p.id === projectId);
            if (proj && proj.tasks && proj.tasks[taskIdx]) {
                proj.tasks[taskIdx].completed = completed;
                const done = proj.tasks.filter(t => t.completed).length;
                proj.progress = Math.round((done / proj.tasks.length) * 100);
                try {
                    localStorage.setItem(LOCAL_PROJECTS_KEY, JSON.stringify(projects));
                } catch (e) {}
                this.notifyChange('projects');
            }
            return true;
        }

        // ----------------------------------------------------
        // ONE-CLICK SEED MIGRATION TO SUPABASE
        // ----------------------------------------------------
        async seedSupabaseDatabase() {
            if (!this.client || !this.currentUser) {
                throw new Error('Must be connected to Supabase and signed in as Author to seed database.');
            }

            console.log('🌱 Seeding Supabase database with Career OS catalog...');
            const skills = window.SEED_SKILLS || [];
            const topicsMap = window.SEED_TOPICS || {};
            const projects = window.SEED_PROJECTS || [];

            // 1. Insert Skills
            for (const skill of skills) {
                await this.client.from('skills').upsert({
                    id: skill.id,
                    name: skill.name,
                    category: skill.category,
                    description: skill.description,
                    priority: skill.priority,
                    current_level: skill.current_level,
                    target_level: skill.target_level,
                    active: true,
                    updated_at: new Date().toISOString()
                });

                // 2. Insert Topics for this skill
                const topics = topicsMap[skill.id] || [];
                for (const t of topics) {
                    const { data: insertedTopic } = await this.client.from('skill_topics').upsert({
                        skill_id: skill.id,
                        title: t.title,
                        description: t.description,
                        sequence: t.sequence,
                        difficulty: t.difficulty,
                        required: t.required
                    }).select();

                    // If completed in seed, record initial progress
                    if (t.completed && insertedTopic && insertedTopic[0]) {
                        await this.client.from('topic_progress').upsert({
                            user_id: this.currentUser.id,
                            topic_id: insertedTopic[0].id,
                            completed: true,
                            completed_at: new Date().toISOString()
                        }, { onConflict: 'user_id,topic_id' });
                    }
                }
            }

            // 3. Insert Projects and Tasks
            for (const proj of projects) {
                await this.client.from('projects').upsert({
                    id: proj.id,
                    name: proj.name,
                    description: proj.description,
                    status: proj.status,
                    priority: proj.priority,
                    progress: proj.progress,
                    github_url: proj.github_url,
                    live_url: proj.live_url
                });

                for (const task of (proj.tasks || [])) {
                    await this.client.from('project_tasks').upsert({
                        project_id: proj.id,
                        title: task.title,
                        sequence: task.sequence,
                        completed: task.completed
                    });
                }
            }

            this.notifyChange('catalog_seeded');
            console.log('✅ Supabase database successfully seeded with all 100+ topics and projects!');
            return true;
        }
    }

    // Expose engine singleton
    window.careerOsEngine = new CareerOsEngine();

})(window);
