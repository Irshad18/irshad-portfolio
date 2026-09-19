-- ====================================================================
-- CAREER OS 2.0: POSTGRESQL SCHEMA FOR SUPABASE
-- Persistent Personal Learning, Skills & Career Progression System
-- ====================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- --------------------------------------------------------------------
-- 1. SKILLS TABLE
-- --------------------------------------------------------------------
create table if not exists public.skills (
    id text primary key,
    name text not null,
    category text not null,
    description text,
    priority text not null check (priority in ('P0 - Critical', 'P1 - High', 'P2 - Medium', 'P3 - Supporting')),
    current_level integer default 0 check (current_level between 0 and 100),
    target_level integer default 85 check (target_level between 0 and 100),
    active boolean default true not null,
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- --------------------------------------------------------------------
-- 2. SKILL TOPICS TABLE
-- --------------------------------------------------------------------
create table if not exists public.skill_topics (
    id uuid default uuid_generate_v4() primary key,
    skill_id text not null references public.skills(id) on delete cascade,
    title text not null,
    description text,
    sequence integer default 1 not null,
    difficulty text default 'Beginner' check (difficulty in ('Beginner', 'Intermediate', 'Advanced')),
    required boolean default true not null,
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null
);

create index if not exists idx_skill_topics_skill_seq on public.skill_topics(skill_id, sequence);

-- --------------------------------------------------------------------
-- 3. TOPIC PROGRESS TABLE
-- --------------------------------------------------------------------
create table if not exists public.topic_progress (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid not null references auth.users(id) on delete cascade,
    topic_id uuid not null references public.skill_topics(id) on delete cascade,
    completed boolean default false not null,
    completed_at timestamptz,
    notes text,
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null,
    constraint uq_user_topic unique(user_id, topic_id)
);

create index if not exists idx_topic_progress_user on public.topic_progress(user_id, completed);
create index if not exists idx_topic_progress_topic on public.topic_progress(topic_id);

-- --------------------------------------------------------------------
-- 4. LEARNING SESSIONS TABLE
-- --------------------------------------------------------------------
create table if not exists public.learning_sessions (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid not null references auth.users(id) on delete cascade,
    skill_id text references public.skills(id) on delete set null,
    topic_id uuid references public.skill_topics(id) on delete set null,
    topic_title text,
    date date not null default current_date,
    duration_minutes integer not null check (duration_minutes > 0),
    activity_type text not null check (activity_type in (
        'Learning', 'Coding', 'Project', 'Revision', 'Interview Preparation', 'Reading'
    )),
    notes text,
    created_at timestamptz default timezone('utc'::text, now()) not null
);

create index if not exists idx_learning_sessions_user_date on public.learning_sessions(user_id, date desc);

-- --------------------------------------------------------------------
-- 5. PROJECTS TABLE
-- --------------------------------------------------------------------
create table if not exists public.projects (
    id text primary key,
    name text not null,
    description text,
    status text not null default 'In Development' check (status in ('Planning', 'In Development', 'Completed', 'Archived')),
    priority text default 'P1 - High',
    progress integer default 0 check (progress between 0 and 100),
    github_url text,
    live_url text,
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- --------------------------------------------------------------------
-- 6. PROJECT TASKS TABLE
-- --------------------------------------------------------------------
create table if not exists public.project_tasks (
    id uuid default uuid_generate_v4() primary key,
    project_id text not null references public.projects(id) on delete cascade,
    title text not null,
    sequence integer default 1 not null,
    completed boolean default false not null,
    completed_at timestamptz,
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null
);

create index if not exists idx_project_tasks_proj_seq on public.project_tasks(project_id, sequence);

-- --------------------------------------------------------------------
-- 7. WEEKLY GOALS TABLE
-- --------------------------------------------------------------------
create table if not exists public.weekly_goals (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid not null references auth.users(id) on delete cascade,
    week_start date not null,
    target_minutes integer not null default 600 check (target_minutes > 0), -- 10 hours default
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null,
    constraint uq_user_week unique(user_id, week_start)
);

-- --------------------------------------------------------------------
-- 8. MILESTONES TABLE
-- --------------------------------------------------------------------
create table if not exists public.milestones (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid not null references auth.users(id) on delete cascade,
    title text not null,
    description text,
    completed boolean default false not null,
    completed_at timestamptz,
    created_at timestamptz default timezone('utc'::text, now()) not null,
    updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
alter table public.skills enable row level security;
alter table public.skill_topics enable row level security;
alter table public.topic_progress enable row level security;
alter table public.learning_sessions enable row level security;
alter table public.projects enable row level security;
alter table public.project_tasks enable row level security;
alter table public.weekly_goals enable row level security;
alter table public.milestones enable row level security;

-- Public READ: Visitors can inspect public skills, topics, projects, and milestones
create policy "Public skills are viewable by all" 
    on public.skills for select using (true);

create policy "Public skill_topics are viewable by all" 
    on public.skill_topics for select using (true);

create policy "Public projects are viewable by all" 
    on public.projects for select using (true);

create policy "Public project_tasks are viewable by all" 
    on public.project_tasks for select using (true);

create policy "Public milestones are viewable by all" 
    on public.milestones for select using (true);

-- Authenticated WRITE: Only logged-in owner can modify catalog
create policy "Authenticated users can manage skills" 
    on public.skills for all using (auth.role() = 'authenticated');

create policy "Authenticated users can manage skill_topics" 
    on public.skill_topics for all using (auth.role() = 'authenticated');

create policy "Authenticated users can manage projects" 
    on public.projects for all using (auth.role() = 'authenticated');

create policy "Authenticated users can manage project_tasks" 
    on public.project_tasks for all using (auth.role() = 'authenticated');

-- Personal Tracking data (topic progress, sessions, weekly goals): STRICT per-user
create policy "Users can view own topic progress" 
    on public.topic_progress for select using (auth.uid() = user_id);

create policy "Users can insert own topic progress" 
    on public.topic_progress for insert with check (auth.uid() = user_id);

create policy "Users can update own topic progress" 
    on public.topic_progress for update using (auth.uid() = user_id);

create policy "Users can delete own topic progress" 
    on public.topic_progress for delete using (auth.uid() = user_id);

create policy "Users can view own learning sessions" 
    on public.learning_sessions for select using (auth.uid() = user_id);

create policy "Users can insert own learning sessions" 
    on public.learning_sessions for insert with check (auth.uid() = user_id);

create policy "Users can update own learning sessions" 
    on public.learning_sessions for update using (auth.uid() = user_id);

create policy "Users can delete own learning sessions" 
    on public.learning_sessions for delete using (auth.uid() = user_id);

create policy "Users can view own weekly goals" 
    on public.weekly_goals for select using (auth.uid() = user_id);

create policy "Users can manage own weekly goals" 
    on public.weekly_goals for all using (auth.uid() = user_id);

create policy "Users can manage own milestones" 
    on public.milestones for all using (auth.uid() = user_id);

-- ====================================================================
-- REALTIME REPLICATION CONFIGURATION
-- ====================================================================
do $$
begin
    if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
        create publication supabase_realtime;
    end if;
end $$;

alter publication supabase_realtime add table public.topic_progress;
alter publication supabase_realtime add table public.learning_sessions;
alter publication supabase_realtime add table public.project_tasks;
alter publication supabase_realtime add table public.weekly_goals;
alter publication supabase_realtime add table public.skills;
alter publication supabase_realtime add table public.projects;
