-- ====================================================================
-- CAREER OS: ONE-TIME PERSONAL PROGRESS & ACTIVITY RESET SCRIPT
-- ====================================================================
-- This script resets ONLY personal progress and activity tracking records.
-- It strictly PRESERVES all 25 skills, 430 curriculum topics, project definitions,
-- self-assessment confidence levels, and roadmap architectures.
-- ====================================================================

-- 1. RESET PERSONAL TOPIC PROGRESS (Resets to 0 / total topics completed)
DELETE FROM public.topic_progress;

-- 2. RESET PERSONAL LEARNING SESSIONS & ACTIVITY HISTORY (Resets to 0 minutes)
DELETE FROM public.learning_sessions;

-- 3. RESET PROJECT TASK PROGRESS (Preserves task definitions, sets completed to false)
UPDATE public.project_tasks SET completed = false, completed_at = null;

-- 4. RESET TRACKER MILESTONE PROGRESS (Preserves milestones, sets completed to false)
UPDATE public.milestones SET completed = false, completed_at = null;

-- 5. VERIFY CURRICULUM INTEGRITY & ZERO TRACKING RESIDUALS
SELECT 
    (SELECT count(*) FROM public.skills) as total_skills_preserved,
    (SELECT count(*) FROM public.skill_topics) as total_topics_preserved,
    (SELECT count(*) FROM public.projects) as total_projects_preserved,
    (SELECT count(*) FROM public.topic_progress) as topic_progress_records_remaining,
    (SELECT count(*) FROM public.learning_sessions) as learning_sessions_remaining;
