-- ====================================================================
-- CAREER OS 2.0: CURRICULUM SEED DATA (25 Skills, 430 Topics, 5 Projects)
-- Generated automatically with exact sequence, difficulty, priority
-- ====================================================================

-- 1. INSERT SKILLS
INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('uipath', 'UiPath', 'Automation', 'Enterprise robotic process automation, REFramework state machines, Orchestrator queues, Document Understanding, and agentic workflows.', 'P0 - Critical', 85, 95, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('power_automate', 'Power Automate', 'Automation', 'Microsoft cloud and desktop automation flows, connectors, Dataverse integration, and approvals.', 'P2 - Medium', 25, 60, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('python', 'Python', 'Programming', 'Core language for backend automation, API development, AI engineering, and data pipelines.', 'P0 - Critical', 40, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('sql', 'SQL', 'Databases', 'Relational database querying, multi-table joins, analytic window functions, query plans, and schema design.', 'P0 - Critical', 70, 90, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('postgresql', 'PostgreSQL', 'Databases', 'Advanced relational database, JSONB document storage, extensions, full text search, and pgvector embeddings.', 'P1 - High', 35, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('oracle_sql', 'Oracle SQL', 'Oracle Ecosystem', 'Enterprise Oracle SQL dialect, analytic functions, query execution plans, indexes, and optimizer hints.', 'P1 - High', 60, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('plsql', 'PL/SQL', 'Oracle Ecosystem', 'Procedural database programming in Oracle, packages, stored procedures, functions, cursors, and bulk processing.', 'P1 - High', 60, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('oracle_apex', 'Oracle APEX', 'Oracle Ecosystem', 'Low-code enterprise web applications on Oracle database, Interactive Grids, ORDS REST Data Sources, and AI capabilities.', 'P1 - High', 45, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('rest_apis', 'REST APIs', 'APIs & Backend', 'HTTP/HTTPS communication, status codes, authentication, pagination, rate limiting, and webhook integrations.', 'P0 - Critical', 65, 90, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('fastapi', 'FastAPI', 'APIs & Backend', 'High-performance async Python web framework, Pydantic validation, dependency injection, and automatic OpenAPI docs.', 'P0 - Critical', 25, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('llm_fundamentals', 'LLM Fundamentals', 'Generative AI', 'Core architecture, tokens, context windows, sampling parameters, system prompts, and model boundaries.', 'P0 - Critical', 30, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('prompt_engineering', 'Prompt Engineering', 'Generative AI', 'Systematic prompting patterns, few-shot exemplars, structured schemas, chaining, and evaluation.', 'P0 - Critical', 35, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('llm_apis', 'LLM APIs', 'Generative AI', 'Integration with OpenAI, Anthropic, and Gemini APIs, streaming tokens, function calling, and cost governance.', 'P0 - Critical', 25, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('local_ai', 'Local AI', 'Generative AI', 'Running open-weights models locally via Ollama, model quantization (GGUF), zero-cloud inference, and data privacy.', 'P1 - High', 20, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('rag', 'RAG', 'RAG', 'Retrieval-Augmented Generation: document parsing, chunking, vector indexing, hybrid search, and evaluation.', 'P0 - Critical', 15, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('vector_databases', 'Vector Databases', 'RAG', 'High-dimensional vector storage, distance metrics, ChromaDB, and pgvector index tuning.', 'P1 - High', 15, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('ai_agents', 'AI Agents', 'AI Agents', 'Autonomous reasoning, tool execution, multi-agent workflows, state/memory management, and human-in-the-loop guardrails.', 'P0 - Critical', 10, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('mcp', 'MCP (Model Context Protocol)', 'AI Agents', 'Standardized open protocol connecting AI agents to external tools, data sources, and servers.', 'P1 - High', 15, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('git', 'Git & GitHub', 'Software Engineering', 'Version control, branching workflows, pull requests, releases, and automated CI/CD with GitHub Actions.', 'P1 - High', 70, 85, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('testing', 'Testing', 'Software Engineering', 'Unit testing, integration testing, API validation with pytest, mocking, test fixtures, and coverage.', 'P1 - High', 20, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('system_design', 'System Design', 'Software Engineering', 'Client-server architecture, database sharding, caching, queues, microservices, async processing, and reliability.', 'P1 - High', 20, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('docker', 'Docker', 'DevOps & Cloud', 'Containerization of Python scripts, FastAPI microservices, PostgreSQL, and multi-container Docker Compose.', 'P1 - High', 30, 75, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('cloud', 'Cloud', 'DevOps & Cloud', 'Cloud computing fundamentals, compute, object storage, IAM, secrets management, and managed databases.', 'P1 - High', 25, 75, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('data_science', 'Data Science', 'Data Science', 'Applied statistics, pandas data transformation, exploratory analysis, regression, classification, and machine learning.', 'P2 - Medium', 20, 75, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());

INSERT INTO public.skills (id, name, category, description, priority, current_level, target_level, active)
VALUES ('ai_security', 'AI Security', 'AI Security', 'Prompt injection defenses, PII anonymization, agent permission sandboxing, guardrails, and human-in-the-loop governance.', 'P1 - High', 20, 80, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, category = EXCLUDED.category, description = EXCLUDED.description,
    priority = EXCLUDED.priority, current_level = EXCLUDED.current_level, target_level = EXCLUDED.target_level,
    updated_at = timezone('utc'::text, now());


-- 2. INSERT SKILL TOPICS
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'UiPath Studio', 'Studio IDE architecture, workflow types, project settings, packages management.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Variables', 'Variable types, scopes, default values, type conversion, GenericValue.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Arguments', 'Directional parameters (In, Out, In/Out), passing data between modular workflows.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Data Types', 'String, Int32, Boolean, DateTime, Array, List, Dictionary data types.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Control Flow', 'If, Switch, While, Do While, For Each, Parallel, Break, Continue.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Sequences', 'Linear execution flows, nesting activities, step-by-step processing.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Flowcharts', 'Decision-heavy workflows, branching logic, visual flow diagramming.', 7, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'State Machines', 'State-driven execution, transitions, entry/exit actions, REFramework basis.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Selectors', 'XML-based UI element identifiers, UI Explorer, full vs partial selectors.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Dynamic Selectors', 'Wildcards (*, ?), regex matching, selector variables, fuzzy matching.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'UI Automation', 'Modern Design Experience, App/Web Recorder, Object Repository.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Browser Automation', 'Chrome/Edge extensions, cross-browser automation, headless browser actions.', 12, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Excel Automation', 'Modern Excel activities, Workbook vs Excel Process Scope, formulas, VLOOKUP.', 13, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'PDF Automation', 'Read PDF text, Read PDF with OCR, Anchor Base, extracting key-value pairs.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Email Automation', 'Outlook 365, IMAP, POP3, SMTP, Exchange, filtering unread mail, attachments.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'File Automation', 'Path handling, File/Directory operations, moving, archiving, file watchers.', 16, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'DataTables', 'Build DataTable, Filter DataTable, Join, Merge, Lookup, Output DataTable.', 17, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'LINQ', 'LINQ querying on DataTables, Select, Where, OrderBy, GroupBy, Any, All.', 18, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Exception Handling', 'Try Catch, Finally, Throw, Rethrow, BusinessRuleException vs SystemException.', 19, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Retry Logic', 'Handling transient network and application glitches gracefully.', 20, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Retry Scope', 'Retry Scope activity, Action and Condition blocks, numberOfRetries.', 21, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'REFramework', 'Industry-standard robust enterprise state machine framework architecture.', 22, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Init State', 'Reading configuration, initializing applications, handling FirstRun vs subsequent runs.', 23, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Get Transaction Data', 'Fetching next transaction item from Orchestrator queue or local data source.', 24, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Process Transaction', 'Executing business logic for a single item, handling business exceptions.', 25, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'End Process', 'Closing applications gracefully, killing processes on error, clean shutdown.', 26, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Config.xlsx', 'Managing Settings, Constants, and Assets sheets in REFramework.', 27, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Assets', 'Text, Bool, Integer, and Credential assets in Orchestrator.', 28, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Queues', 'Creating queues, auto-retry, SLA deadlines, postpone, priority levels.', 29, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Queue Transactions', 'Add Queue Item, Get Transaction Item, Set Transaction Status (Success/Failed).', 30, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Orchestrator', 'Tenant, folders, modern folders, permissions, cloud vs on-prem.', 31, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Jobs', 'Starting, stopping, killing jobs, unattended vs attended execution.', 32, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Triggers', 'Time-based schedules, queue-based triggers, SLA-driven triggers.', 33, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Logs', 'Execution logs, log levels (Trace, Info, Warn, Error, Fatal), custom logging.', 34, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Monitoring', 'Insights, robot utilization, SLA tracking, process metrics dashboards.', 35, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Alerts', 'Email notifications, webhook alerts, error notifications.', 36, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Credentials', 'Windows Credential Manager, CyberArk, Orchestrator encrypted credentials.', 37, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Machines', 'Standard machines, machine templates, machine keys, robot allocation.', 38, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Robot Management', 'Robot accounts, user-license mappings, unattended runner setups.', 39, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'API Integration', 'HTTP Request activity, calling REST APIs, authenticating with Bearer tokens.', 40, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Integration Service', 'Pre-built connectors, OAuth connections, event-driven triggers.', 41, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Document Understanding', 'Taxonomy, digitization, classification, extractors, Validation Station.', 42, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Action Center', 'Creating tasks, assigning to business users, resuming suspended jobs.', 43, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Human-in-the-loop', 'Form-based approvals, exception validation before transaction completion.', 44, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'AI capabilities', 'AI Center, deploying ML models, consuming ML skills in workflows.', 45, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Agentic Automation', 'Autopilot, conversational automation, generative process orchestrations.', 46, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('uipath', 'Governance', 'Automation Ops, package policies, workflow analyzer rules, linting standards.', 47, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Cloud Flows', 'Automated, instant, and scheduled cloud flow architectures.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Desktop Flows', 'Power Automate Desktop (PAD) actions, recorder, desktop UI actions.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Triggers', 'Event-based triggers, recurrence, automated trigger filters.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Actions', 'Executing service operations, file manipulation, email sending.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Conditions', 'If/Else branching logic, switch statements, nested conditions.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Expressions', 'WDL expressions, string manipulation, date formatting, math formulas.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Variables', 'Initialize variable, set variable, increment, append to string/array.', 7, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Connectors', 'Standard vs premium connectors, custom connector creation with OpenAPI.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'HTTP', 'HTTP action, webhook invocation, raw HTTP request configuration.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'REST APIs', 'Consuming external REST APIs, passing headers, parsing responses.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Approvals', 'Approval workflows, multi-stage approvals, sequential & parallel approvers.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Dataverse', 'Entities, records, querying Dataverse with OData filter expressions.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'AI Builder', 'Pre-built models, invoice processing, sentiment analysis, custom prompts.', 13, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Error Handling', 'Configure Run After, try-catch scopes, alert notifications on fail.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('power_automate', 'Monitoring', 'Run history, analytics, flow diagnostics, retrying failed executions.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Variables', 'Assignment, naming conventions, dynamic typing, type inspection.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Data Types', 'Integers, floats, booleans, strings, type casting, NoneType.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Strings', 'String methods, slicing, formatting (f-strings), string immutability.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Lists', 'Indexing, slicing, appending, extending, list methods, sorting.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Tuples', 'Immutability, tuple packing/unpacking, namedtuples.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Sets', 'Unique elements, mathematical set operations, frozensets.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Dictionaries', 'Key-value mappings, dict methods, dictionary merges, defaultdict.', 7, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Conditions', 'if, elif, else branches, boolean logic, ternary operators.', 8, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Loops', 'for loops, while loops, break, continue, pass, loop else clauses.', 9, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Functions', 'def, return values, *args, **kwargs, default parameters, scope.', 10, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Lambda', 'Anonymous lambda functions, usage with map, filter, and sorted.', 11, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'List Comprehensions', 'Concise list generation with conditional filtering.', 12, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Dictionary Comprehensions', 'Dict and set comprehensions, key-value transformations.', 13, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Modules', 'Creating and importing modules, __name__ == ''__main__''.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Packages', '__init__.py, relative vs absolute imports, package namespaces.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'pip', 'Package installer, requirements.txt, wheels, resolving dependency conflicts.', 16, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Virtual Environments', 'venv, virtualenv, poetry, pipenv, isolated environments.', 17, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Exception Handling', 'try, except, else, finally, custom exception hierarchies.', 18, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'File Handling', 'open(), context managers, read, write, append, path validation.', 19, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'pathlib', 'Path objects, directory traversal, cross-platform path resolution.', 20, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'os', 'os module, directory manipulation, environment access, process tools.', 21, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'subprocess', 'Running shell commands, capturing stdout/stderr, popen pipes.', 22, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'JSON', 'json.loads(), json.dumps(), custom serializes, handling UTF-8.', 23, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'CSV', 'csv.reader, csv.DictReader, csv.writer, handling delimiters and headers.', 24, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Regular Expressions', 're module: match, search, findall, sub, compile, regex groups.', 25, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'datetime', 'datetime, date, timedelta, timezone awareness with zoneinfo, strftime/strptime.', 26, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Logging', 'logging module, log levels, StreamHandler, FileHandler, formatters.', 27, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Environment Variables', 'os.environ, python-dotenv, securing secrets, config 12-factor.', 28, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Classes', 'Class definitions, blueprints, state and behavior encapsulation.', 29, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Objects', 'Instantiation, object identity, memory references, id() check.', 30, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Constructors', '__init__ method, initializing instance attributes, __new__.', 31, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Instance Variables', 'Attribute assignment on self, instance namespace dict.', 32, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Class Variables', 'Shared class-level attributes, class namespace vs instance namespace.', 33, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Methods', 'Instance methods, @classmethod with cls, @staticmethod.', 34, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Encapsulation', 'Private attributes (__), name mangling, getters/setters, @property.', 35, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Inheritance', 'Single and multi-level inheritance, super() call, method overriding.', 36, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Polymorphism', 'Duck typing, abstract base classes, uniform method invocation.', 37, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Abstraction', 'abc module, ABC class, @abstractmethod interface contracts.', 38, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Composition', 'Has-a relationships, delegating functionality, avoiding rigid hierarchies.', 39, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Iterators', '__iter__ and __next__ dunder protocols, StopIteration.', 40, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Generators', 'yield statement, generator functions, generator expressions, memory efficiency.', 41, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Decorators', 'Function decorators, @functools.wraps, decorators with arguments, class decorators.', 42, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Context Managers', 'with statement, __enter__ and __exit__, contextlib.contextmanager.', 43, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Type Hints', 'typing module, Optional, Union, Any, List, Dict, Callable, mypy static analysis.', 44, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Dataclasses', '@dataclass, auto-generated dunder methods, frozen dataclasses, field defaults.', 45, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'AsyncIO', 'asyncio event loop, coroutines, asyncio.run, tasks, gathering futures.', 46, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Async/Await', 'Asynchronous syntax, non-blocking I/O, writing asynchronous functions.', 47, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Concurrency', 'Comparing concurrency models: asyncio vs threading vs multiprocessing.', 48, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Threading', 'threading module, GIL (Global Interpreter Lock), Lock, ThreadPoolExecutor.', 49, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Multiprocessing', 'multiprocessing module, ProcessPoolExecutor, IPC, bypassing the GIL.', 50, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'requests', 'HTTP client library, GET/POST, sessions, auth, query params, timeout handling.', 51, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'HTTP Clients', 'Comparing requests vs httpx (async HTTP), client connection pools.', 52, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'API Integration', 'REST client architecture, token refresh loops, rate-limit backoff.', 53, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Configuration Management', 'Pydantic BaseSettings, YAML/JSON configs, hierarchical app settings.', 54, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Structured Logging', 'JSON structured logs, correlation IDs for distributed tracing.', 55, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Error Handling Patterns', 'Custom domain exception hierarchy, graceful fallbacks, retry decorators.', 56, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Project Structure', 'src layout, pyproject.toml, packaging conventions, separation of concerns.', 57, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Packaging', 'Building wheels with build, publishing packages, setuptools/flit.', 58, 'Intermediate', false)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Testing', 'Test discovery, assertions, test isolation, testing edge cases.', 59, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'pytest', 'pytest test runner, test functions, parameterize, assert inspection.', 60, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Mocking', 'unittest.mock, Mock, patch, mocking external API calls in tests.', 61, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'NumPy', 'ndarray creation, array indexing, slicing, vectorization, broadcasting.', 62, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'pandas', 'DataFrames and Series, indexing (.loc, .iloc), reading CSV/Excel/SQL.', 63, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Data Cleaning', 'Handling missing values (fillna, dropna), data deduplication, type casting.', 64, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Data Transformation', 'apply, map, groupby aggregations, pivoting, merging DataFrames.', 65, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('python', 'Data Analysis', 'Descriptive statistics, correlation analysis, trend extraction.', 66, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'SELECT', 'Column selection, aliases, expressions, calculations.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'WHERE', 'Filtering rows with comparison operators, LIKE, BETWEEN, IN, IS NULL.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'ORDER BY', 'Sorting results, ASC/DESC, sorting with NULLS FIRST/LAST.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'GROUP BY', 'Aggregating rows by categories, multi-column groupings.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'HAVING', 'Filtering aggregated groups with condition predicates.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'DISTINCT', 'Eliminating duplicate rows from query results.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'CASE', 'Conditional logic expressions in SELECT, WHERE, and ORDER BY.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'COALESCE', 'Evaluating arguments and returning first non-null value, fallback defaults.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Aggregate Functions', 'COUNT, SUM, AVG, MIN, MAX over grouped data.', 9, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'INNER JOIN', 'Matching records across tables with join predicates.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'LEFT JOIN', 'Preserving all rows from left table with matching right rows.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'RIGHT JOIN', 'Preserving all rows from right table with matching left rows.', 12, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'FULL JOIN', 'Combining left and right outer join results.', 13, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'UNION', 'Combining result sets with UNION and UNION ALL.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Subqueries', 'Scalar subqueries, correlated subqueries, EXISTS, IN.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'CTE', 'Common Table Expressions, WITH clauses, readable multi-step transformations, recursive CTEs.', 16, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Window Functions', 'OVER clause, ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), partition by.', 17, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Views', 'CREATE VIEW, materialized views, view security and query abstraction.', 18, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Constraints', 'CHECK, DEFAULT, NOT NULL constraints on relational tables.', 19, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Primary Keys', 'Surrogate keys, natural keys, enforcing entity uniqueness.', 20, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Foreign Keys', 'Referential integrity, CASCADE DELETE/UPDATE behaviors.', 21, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Indexes', 'B-Tree indexes, composite indexes, covering indexes, index selectivity.', 22, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Transactions', 'ACID principles, COMMIT, ROLLBACK, SAVEPOINT, isolation levels.', 23, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Normalization', '1NF, 2NF, 3NF schema design, preventing data redundancy.', 24, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Query Optimization', 'Analyzing slow queries, avoiding SELECT *, sargable query predicates.', 25, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('sql', 'Execution Plans', 'EXPLAIN, EXPLAIN ANALYZE, interpreting sequential vs index scans, join types.', 26, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Installation', 'Installing PostgreSQL, psql command line client, pgAdmin, configuration.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Database Design', 'Schemas, table design, data types (UUID, TIMESTAMP WITH TIME ZONE).', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Tables', 'CREATE TABLE, ALTER TABLE, column defaults, generated columns.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Relationships', 'One-to-one, one-to-many, many-to-many junction tables.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Constraints', 'PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK constraints.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Indexes', 'B-Tree, Hash, GIN, GiST, BRIN, partial indexes, expression indexes.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Transactions', 'MVCC architecture, transaction isolation levels, row-level locks.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Views', 'Standard views, MATERIALIZED VIEW, REFRESH MATERIALIZED VIEW CONCURRENTLY.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Functions', 'PL/pgSQL stored functions, triggers, custom business logic.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'JSON', 'JSON data type, JSON operators (->, ->>), JSON creation functions.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'JSONB', 'Binary JSON, GIN indexing on JSONB, containment operators (@>, ?), performance.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Full Text Search', 'tsvector, tsquery, GIN text indexes, phrase matching, ranking.', 12, 'Advanced', false)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Query Optimization', 'EXPLAIN (ANALYZE, BUFFERS), vacuuming, autovacuum, work_mem tuning.', 13, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'Extensions', 'CREATE EXTENSION, uuid-ossp, pg_trgm, managing extension lifecycle.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('postgresql', 'pgvector', 'pgvector extension, vector column type, HNSW vs IVFFlat indexes, cosine similarity for RAG.', 15, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Oracle SQL Fundamentals', 'Dual table, data types, Oracle SQL dialect differences, rownum / FETCH FIRST.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Oracle Data Types', 'VARCHAR2, NUMBER, DATE, TIMESTAMP, CLOB, BLOB.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Joins', 'ANSI joins vs Oracle legacy (+) joins, partition joins.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Subqueries', 'Correlated subqueries, inline views, scalar subqueries.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'CTE', 'WITH clause, recursive subquery factoring.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Analytic Functions', 'RANK, DENSE_RANK, ROW_NUMBER, LEAD, LAG, LISTAGG, aggregate OVER (PARTITION BY).', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Views', 'Standard views, materialized views, query rewrite.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Indexes', 'B-Tree, bitmap indexes, function-based indexes in Oracle.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Sequences', 'CREATE SEQUENCE, NEXTVAL, CURRVAL, identity columns.', 9, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Transactions', 'Autonomous transactions, commit, rollback, savepoint in Oracle.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_sql', 'Query Optimization', 'AUTOTRACE, EXPLAIN PLAN, Oracle optimizer hints, cost-based optimizer (CBO).', 11, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'PL/SQL Fundamentals', 'Block structure (DECLARE, BEGIN, EXCEPTION, END), anonymous blocks.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Variables', 'Scalar types, %TYPE, %ROWTYPE variable anchors.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Conditions', 'IF-THEN-ELSIF-ELSE, CASE expressions in PL/SQL.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Loops', 'Simple LOOP, WHILE loop, FOR loop (numeric & cursor FOR loops).', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Procedures', 'CREATE OR REPLACE PROCEDURE, IN, OUT, IN OUT parameters.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Functions', 'Deterministic functions, return types, calling PL/SQL functions in SQL.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Packages', 'Package specifications vs bodies, modularity, package-level variables.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Cursors', 'Implicit cursors (%FOUND, %NOTFOUND), explicit cursors, parameterized cursors, REF CURSORS.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Exceptions', 'Predefined exceptions (NO_DATA_FOUND, TOO_MANY_ROWS), PRAGMA EXCEPTION_INIT, RAISE_APPLICATION_ERROR.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Collections', 'Associative arrays (INDEX BY), nested tables, VARRAYs, bulk operations.', 10, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Triggers', 'BEFORE/AFTER DML triggers, INSTEAD OF triggers, compound triggers, :NEW and :OLD.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Dynamic SQL', 'EXECUTE IMMEDIATE, OPEN-FOR-USING, preventing SQL injection.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('plsql', 'Transactions', 'PRAGMA AUTONOMOUS_TRANSACTION, COMMIT, ROLLBACK in procedural blocks.', 13, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Workspace', 'Workspace administration, schema assignments, developer roles.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Applications', 'Application builder, theme styles, universal theme, navigation menus.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Pages', 'Page designer, rendering tree, layout grid, component gallery.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Regions', 'Static content, cards, reports, forms, region display selectors.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Items', 'Text fields, selects, date pickers, rich text, session state values.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Buttons', 'Button actions (Submit, Redirect, Dynamic Action), button positions.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Page Processes', 'After-submit processing, PL/SQL code blocks, automated DML.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Computations', 'Page and application-level computations, setting item values.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Validations', 'Form validation rules, error display locations, PL/SQL validations.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Dynamic Actions', 'Client-side interactivity: Show/Hide, Enable/Disable, Set Value, Execute JavaScript/PL/SQL.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Forms', 'Form initialization, DML processes, master-detail relationships.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Interactive Reports', 'Searching, filtering, sorting, control break, highlights, saved reports.', 12, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Interactive Grids', 'Editable data grids, custom validation, client-side pagination.', 13, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'LOVs', 'Static and dynamic Lists of Values, cascading LOVs, shared LOVs.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Charts', 'Oracle JET data visualizations, line, bar, pie, radar charts.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Dashboards', 'KPI tiles, analytics cards, combining multiple report regions.', 16, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Shared Components', 'Application items, application processes, web credentials, templates.', 17, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Authentication', 'APEX accounts, database accounts, Custom Authentication, OAuth2/OIDC.', 18, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Authorization', 'Authorization schemes, component-level security, role-based access.', 19, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'Security', 'Session state protection (Checksums), escape special characters (XSS), SQL injection prevention.', 20, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'REST Data Sources', 'Connecting APEX to external REST endpoints, data profile mapping.', 21, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'ORDS', 'Oracle REST Data Services, publishing RESTful web services over database objects.', 22, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'REST APIs', 'Consuming external JSON web services inside APEX page processes.', 23, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'JSON', 'APEX_JSON package, generating and parsing JSON payloads in PL/SQL.', 24, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'PL/SQL Integration', 'Calling backend PL/SQL packages from APEX page processes.', 25, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'JavaScript Basics', 'apex.item(), apex.server.process(), apex.event APIs.', 26, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'CSS Basics', 'Custom Universal Theme CSS, utility classes, styling cards and badges.', 27, 'Intermediate', false)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'APEX Automation', 'Automated background workflows, polling queries, scheduled job execution.', 28, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('oracle_apex', 'APEX AI capabilities', 'APEX AI Assistant, natural language to SQL generation, AI chat components.', 29, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'HTTP', 'Protocol concepts, statelessness, client-server model, TCP connection.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'HTTPS', 'SSL/TLS encryption, certificates, secure transport layer.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Request', 'HTTP request structure: URL, method, headers, query string, body.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Response', 'HTTP response structure: status line, headers, response body.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'GET', 'Safe and idempotent resource retrieval.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'POST', 'Resource creation, submitting payloads, non-idempotent actions.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'PUT', 'Complete resource replacement, idempotent update semantics.', 7, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'PATCH', 'Partial resource modification, applying diff payloads.', 8, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'DELETE', 'Resource removal, idempotency.', 9, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Headers', 'Content-Type, Accept, Authorization, User-Agent, custom headers.', 10, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Status Codes', '2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error.', 11, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'JSON', 'Data representation standard, nested objects, arrays, types.', 12, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Authentication', 'Basic auth, token-based authentication mechanisms.', 13, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'API Keys', 'API key headers, query param keys, secret management.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'OAuth2', 'OAuth 2.0 grant types (authorization code, client credentials), refresh tokens.', 15, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'JWT', 'JSON Web Tokens: header, payload, signature, stateless claims validation.', 16, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Pagination', 'Offset-limit vs cursor-based pagination, link headers.', 17, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Rate Limiting', '429 Too Many Requests, X-RateLimit headers, token bucket algorithm.', 18, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Webhooks', 'Event-driven webhook subscriptions, payload signatures, idempotent webhook receivers.', 19, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Error Handling', 'RFC 7807 problem details, consistent error response schemas.', 20, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Retry Strategies', 'Exponential backoff, jitter, handling transient network drops.', 21, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'API Versioning', 'URI path versioning (/v1), header versioning, deprecation policies.', 22, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'Postman', 'Creating collections, environment variables, pre-request scripts, tests.', 23, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rest_apis', 'curl', 'Command-line HTTP requests, setting headers, sending data payloads, inspection.', 24, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'FastAPI Fundamentals', 'ASGI framework, Starlette foundation, interactive auto-docs, installation.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Routes', 'APIRouter, organizing endpoints into modular microservices.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Path Parameters', 'Type annotated path variables, path converters, validation.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Query Parameters', 'Optional parameters, default values, boolean flags, validation.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Request Bodies', 'Declaring JSON request bodies with Pydantic models.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Pydantic', 'BaseModel, Field, data validation, serialization, Pydantic v2 features.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Validation', 'EmailStr, HttpUrl, custom @field_validator, constraining numeric ranges.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Response Models', 'response_model, filtering sensitive fields, status_code declaration.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Dependency Injection', 'Depends(), reusable dependencies, database sessions, auth guards.', 9, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Error Handling', 'HTTPException, custom exception handlers, RequestValidationError overrides.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Middleware', 'CORSMiddleware, request timing middleware, logging middleware.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Authentication', 'OAuth2PasswordBearer, password hashing with passlib/bcrypt.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'JWT', 'Generating, encoding, and verifying JWT tokens with python-jose / pyjwt.', 13, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'OAuth Concepts', 'Securing endpoints, scopes, token claims, bearer authentication.', 14, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Async Endpoints', 'async def vs def endpoints, running non-blocking async DB/HTTP calls.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Background Tasks', 'BackgroundTasks class, executing post-response background work.', 16, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'OpenAPI', 'OpenAPI 3.0 specification generation, customizing schema metadata.', 17, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Swagger', 'Interactive Swagger UI (/docs) and ReDoc (/redoc) inspection.', 18, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Database Integration', 'Async SQLAlchemy, sessionmakers, connection pooling, asyncpg.', 19, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'Testing', 'TestClient, pytest with FastAPI, testing async endpoints with httpx.', 20, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('fastapi', 'API Deployment', 'Uvicorn, Gunicorn process managers, Dockerizing FastAPI apps.', 21, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'LLM Concepts', 'Transformer architecture, next-token prediction, pre-training vs fine-tuning.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Tokens', 'Tokenization (BPE), token-to-word ratio, token costs, rate limits.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Context Windows', 'Input/output token budgets, attention mechanisms, needle-in-haystack limits.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Temperature', 'Randomness control, top-p (nucleus sampling), top-k, determinism in output.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Model Parameters', 'Frequency penalty, presence penalty, stop sequences, max_tokens.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'System Prompts', 'Guiding persona, behavioral constraints, setting core instructions.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'User Prompts', 'Structuring dynamic input data, query phrasing, context injection.', 7, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Model Limitations', 'Knowledge cutoffs, reasoning boundaries, mathematical and spatial limits.', 8, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Hallucinations', 'Causes of hallucination, mitigation strategies, confidence calibration.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_fundamentals', 'Structured Outputs', 'Enforcing strict JSON schemas, grammar-guided generation.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Zero Shot', 'Direct instruction prompting without illustrative examples.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Few Shot', 'Providing exemplar input-output pairs to guide format and behavior.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Role Prompting', 'Assigning professional personas (e.g. Senior RPA Architect) to prime responses.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Prompt Structure', 'Delimiters, markdown formatting, XML tags for separating context from instructions.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Context Injection', 'Placing retrieved documents, chat history, and system variables in prompts.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Output Constraints', 'Enforcing brevity, negative prompting, specific formats (Markdown, CSV, JSON).', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'JSON Outputs', 'Techniques for reliably extracting parseable JSON from LLM completions.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Prompt Chaining', 'Breaking complex reasoning into sequential prompt-response stages.', 8, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('prompt_engineering', 'Evaluation', 'Benchmarking prompt effectiveness, ground-truth comparison, LLM-as-a-judge.', 9, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'API Authentication', 'API keys, project IDs, bearer tokens, securing credentials in .env.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'API Requests', 'Client SDKs vs raw HTTP requests, formulating message payloads.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Structured Responses', 'response_format: { type: ''json_object'' }, Pydantic schema validation.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Streaming', 'Server-Sent Events (SSE), streaming token chunks in real-time.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Function Calling', 'Declaring function definitions in API calls, model selecting tools.', 5, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Tool Calling', 'Multi-tool calls, passing arguments, sending tool results back to the conversation.', 6, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Error Handling', 'Handling 429 rate limits, 500 server errors, context length exceeded errors.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Rate Limits', 'RPM (requests per minute), TPM (tokens per minute), exponential backoff.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('llm_apis', 'Cost Management', 'Monitoring input/output token usage, model tier selection (Flash vs Pro).', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('local_ai', 'Ollama', 'Ollama installation, CLI commands, serving local LLMs on Mac/Linux.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('local_ai', 'Local Models', 'Llama 3, Mistral, Qwen, DeepSeek, model sizes (7B, 8B, 14B) vs VRAM.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('local_ai', 'Model Selection', 'Quantization formats (GGUF, 4-bit, 8-bit), balancing speed and precision.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('local_ai', 'Model Parameters', 'Modelfile configuration, custom system instructions, stop sequences.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('local_ai', 'Local API', 'Calling Ollama REST API (/api/generate, /api/chat) from Python.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('local_ai', 'Running Models Locally', 'Zero-cloud cost local inference, offline security compliance, privacy.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'RAG Fundamentals', 'Retrieval-Augmented Generation lifecycle, overcoming hallucination.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Document Loading', 'Loading PDF, DOCX, CSV, TXT, Markdown, HTML data sources.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Document Parsing', 'Extracting clean text, handling tables, parsing layout structure.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Chunking', 'Fixed-size chunking, chunk overlap, semantic boundaries, paragraph chunking.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Chunk Strategies', 'Recursive character splitting, parent-child chunking, sentence windowing.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Embeddings', 'Dense vector representations, text-embedding models (OpenAI, Voyage, BGE).', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Vector Databases', 'Vector store architecture, indexing high-dimensional embeddings.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Similarity Search', 'Cosine similarity, dot product, Euclidean distance calculations.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Metadata', 'Attaching file source, creation date, department, access level to chunks.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Metadata Filtering', 'Pre-filtering and post-filtering vector searches by metadata keys.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Hybrid Search', 'Combining dense vector search with sparse keyword search (BM25).', 11, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Reranking', 'Cross-encoder rerankers (Cohere, BGE-reranker) to re-order top-K candidates.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Retrieval', 'Query expansion, hypothetical document embeddings (HyDE), top-K tuning.', 13, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Context Construction', 'Assembling retrieved chunks into token-efficient prompt context.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Grounding', 'Strict instruction forcing LLM to answer only from provided context.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Citations', 'Generating source document references, page numbers, and exact quotes.', 16, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'RAG Evaluation', 'Evaluating end-to-end RAG with Ragas (Faithfulness, Answer Relevance).', 17, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('rag', 'Retrieval Evaluation', 'Context Precision, Context Recall, evaluating retrieval quality.', 18, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('vector_databases', 'Vector Embeddings', 'High-dimensional vector geometry, dimension sizes (1536, 768).', 1, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('vector_databases', 'Similarity Metrics', 'Cosine distance, Euclidean (L2) distance, Inner Product math.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('vector_databases', 'ChromaDB', 'Embedded local vector database, collections, querying, persistence.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('vector_databases', 'pgvector', 'PostgreSQL extension for vector storage, operators (<=>, <#>, <->).', 4, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('vector_databases', 'Indexing', 'HNSW (Hierarchical Navigable Small World) graphs vs IVFFlat lists.', 5, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('vector_databases', 'Metadata Filtering', 'Indexing metadata for sub-millisecond pre-filtered vector queries.', 6, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Agent Fundamentals', 'Agent loop (Think-Act-Observe), autonomy spectrum, ReAct framework.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Agent vs Chatbot', 'Difference between passive conversational bots and autonomous goal-driven agents.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Tools', 'Defining tool schemas with name, description, and strict parameter schemas.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Tool Calling', 'Parsing LLM tool invocation, executing local code, returning results.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Function Calling', 'Native API function calling support, handling tool errors.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Planning', 'Decomposing high-level goals into sequential sub-tasks, plan revision.', 6, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'State', 'Maintaining agent session state, message history, current goal progress.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Memory', 'Short-term conversation memory vs long-term vector memory.', 8, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Agent Workflows', 'Deterministic DAG flows vs dynamic autonomous agent routing.', 9, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Human-in-the-loop', 'Pause and resume execution, requesting confirmation for critical actions.', 10, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Guardrails', 'Input validation, output filtering, safety checks, preventing runaway loops.', 11, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Agent Evaluation', 'Evaluating tool selection accuracy, task completion rate, loop efficiency.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Agent Observability', 'Tracing agent thoughts, tool inputs/outputs, latency, LangSmith/OpenTelemetry.', 13, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_agents', 'Multi-Agent Concepts', 'Hierarchical supervisor swarms, specialist agents, peer-to-peer delegation.', 14, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'MCP Fundamentals', 'Model Context Protocol architecture, open standard for AI tools.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'MCP Client', 'Connecting AI clients (Claude Desktop, IDEs) to MCP server endpoints.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'MCP Server', 'Building a custom MCP server in Python / TypeScript.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'Tools', 'Exposing executable functions to agents via MCP tool declarations.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'Resources', 'Exposing file contents, database rows, and static documents via MCP.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'Prompts', 'Standardized prompt templates shared across MCP clients.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'Authentication', 'Securing MCP connections, local vs remote transport credentials.', 7, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'Security', 'Transport security (stdio vs SSE/HTTP), sandboxing tool actions.', 8, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('mcp', 'Agent + MCP', 'Connecting autonomous agent loops to enterprise MCP tool catalogs.', 9, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Git Fundamentals', 'Working directory, staging area, commit history, SHA-1 hashes.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Repository', 'git init, remote origins, upstream branches, repository structure.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Clone', 'Cloning over HTTPS and SSH, shallow clones (--depth).', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Commit', 'Writing conventional commit messages, git add -p, amending commits.', 4, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Branch', 'Feature branches, branch naming conventions, branch deletion.', 5, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Merge', 'Fast-forward merges, 3-way recursive merges, resolving merge conflicts.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Rebase', 'git rebase, interactive rebasing (squash, reword), keeping history linear.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Stash', 'git stash, stash pop, stash apply, stashing untracked files.', 8, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Reset', 'git reset --soft, --mixed, --hard, recovering from mistakes.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Revert', 'git revert, creating safe undo commits on shared branches.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Pull Requests', 'Creating PRs, code reviews, inline comments, squash and merge.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Issues', 'Issue tracking, labels, milestones, linking issues to commits.', 12, 'Beginner', false)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'Releases', 'Semantic versioning (v1.0.0), git tags, GitHub Release notes.', 13, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'GitHub Actions', 'Workflow YAML syntax, triggers (push, PR), runners, steps.', 14, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('git', 'CI/CD', 'Automated linting, testing, and deployment pipelines in GitHub Actions.', 15, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'Unit Testing', 'Testing individual functions in isolation, test independence.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'Integration Testing', 'Testing interaction between modules, databases, and APIs.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'API Testing', 'Validating HTTP status codes, response schemas, and error responses.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'pytest', 'pytest framework, test file conventions, test discovery, CLI flags.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'Mocking', 'unittest.mock, Mock vs MagicMock, patch decorator, mocking HTTP calls.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'Test Fixtures', '@pytest.fixture, setup/teardown, fixture scope, autouse.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'Test Data', 'Factory boy, faker, fixtures for realistic test payloads.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'Test Coverage', 'pytest-cov, branch coverage, identifying untested edge cases.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('testing', 'CI Testing', 'Running automated test suites on pull requests with GitHub Actions.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Client Server', 'Client-server architecture, protocols, DNS, load balancers.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'APIs', 'API design principles, RPC vs REST vs GraphQL, idempotency keys.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Databases', 'SQL vs NoSQL trade-offs, read replicas, database sharding.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Caching', 'Redis, Memcached, cache-aside, write-through, TTL, cache invalidation.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Queues', 'Message brokers (RabbitMQ, Kafka, SQS), worker pools, dead-letter queues.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Authentication', 'Stateful sessions vs stateless tokens, identity providers, OAuth.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Authorization', 'RBAC (Role-Based Access Control), ABAC, policy enforcement points.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Microservices', 'Service boundaries, service discovery, API gateways, independent deployment.', 8, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Event Driven Architecture', 'Publish/subscribe patterns, event sourcing, loose coupling.', 9, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Async Processing', 'Decoupling synchronous user requests from long-running background tasks.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Scalability', 'Horizontal vs vertical scaling, stateless services, auto-scaling.', 11, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Reliability', 'Redundancy, failover, circuit breakers, graceful degradation.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('system_design', 'Observability', 'Logging, metrics, distributed tracing, alerting, health checks.', 13, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Images', 'Docker image layers, base images (Alpine, Slim), image tagging.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Containers', 'Container lifecycle (run, stop, rm), process isolation, cgroups.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Dockerfile', 'FROM, WORKDIR, COPY, RUN, CMD vs ENTRYPOINT, multi-stage builds.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Volumes', 'Named volumes, bind mounts, persisting database and log data.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Networks', 'Bridge networks, host networking, inter-container communication.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Environment Variables', '.env file integration, passing runtime environment variables.', 6, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Docker Compose', 'docker-compose.yml syntax, services, dependencies, networks.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Containerized FastAPI', 'Packaging a production-ready async FastAPI service in Docker.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('docker', 'Containerized PostgreSQL', 'Running PostgreSQL + pgvector locally with custom initialization scripts.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Cloud Fundamentals', 'Cloud computing models (IaaS, PaaS, SaaS), regions, availability zones.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Compute', 'Virtual machines, containers in cloud (ECS, Cloud Run), serverless compute.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Storage', 'Object storage (S3, GCS, OCI Object Storage), lifecycle policies, bucket permissions.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Networking', 'VPC, subnets, security groups, public vs private subnets, NAT gateways.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'IAM', 'Identity and Access Management, users, roles, least-privilege policies.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Secrets', 'AWS Secrets Manager, GCP Secret Manager, storing API keys and DB credentials.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Managed Databases', 'Cloud SQL, RDS, Supabase, automated backups, high availability.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Serverless', 'Serverless functions, event-driven execution, cold starts.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Monitoring', 'CloudWatch, Google Cloud Monitoring, OCI Monitoring, dashboards.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Logging', 'Centralized log aggregation, log retention, searching cloud logs.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('cloud', 'Deployment', 'Deploying web services and API endpoints on cloud platforms.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Statistics', 'Mean, median, mode, variance, standard deviation, distributions.', 1, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Probability', 'Conditional probability, Bayes theorem, expected values.', 2, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'NumPy', 'Numerical computing, matrix operations, broadcasting, array slicing.', 3, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'pandas', 'DataFrames, reading disparate sources, index alignment, reshaping data.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Data Cleaning', 'Handling missing data, outliers, string parsing, type coercions.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Exploratory Data Analysis', 'Descriptive metrics, correlation heatmaps, identifying data trends.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Data Visualization', 'Matplotlib, Seaborn, plotting distributions, categorical plots.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Feature Engineering', 'One-hot encoding, feature scaling (StandardScaler, MinMaxScaler), binning.', 8, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Regression', 'Linear regression, multiple regression, Mean Squared Error, R-squared.', 9, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Classification', 'Logistic regression, Decision Trees, Random Forests, confusion matrices.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Clustering', 'K-Means clustering, DBSCAN, elbow method, silhouette score.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Model Evaluation', 'Train/test split, cross-validation, precision, recall, F1 score, ROC-AUC.', 12, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('data_science', 'Machine Learning Fundamentals', 'Supervised vs unsupervised learning, overfitting, bias-variance tradeoff.', 13, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Authentication', 'Securing AI API endpoints, token verification, client identity.', 1, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Authorization', 'Fine-grained permissions, multi-tenant isolation in AI applications.', 2, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Secrets Management', 'Keeping API keys, credentials, and access tokens out of code and prompts.', 3, 'Beginner', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Prompt Injection', 'Direct and indirect prompt injection attacks, jailbreak defenses.', 4, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Data Leakage', 'Preventing proprietary and training data leaks in LLM completions.', 5, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'PII', 'Personally Identifiable Information detection, masking, anonymization.', 6, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Least Privilege', 'Restricting tool and agent capabilities to only what is required.', 7, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Agent Permissions', 'Sandboxing agent file system access, limiting external network calls.', 8, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Guardrails', 'Llama Guard, NeMo Guardrails, semantic input/output safety checks.', 9, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Audit Logs', 'Logging all LLM prompts, completions, tool invocations for audit trails.', 10, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'Human Approval', 'Human-in-the-loop gates before executing state-changing transactions.', 11, 'Intermediate', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());
INSERT INTO public.skill_topics (skill_id, title, description, sequence, difficulty, required)
VALUES ('ai_security', 'AI Evaluation', 'Red-teaming AI systems, safety benchmarks, vulnerability scanning.', 12, 'Advanced', true)
ON CONFLICT (skill_id, title) DO UPDATE SET
    description = EXCLUDED.description, sequence = EXCLUDED.sequence, difficulty = EXCLUDED.difficulty,
    required = EXCLUDED.required, updated_at = timezone('utc'::text, now());

-- 3. INSERT PROJECTS
INSERT INTO public.projects (id, name, description, status, priority, progress, github_url, live_url)
VALUES ('proj_toolkit', 'Python Automation Toolkit', 'High-performance modular Python toolkit for enterprise workflow automation, resilient REST API consumers, and CLI utilities.', 'In Development', 'P0 - Critical', 45, 'https://github.com/irshadkohli/python-automation-toolkit', '')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, description = EXCLUDED.description, status = EXCLUDED.status,
    priority = EXCLUDED.priority, progress = EXCLUDED.progress, github_url = EXCLUDED.github_url,
    updated_at = timezone('utc'::text, now());
INSERT INTO public.projects (id, name, description, status, priority, progress, github_url, live_url)
VALUES ('proj_rpa_tower', 'RPA Control Tower', 'Unified enterprise operational dashboard monitoring UiPath robot clusters, job queue SLAs, and automated exception triaging.', 'In Development', 'P0 - Critical', 40, 'https://github.com/irshadkohli/rpa-control-tower', '')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, description = EXCLUDED.description, status = EXCLUDED.status,
    priority = EXCLUDED.priority, progress = EXCLUDED.progress, github_url = EXCLUDED.github_url,
    updated_at = timezone('utc'::text, now());
INSERT INTO public.projects (id, name, description, status, priority, progress, github_url, live_url)
VALUES ('proj_knowledge_asst', 'Enterprise Knowledge Assistant', 'Production RAG microservice with FastAPI, PostgreSQL pgvector embeddings, and citation grounding.', 'In Development', 'P0 - Critical', 30, 'https://github.com/irshadkohli/enterprise-knowledge-assistant', '')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, description = EXCLUDED.description, status = EXCLUDED.status,
    priority = EXCLUDED.priority, progress = EXCLUDED.progress, github_url = EXCLUDED.github_url,
    updated_at = timezone('utc'::text, now());
INSERT INTO public.projects (id, name, description, status, priority, progress, github_url, live_url)
VALUES ('proj_ai_agent', 'AI Automation Agent', 'Autonomous reasoning agent that investigates failed RPA production jobs, queries database logs, and generates triage reports.', 'Planning', 'P0 - Critical', 20, 'https://github.com/irshadkohli/ai-automation-agent', '')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, description = EXCLUDED.description, status = EXCLUDED.status,
    priority = EXCLUDED.priority, progress = EXCLUDED.progress, github_url = EXCLUDED.github_url,
    updated_at = timezone('utc'::text, now());
INSERT INTO public.projects (id, name, description, status, priority, progress, github_url, live_url)
VALUES ('proj_capstone', 'Intelligent Automation Platform (Capstone)', '🌟 FLAGSHIP SYNTHESIS: Full-stack convergence of deterministic enterprise RPA execution with multi-agent cognitive reasoning.', 'Planning', 'P0 - Critical', 15, 'https://github.com/irshadkohli/intelligent-automation-platform', '')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, description = EXCLUDED.description, status = EXCLUDED.status,
    priority = EXCLUDED.priority, progress = EXCLUDED.progress, github_url = EXCLUDED.github_url,
    updated_at = timezone('utc'::text, now());