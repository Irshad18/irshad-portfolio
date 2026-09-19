/**
 * CAREER OS 2.0: SEED DATA & COMPREHENSIVE TOPICS CATALOG
 * 
 * Complete long-term learning curriculum across all 12 categories, 25 skills,
 * ~450 topics, and 5 connected projects.
 * Preserves user's verified completed topic milestones.
 */

const SEED_SKILLS = [
    {
        "id": "uipath",
        "name": "UiPath",
        "category": "Automation",
        "description": "Enterprise robotic process automation, REFramework state machines, Orchestrator queues, Document Understanding, and agentic workflows.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 95,
        "active": true
    },
    {
        "id": "power_automate",
        "name": "Power Automate",
        "category": "Automation",
        "description": "Microsoft cloud and desktop automation flows, connectors, Dataverse integration, and approvals.",
        "priority": "P2 - Medium",
        "current_level": 0,
        "target_level": 60,
        "active": true
    },
    {
        "id": "python",
        "name": "Python",
        "category": "Programming",
        "description": "Core language for backend automation, API development, AI engineering, and data pipelines.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "sql",
        "name": "SQL",
        "category": "Databases",
        "description": "Relational database querying, multi-table joins, analytic window functions, query plans, and schema design.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 90,
        "active": true
    },
    {
        "id": "postgresql",
        "name": "PostgreSQL",
        "category": "Databases",
        "description": "Advanced relational database, JSONB document storage, extensions, full text search, and pgvector embeddings.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "oracle_sql",
        "name": "Oracle SQL",
        "category": "Oracle Ecosystem",
        "description": "Enterprise Oracle SQL dialect, analytic functions, query execution plans, indexes, and optimizer hints.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "plsql",
        "name": "PL/SQL",
        "category": "Oracle Ecosystem",
        "description": "Procedural database programming in Oracle, packages, stored procedures, functions, cursors, and bulk processing.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "oracle_apex",
        "name": "Oracle APEX",
        "category": "Oracle Ecosystem",
        "description": "Low-code enterprise web applications on Oracle database, Interactive Grids, ORDS REST Data Sources, and AI capabilities.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "rest_apis",
        "name": "REST APIs",
        "category": "APIs & Backend",
        "description": "HTTP/HTTPS communication, status codes, authentication, pagination, rate limiting, and webhook integrations.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 90,
        "active": true
    },
    {
        "id": "fastapi",
        "name": "FastAPI",
        "category": "APIs & Backend",
        "description": "High-performance async Python web framework, Pydantic validation, dependency injection, and automatic OpenAPI docs.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "llm_fundamentals",
        "name": "LLM Fundamentals",
        "category": "Generative AI",
        "description": "Core architecture, tokens, context windows, sampling parameters, system prompts, and model boundaries.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "prompt_engineering",
        "name": "Prompt Engineering",
        "category": "Generative AI",
        "description": "Systematic prompting patterns, few-shot exemplars, structured schemas, chaining, and evaluation.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "llm_apis",
        "name": "LLM APIs",
        "category": "Generative AI",
        "description": "Integration with OpenAI, Anthropic, and Gemini APIs, streaming tokens, function calling, and cost governance.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "local_ai",
        "name": "Local AI",
        "category": "Generative AI",
        "description": "Running open-weights models locally via Ollama, model quantization (GGUF), zero-cloud inference, and data privacy.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "rag",
        "name": "RAG",
        "category": "RAG",
        "description": "Retrieval-Augmented Generation: document parsing, chunking, vector indexing, hybrid search, and evaluation.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "vector_databases",
        "name": "Vector Databases",
        "category": "RAG",
        "description": "High-dimensional vector storage, distance metrics, ChromaDB, and pgvector index tuning.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "ai_agents",
        "name": "AI Agents",
        "category": "AI Agents",
        "description": "Autonomous reasoning, tool execution, multi-agent workflows, state/memory management, and human-in-the-loop guardrails.",
        "priority": "P0 - Critical",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "mcp",
        "name": "MCP (Model Context Protocol)",
        "category": "AI Agents",
        "description": "Standardized open protocol connecting AI agents to external tools, data sources, and servers.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "git",
        "name": "Git & GitHub",
        "category": "Software Engineering",
        "description": "Version control, branching workflows, pull requests, releases, and automated CI/CD with GitHub Actions.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 85,
        "active": true
    },
    {
        "id": "testing",
        "name": "Testing",
        "category": "Software Engineering",
        "description": "Unit testing, integration testing, API validation with pytest, mocking, test fixtures, and coverage.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "system_design",
        "name": "System Design",
        "category": "Software Engineering",
        "description": "Client-server architecture, database sharding, caching, queues, microservices, async processing, and reliability.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    },
    {
        "id": "docker",
        "name": "Docker",
        "category": "DevOps & Cloud",
        "description": "Containerization of Python scripts, FastAPI microservices, PostgreSQL, and multi-container Docker Compose.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 75,
        "active": true
    },
    {
        "id": "cloud",
        "name": "Cloud",
        "category": "DevOps & Cloud",
        "description": "Cloud computing fundamentals, compute, object storage, IAM, secrets management, and managed databases.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 75,
        "active": true
    },
    {
        "id": "data_science",
        "name": "Data Science",
        "category": "Data Science",
        "description": "Applied statistics, pandas data transformation, exploratory analysis, regression, classification, and machine learning.",
        "priority": "P2 - Medium",
        "current_level": 0,
        "target_level": 75,
        "active": true
    },
    {
        "id": "ai_security",
        "name": "AI Security",
        "category": "AI Security",
        "description": "Prompt injection defenses, PII anonymization, agent permission sandboxing, guardrails, and human-in-the-loop governance.",
        "priority": "P1 - High",
        "current_level": 0,
        "target_level": 80,
        "active": true
    }
];

const SEED_TOPICS = {
    "uipath": [
        {
            "title": "UiPath Studio",
            "description": "Studio IDE architecture, workflow types, project settings, packages management.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Variables",
            "description": "Variable types, scopes, default values, type conversion, GenericValue.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Arguments",
            "description": "Directional parameters (In, Out, In/Out), passing data between modular workflows.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Data Types",
            "description": "String, Int32, Boolean, DateTime, Array, List, Dictionary data types.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Control Flow",
            "description": "If, Switch, While, Do While, For Each, Parallel, Break, Continue.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Sequences",
            "description": "Linear execution flows, nesting activities, step-by-step processing.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Flowcharts",
            "description": "Decision-heavy workflows, branching logic, visual flow diagramming.",
            "sequence": 7,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "State Machines",
            "description": "State-driven execution, transitions, entry/exit actions, REFramework basis.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Studio & Workflows",
            "completed": false
        },
        {
            "title": "Selectors",
            "description": "XML-based UI element identifiers, UI Explorer, full vs partial selectors.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "UI Automation & Selectors",
            "completed": false
        },
        {
            "title": "Dynamic Selectors",
            "description": "Wildcards (*, ?), regex matching, selector variables, fuzzy matching.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "UI Automation & Selectors",
            "completed": false
        },
        {
            "title": "UI Automation",
            "description": "Modern Design Experience, App/Web Recorder, Object Repository.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "UI Automation & Selectors",
            "completed": false
        },
        {
            "title": "Browser Automation",
            "description": "Chrome/Edge extensions, cross-browser automation, headless browser actions.",
            "sequence": 12,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "UI Automation & Selectors",
            "completed": false
        },
        {
            "title": "Excel Automation",
            "description": "Modern Excel activities, Workbook vs Excel Process Scope, formulas, VLOOKUP.",
            "sequence": 13,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Data & Document Automation",
            "completed": false
        },
        {
            "title": "PDF Automation",
            "description": "Read PDF text, Read PDF with OCR, Anchor Base, extracting key-value pairs.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Data & Document Automation",
            "completed": false
        },
        {
            "title": "Email Automation",
            "description": "Outlook 365, IMAP, POP3, SMTP, Exchange, filtering unread mail, attachments.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Data & Document Automation",
            "completed": false
        },
        {
            "title": "File Automation",
            "description": "Path handling, File/Directory operations, moving, archiving, file watchers.",
            "sequence": 16,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Data & Document Automation",
            "completed": false
        },
        {
            "title": "DataTables",
            "description": "Build DataTable, Filter DataTable, Join, Merge, Lookup, Output DataTable.",
            "sequence": 17,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Data & Document Automation",
            "completed": false
        },
        {
            "title": "LINQ",
            "description": "LINQ querying on DataTables, Select, Where, OrderBy, GroupBy, Any, All.",
            "sequence": 18,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Data & Document Automation",
            "completed": false
        },
        {
            "title": "Exception Handling",
            "description": "Try Catch, Finally, Throw, Rethrow, BusinessRuleException vs SystemException.",
            "sequence": 19,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Exception Handling & Reliability",
            "completed": false
        },
        {
            "title": "Retry Logic",
            "description": "Handling transient network and application glitches gracefully.",
            "sequence": 20,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Exception Handling & Reliability",
            "completed": false
        },
        {
            "title": "Retry Scope",
            "description": "Retry Scope activity, Action and Condition blocks, numberOfRetries.",
            "sequence": 21,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Exception Handling & Reliability",
            "completed": false
        },
        {
            "title": "REFramework",
            "description": "Industry-standard robust enterprise state machine framework architecture.",
            "sequence": 22,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "REFramework",
            "completed": false
        },
        {
            "title": "Init State",
            "description": "Reading configuration, initializing applications, handling FirstRun vs subsequent runs.",
            "sequence": 23,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "REFramework",
            "completed": false
        },
        {
            "title": "Get Transaction Data",
            "description": "Fetching next transaction item from Orchestrator queue or local data source.",
            "sequence": 24,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "REFramework",
            "completed": false
        },
        {
            "title": "Process Transaction",
            "description": "Executing business logic for a single item, handling business exceptions.",
            "sequence": 25,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "REFramework",
            "completed": false
        },
        {
            "title": "End Process",
            "description": "Closing applications gracefully, killing processes on error, clean shutdown.",
            "sequence": 26,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "REFramework",
            "completed": false
        },
        {
            "title": "Config.xlsx",
            "description": "Managing Settings, Constants, and Assets sheets in REFramework.",
            "sequence": 27,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "REFramework",
            "completed": false
        },
        {
            "title": "Assets",
            "description": "Text, Bool, Integer, and Credential assets in Orchestrator.",
            "sequence": 28,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Queues",
            "description": "Creating queues, auto-retry, SLA deadlines, postpone, priority levels.",
            "sequence": 29,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Queue Transactions",
            "description": "Add Queue Item, Get Transaction Item, Set Transaction Status (Success/Failed).",
            "sequence": 30,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Orchestrator",
            "description": "Tenant, folders, modern folders, permissions, cloud vs on-prem.",
            "sequence": 31,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Jobs",
            "description": "Starting, stopping, killing jobs, unattended vs attended execution.",
            "sequence": 32,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Triggers",
            "description": "Time-based schedules, queue-based triggers, SLA-driven triggers.",
            "sequence": 33,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Logs",
            "description": "Execution logs, log levels (Trace, Info, Warn, Error, Fatal), custom logging.",
            "sequence": 34,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Monitoring",
            "description": "Insights, robot utilization, SLA tracking, process metrics dashboards.",
            "sequence": 35,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Alerts",
            "description": "Email notifications, webhook alerts, error notifications.",
            "sequence": 36,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Credentials",
            "description": "Windows Credential Manager, CyberArk, Orchestrator encrypted credentials.",
            "sequence": 37,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Machines",
            "description": "Standard machines, machine templates, machine keys, robot allocation.",
            "sequence": 38,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "Robot Management",
            "description": "Robot accounts, user-license mappings, unattended runner setups.",
            "sequence": 39,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Orchestrator & Infrastructure",
            "completed": false
        },
        {
            "title": "API Integration",
            "description": "HTTP Request activity, calling REST APIs, authenticating with Bearer tokens.",
            "sequence": 40,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "Integration Service",
            "description": "Pre-built connectors, OAuth connections, event-driven triggers.",
            "sequence": 41,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "Document Understanding",
            "description": "Taxonomy, digitization, classification, extractors, Validation Station.",
            "sequence": 42,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "Action Center",
            "description": "Creating tasks, assigning to business users, resuming suspended jobs.",
            "sequence": 43,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "Human-in-the-loop",
            "description": "Form-based approvals, exception validation before transaction completion.",
            "sequence": 44,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "AI capabilities",
            "description": "AI Center, deploying ML models, consuming ML skills in workflows.",
            "sequence": 45,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "Agentic Automation",
            "description": "Autopilot, conversational automation, generative process orchestrations.",
            "sequence": 46,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        },
        {
            "title": "Governance",
            "description": "Automation Ops, package policies, workflow analyzer rules, linting standards.",
            "sequence": 47,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "uipath",
            "subtopic": "Integrations & Advanced AI",
            "completed": false
        }
    ],
    "power_automate": [
        {
            "title": "Cloud Flows",
            "description": "Automated, instant, and scheduled cloud flow architectures.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Core Flows",
            "completed": false
        },
        {
            "title": "Desktop Flows",
            "description": "Power Automate Desktop (PAD) actions, recorder, desktop UI actions.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Core Flows",
            "completed": false
        },
        {
            "title": "Triggers",
            "description": "Event-based triggers, recurrence, automated trigger filters.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Core Flows",
            "completed": false
        },
        {
            "title": "Actions",
            "description": "Executing service operations, file manipulation, email sending.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Core Flows",
            "completed": false
        },
        {
            "title": "Conditions",
            "description": "If/Else branching logic, switch statements, nested conditions.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Core Flows",
            "completed": false
        },
        {
            "title": "Expressions",
            "description": "WDL expressions, string manipulation, date formatting, math formulas.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Expressions & Data",
            "completed": false
        },
        {
            "title": "Variables",
            "description": "Initialize variable, set variable, increment, append to string/array.",
            "sequence": 7,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Expressions & Data",
            "completed": false
        },
        {
            "title": "Connectors",
            "description": "Standard vs premium connectors, custom connector creation with OpenAPI.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Integrations & APIs",
            "completed": false
        },
        {
            "title": "HTTP",
            "description": "HTTP action, webhook invocation, raw HTTP request configuration.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Integrations & APIs",
            "completed": false
        },
        {
            "title": "REST APIs",
            "description": "Consuming external REST APIs, passing headers, parsing responses.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Integrations & APIs",
            "completed": false
        },
        {
            "title": "Approvals",
            "description": "Approval workflows, multi-stage approvals, sequential & parallel approvers.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Enterprise & Governance",
            "completed": false
        },
        {
            "title": "Dataverse",
            "description": "Entities, records, querying Dataverse with OData filter expressions.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Enterprise & Governance",
            "completed": false
        },
        {
            "title": "AI Builder",
            "description": "Pre-built models, invoice processing, sentiment analysis, custom prompts.",
            "sequence": 13,
            "difficulty": "Advanced",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Enterprise & Governance",
            "completed": false
        },
        {
            "title": "Error Handling",
            "description": "Configure Run After, try-catch scopes, alert notifications on fail.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Operations & Monitoring",
            "completed": false
        },
        {
            "title": "Monitoring",
            "description": "Run history, analytics, flow diagnostics, retrying failed executions.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "power_automate",
            "subtopic": "Operations & Monitoring",
            "completed": false
        }
    ],
    "python": [
        {
            "title": "Variables",
            "description": "Assignment, naming conventions, dynamic typing, type inspection.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Data Types",
            "description": "Integers, floats, booleans, strings, type casting, NoneType.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Strings",
            "description": "String methods, slicing, formatting (f-strings), string immutability.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Lists",
            "description": "Indexing, slicing, appending, extending, list methods, sorting.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Tuples",
            "description": "Immutability, tuple packing/unpacking, namedtuples.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Sets",
            "description": "Unique elements, mathematical set operations, frozensets.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Dictionaries",
            "description": "Key-value mappings, dict methods, dictionary merges, defaultdict.",
            "sequence": 7,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Conditions",
            "description": "if, elif, else branches, boolean logic, ternary operators.",
            "sequence": 8,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Loops",
            "description": "for loops, while loops, break, continue, pass, loop else clauses.",
            "sequence": 9,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Functions",
            "description": "def, return values, *args, **kwargs, default parameters, scope.",
            "sequence": 10,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Lambda",
            "description": "Anonymous lambda functions, usage with map, filter, and sorted.",
            "sequence": 11,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "List Comprehensions",
            "description": "Concise list generation with conditional filtering.",
            "sequence": 12,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Dictionary Comprehensions",
            "description": "Dict and set comprehensions, key-value transformations.",
            "sequence": 13,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Fundamentals",
            "completed": false
        },
        {
            "title": "Modules",
            "description": "Creating and importing modules, __name__ == '__main__'.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Packages",
            "description": "__init__.py, relative vs absolute imports, package namespaces.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "pip",
            "description": "Package installer, requirements.txt, wheels, resolving dependency conflicts.",
            "sequence": 16,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Virtual Environments",
            "description": "venv, virtualenv, poetry, pipenv, isolated environments.",
            "sequence": 17,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Exception Handling",
            "description": "try, except, else, finally, custom exception hierarchies.",
            "sequence": 18,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "File Handling",
            "description": "open(), context managers, read, write, append, path validation.",
            "sequence": 19,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "pathlib",
            "description": "Path objects, directory traversal, cross-platform path resolution.",
            "sequence": 20,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "os",
            "description": "os module, directory manipulation, environment access, process tools.",
            "sequence": 21,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "subprocess",
            "description": "Running shell commands, capturing stdout/stderr, popen pipes.",
            "sequence": 22,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "JSON",
            "description": "json.loads(), json.dumps(), custom serializes, handling UTF-8.",
            "sequence": 23,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "CSV",
            "description": "csv.reader, csv.DictReader, csv.writer, handling delimiters and headers.",
            "sequence": 24,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Regular Expressions",
            "description": "re module: match, search, findall, sub, compile, regex groups.",
            "sequence": 25,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "datetime",
            "description": "datetime, date, timedelta, timezone awareness with zoneinfo, strftime/strptime.",
            "sequence": 26,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Logging",
            "description": "logging module, log levels, StreamHandler, FileHandler, formatters.",
            "sequence": 27,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Environment Variables",
            "description": "os.environ, python-dotenv, securing secrets, config 12-factor.",
            "sequence": 28,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Intermediate",
            "completed": false
        },
        {
            "title": "Classes",
            "description": "Class definitions, blueprints, state and behavior encapsulation.",
            "sequence": 29,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Objects",
            "description": "Instantiation, object identity, memory references, id() check.",
            "sequence": 30,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Constructors",
            "description": "__init__ method, initializing instance attributes, __new__.",
            "sequence": 31,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Instance Variables",
            "description": "Attribute assignment on self, instance namespace dict.",
            "sequence": 32,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Class Variables",
            "description": "Shared class-level attributes, class namespace vs instance namespace.",
            "sequence": 33,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Methods",
            "description": "Instance methods, @classmethod with cls, @staticmethod.",
            "sequence": 34,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Encapsulation",
            "description": "Private attributes (__), name mangling, getters/setters, @property.",
            "sequence": 35,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Inheritance",
            "description": "Single and multi-level inheritance, super() call, method overriding.",
            "sequence": 36,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Polymorphism",
            "description": "Duck typing, abstract base classes, uniform method invocation.",
            "sequence": 37,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Abstraction",
            "description": "abc module, ABC class, @abstractmethod interface contracts.",
            "sequence": 38,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Composition",
            "description": "Has-a relationships, delegating functionality, avoiding rigid hierarchies.",
            "sequence": 39,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "OOP",
            "completed": false
        },
        {
            "title": "Iterators",
            "description": "__iter__ and __next__ dunder protocols, StopIteration.",
            "sequence": 40,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Generators",
            "description": "yield statement, generator functions, generator expressions, memory efficiency.",
            "sequence": 41,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Decorators",
            "description": "Function decorators, @functools.wraps, decorators with arguments, class decorators.",
            "sequence": 42,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Context Managers",
            "description": "with statement, __enter__ and __exit__, contextlib.contextmanager.",
            "sequence": 43,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Type Hints",
            "description": "typing module, Optional, Union, Any, List, Dict, Callable, mypy static analysis.",
            "sequence": 44,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Dataclasses",
            "description": "@dataclass, auto-generated dunder methods, frozen dataclasses, field defaults.",
            "sequence": 45,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "AsyncIO",
            "description": "asyncio event loop, coroutines, asyncio.run, tasks, gathering futures.",
            "sequence": 46,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Async/Await",
            "description": "Asynchronous syntax, non-blocking I/O, writing asynchronous functions.",
            "sequence": 47,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Concurrency",
            "description": "Comparing concurrency models: asyncio vs threading vs multiprocessing.",
            "sequence": 48,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Threading",
            "description": "threading module, GIL (Global Interpreter Lock), Lock, ThreadPoolExecutor.",
            "sequence": 49,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "Multiprocessing",
            "description": "multiprocessing module, ProcessPoolExecutor, IPC, bypassing the GIL.",
            "sequence": 50,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Advanced",
            "completed": false
        },
        {
            "title": "requests",
            "description": "HTTP client library, GET/POST, sessions, auth, query params, timeout handling.",
            "sequence": 51,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "HTTP Clients",
            "description": "Comparing requests vs httpx (async HTTP), client connection pools.",
            "sequence": 52,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "API Integration",
            "description": "REST client architecture, token refresh loops, rate-limit backoff.",
            "sequence": 53,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Configuration Management",
            "description": "Pydantic BaseSettings, YAML/JSON configs, hierarchical app settings.",
            "sequence": 54,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Structured Logging",
            "description": "JSON structured logs, correlation IDs for distributed tracing.",
            "sequence": 55,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Error Handling Patterns",
            "description": "Custom domain exception hierarchy, graceful fallbacks, retry decorators.",
            "sequence": 56,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Project Structure",
            "description": "src layout, pyproject.toml, packaging conventions, separation of concerns.",
            "sequence": 57,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Packaging",
            "description": "Building wheels with build, publishing packages, setuptools/flit.",
            "sequence": 58,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": false,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Testing",
            "description": "Test discovery, assertions, test isolation, testing edge cases.",
            "sequence": 59,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "pytest",
            "description": "pytest test runner, test functions, parameterize, assert inspection.",
            "sequence": 60,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "Mocking",
            "description": "unittest.mock, Mock, patch, mocking external API calls in tests.",
            "sequence": 61,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "python",
            "subtopic": "Professional Python",
            "completed": false
        },
        {
            "title": "NumPy",
            "description": "ndarray creation, array indexing, slicing, vectorization, broadcasting.",
            "sequence": 62,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Data",
            "completed": false
        },
        {
            "title": "pandas",
            "description": "DataFrames and Series, indexing (.loc, .iloc), reading CSV/Excel/SQL.",
            "sequence": 63,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Data",
            "completed": false
        },
        {
            "title": "Data Cleaning",
            "description": "Handling missing values (fillna, dropna), data deduplication, type casting.",
            "sequence": 64,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Data",
            "completed": false
        },
        {
            "title": "Data Transformation",
            "description": "apply, map, groupby aggregations, pivoting, merging DataFrames.",
            "sequence": 65,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Data",
            "completed": false
        },
        {
            "title": "Data Analysis",
            "description": "Descriptive statistics, correlation analysis, trend extraction.",
            "sequence": 66,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "python",
            "subtopic": "Data",
            "completed": false
        }
    ],
    "sql": [
        {
            "title": "SELECT",
            "description": "Column selection, aliases, expressions, calculations.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "WHERE",
            "description": "Filtering rows with comparison operators, LIKE, BETWEEN, IN, IS NULL.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "ORDER BY",
            "description": "Sorting results, ASC/DESC, sorting with NULLS FIRST/LAST.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "GROUP BY",
            "description": "Aggregating rows by categories, multi-column groupings.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "HAVING",
            "description": "Filtering aggregated groups with condition predicates.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "DISTINCT",
            "description": "Eliminating duplicate rows from query results.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "CASE",
            "description": "Conditional logic expressions in SELECT, WHERE, and ORDER BY.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "COALESCE",
            "description": "Evaluating arguments and returning first non-null value, fallback defaults.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "Aggregate Functions",
            "description": "COUNT, SUM, AVG, MIN, MAX over grouped data.",
            "sequence": 9,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Querying & Aggregations",
            "completed": false
        },
        {
            "title": "INNER JOIN",
            "description": "Matching records across tables with join predicates.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Joins & Set Operations",
            "completed": false
        },
        {
            "title": "LEFT JOIN",
            "description": "Preserving all rows from left table with matching right rows.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Joins & Set Operations",
            "completed": false
        },
        {
            "title": "RIGHT JOIN",
            "description": "Preserving all rows from right table with matching left rows.",
            "sequence": 12,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Joins & Set Operations",
            "completed": false
        },
        {
            "title": "FULL JOIN",
            "description": "Combining left and right outer join results.",
            "sequence": 13,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Joins & Set Operations",
            "completed": false
        },
        {
            "title": "UNION",
            "description": "Combining result sets with UNION and UNION ALL.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Joins & Set Operations",
            "completed": false
        },
        {
            "title": "Subqueries",
            "description": "Scalar subqueries, correlated subqueries, EXISTS, IN.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Advanced Querying & Windows",
            "completed": false
        },
        {
            "title": "CTE",
            "description": "Common Table Expressions, WITH clauses, readable multi-step transformations, recursive CTEs.",
            "sequence": 16,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Advanced Querying & Windows",
            "completed": false
        },
        {
            "title": "Window Functions",
            "description": "OVER clause, ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), partition by.",
            "sequence": 17,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Advanced Querying & Windows",
            "completed": false
        },
        {
            "title": "Views",
            "description": "CREATE VIEW, materialized views, view security and query abstraction.",
            "sequence": 18,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Advanced Querying & Windows",
            "completed": false
        },
        {
            "title": "Constraints",
            "description": "CHECK, DEFAULT, NOT NULL constraints on relational tables.",
            "sequence": 19,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Primary Keys",
            "description": "Surrogate keys, natural keys, enforcing entity uniqueness.",
            "sequence": 20,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Foreign Keys",
            "description": "Referential integrity, CASCADE DELETE/UPDATE behaviors.",
            "sequence": 21,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Indexes",
            "description": "B-Tree indexes, composite indexes, covering indexes, index selectivity.",
            "sequence": 22,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Transactions",
            "description": "ACID principles, COMMIT, ROLLBACK, SAVEPOINT, isolation levels.",
            "sequence": 23,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Normalization",
            "description": "1NF, 2NF, 3NF schema design, preventing data redundancy.",
            "sequence": 24,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Query Optimization",
            "description": "Analyzing slow queries, avoiding SELECT *, sargable query predicates.",
            "sequence": 25,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        },
        {
            "title": "Execution Plans",
            "description": "EXPLAIN, EXPLAIN ANALYZE, interpreting sequential vs index scans, join types.",
            "sequence": 26,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "sql",
            "subtopic": "Schema & Optimization",
            "completed": false
        }
    ],
    "postgresql": [
        {
            "title": "Installation",
            "description": "Installing PostgreSQL, psql command line client, pgAdmin, configuration.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Architecture & Tables",
            "completed": false
        },
        {
            "title": "Database Design",
            "description": "Schemas, table design, data types (UUID, TIMESTAMP WITH TIME ZONE).",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Architecture & Tables",
            "completed": false
        },
        {
            "title": "Tables",
            "description": "CREATE TABLE, ALTER TABLE, column defaults, generated columns.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Architecture & Tables",
            "completed": false
        },
        {
            "title": "Relationships",
            "description": "One-to-one, one-to-many, many-to-many junction tables.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Architecture & Tables",
            "completed": false
        },
        {
            "title": "Constraints",
            "description": "PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK constraints.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Architecture & Tables",
            "completed": false
        },
        {
            "title": "Indexes",
            "description": "B-Tree, Hash, GIN, GiST, BRIN, partial indexes, expression indexes.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Indexing & Performance",
            "completed": false
        },
        {
            "title": "Transactions",
            "description": "MVCC architecture, transaction isolation levels, row-level locks.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Indexing & Performance",
            "completed": false
        },
        {
            "title": "Views",
            "description": "Standard views, MATERIALIZED VIEW, REFRESH MATERIALIZED VIEW CONCURRENTLY.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Indexing & Performance",
            "completed": false
        },
        {
            "title": "Functions",
            "description": "PL/pgSQL stored functions, triggers, custom business logic.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Procedural & JSON",
            "completed": false
        },
        {
            "title": "JSON",
            "description": "JSON data type, JSON operators (->, ->>), JSON creation functions.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Procedural & JSON",
            "completed": false
        },
        {
            "title": "JSONB",
            "description": "Binary JSON, GIN indexing on JSONB, containment operators (@>, ?), performance.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Procedural & JSON",
            "completed": false
        },
        {
            "title": "Full Text Search",
            "description": "tsvector, tsquery, GIN text indexes, phrase matching, ranking.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P2 - Medium",
            "required": false,
            "skill_id": "postgresql",
            "subtopic": "Procedural & JSON",
            "completed": false
        },
        {
            "title": "Query Optimization",
            "description": "EXPLAIN (ANALYZE, BUFFERS), vacuuming, autovacuum, work_mem tuning.",
            "sequence": 13,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Indexing & Performance",
            "completed": false
        },
        {
            "title": "Extensions",
            "description": "CREATE EXTENSION, uuid-ossp, pg_trgm, managing extension lifecycle.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Extensions & AI Vectors",
            "completed": false
        },
        {
            "title": "pgvector",
            "description": "pgvector extension, vector column type, HNSW vs IVFFlat indexes, cosine similarity for RAG.",
            "sequence": 15,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "postgresql",
            "subtopic": "Extensions & AI Vectors",
            "completed": false
        }
    ],
    "oracle_sql": [
        {
            "title": "Oracle SQL Fundamentals",
            "description": "Dual table, data types, Oracle SQL dialect differences, rownum / FETCH FIRST.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Enterprise SQL",
            "completed": false
        },
        {
            "title": "Oracle Data Types",
            "description": "VARCHAR2, NUMBER, DATE, TIMESTAMP, CLOB, BLOB.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Enterprise SQL",
            "completed": false
        },
        {
            "title": "Joins",
            "description": "ANSI joins vs Oracle legacy (+) joins, partition joins.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Enterprise SQL",
            "completed": false
        },
        {
            "title": "Subqueries",
            "description": "Correlated subqueries, inline views, scalar subqueries.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Enterprise SQL",
            "completed": false
        },
        {
            "title": "CTE",
            "description": "WITH clause, recursive subquery factoring.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Enterprise SQL",
            "completed": false
        },
        {
            "title": "Analytic Functions",
            "description": "RANK, DENSE_RANK, ROW_NUMBER, LEAD, LAG, LISTAGG, aggregate OVER (PARTITION BY).",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Enterprise SQL",
            "completed": false
        },
        {
            "title": "Views",
            "description": "Standard views, materialized views, query rewrite.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Schema & Tuning",
            "completed": false
        },
        {
            "title": "Indexes",
            "description": "B-Tree, bitmap indexes, function-based indexes in Oracle.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Schema & Tuning",
            "completed": false
        },
        {
            "title": "Sequences",
            "description": "CREATE SEQUENCE, NEXTVAL, CURRVAL, identity columns.",
            "sequence": 9,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Schema & Tuning",
            "completed": false
        },
        {
            "title": "Transactions",
            "description": "Autonomous transactions, commit, rollback, savepoint in Oracle.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Schema & Tuning",
            "completed": false
        },
        {
            "title": "Query Optimization",
            "description": "AUTOTRACE, EXPLAIN PLAN, Oracle optimizer hints, cost-based optimizer (CBO).",
            "sequence": 11,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_sql",
            "subtopic": "Schema & Tuning",
            "completed": false
        }
    ],
    "plsql": [
        {
            "title": "PL/SQL Fundamentals",
            "description": "Block structure (DECLARE, BEGIN, EXCEPTION, END), anonymous blocks.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Procedural Logic",
            "completed": false
        },
        {
            "title": "Variables",
            "description": "Scalar types, %TYPE, %ROWTYPE variable anchors.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Procedural Logic",
            "completed": false
        },
        {
            "title": "Conditions",
            "description": "IF-THEN-ELSIF-ELSE, CASE expressions in PL/SQL.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Procedural Logic",
            "completed": false
        },
        {
            "title": "Loops",
            "description": "Simple LOOP, WHILE loop, FOR loop (numeric & cursor FOR loops).",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Procedural Logic",
            "completed": false
        },
        {
            "title": "Procedures",
            "description": "CREATE OR REPLACE PROCEDURE, IN, OUT, IN OUT parameters.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Program Units",
            "completed": false
        },
        {
            "title": "Functions",
            "description": "Deterministic functions, return types, calling PL/SQL functions in SQL.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Program Units",
            "completed": false
        },
        {
            "title": "Packages",
            "description": "Package specifications vs bodies, modularity, package-level variables.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Program Units",
            "completed": false
        },
        {
            "title": "Cursors",
            "description": "Implicit cursors (%FOUND, %NOTFOUND), explicit cursors, parameterized cursors, REF CURSORS.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Program Units",
            "completed": false
        },
        {
            "title": "Exceptions",
            "description": "Predefined exceptions (NO_DATA_FOUND, TOO_MANY_ROWS), PRAGMA EXCEPTION_INIT, RAISE_APPLICATION_ERROR.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Reliability & Performance",
            "completed": false
        },
        {
            "title": "Collections",
            "description": "Associative arrays (INDEX BY), nested tables, VARRAYs, bulk operations.",
            "sequence": 10,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Reliability & Performance",
            "completed": false
        },
        {
            "title": "Triggers",
            "description": "BEFORE/AFTER DML triggers, INSTEAD OF triggers, compound triggers, :NEW and :OLD.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Reliability & Performance",
            "completed": false
        },
        {
            "title": "Dynamic SQL",
            "description": "EXECUTE IMMEDIATE, OPEN-FOR-USING, preventing SQL injection.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Reliability & Performance",
            "completed": false
        },
        {
            "title": "Transactions",
            "description": "PRAGMA AUTONOMOUS_TRANSACTION, COMMIT, ROLLBACK in procedural blocks.",
            "sequence": 13,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "plsql",
            "subtopic": "Reliability & Performance",
            "completed": false
        }
    ],
    "oracle_apex": [
        {
            "title": "Workspace",
            "description": "Workspace administration, schema assignments, developer roles.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Application Design",
            "completed": false
        },
        {
            "title": "Applications",
            "description": "Application builder, theme styles, universal theme, navigation menus.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Application Design",
            "completed": false
        },
        {
            "title": "Pages",
            "description": "Page designer, rendering tree, layout grid, component gallery.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Application Design",
            "completed": false
        },
        {
            "title": "Regions",
            "description": "Static content, cards, reports, forms, region display selectors.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Application Design",
            "completed": false
        },
        {
            "title": "Items",
            "description": "Text fields, selects, date pickers, rich text, session state values.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Application Design",
            "completed": false
        },
        {
            "title": "Buttons",
            "description": "Button actions (Submit, Redirect, Dynamic Action), button positions.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Application Design",
            "completed": false
        },
        {
            "title": "Page Processes",
            "description": "After-submit processing, PL/SQL code blocks, automated DML.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Interactivity & Logic",
            "completed": false
        },
        {
            "title": "Computations",
            "description": "Page and application-level computations, setting item values.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Interactivity & Logic",
            "completed": false
        },
        {
            "title": "Validations",
            "description": "Form validation rules, error display locations, PL/SQL validations.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Interactivity & Logic",
            "completed": false
        },
        {
            "title": "Dynamic Actions",
            "description": "Client-side interactivity: Show/Hide, Enable/Disable, Set Value, Execute JavaScript/PL/SQL.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Interactivity & Logic",
            "completed": false
        },
        {
            "title": "Forms",
            "description": "Form initialization, DML processes, master-detail relationships.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "UI Components",
            "completed": false
        },
        {
            "title": "Interactive Reports",
            "description": "Searching, filtering, sorting, control break, highlights, saved reports.",
            "sequence": 12,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "UI Components",
            "completed": false
        },
        {
            "title": "Interactive Grids",
            "description": "Editable data grids, custom validation, client-side pagination.",
            "sequence": 13,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "UI Components",
            "completed": false
        },
        {
            "title": "LOVs",
            "description": "Static and dynamic Lists of Values, cascading LOVs, shared LOVs.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "UI Components",
            "completed": false
        },
        {
            "title": "Charts",
            "description": "Oracle JET data visualizations, line, bar, pie, radar charts.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "UI Components",
            "completed": false
        },
        {
            "title": "Dashboards",
            "description": "KPI tiles, analytics cards, combining multiple report regions.",
            "sequence": 16,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "UI Components",
            "completed": false
        },
        {
            "title": "Shared Components",
            "description": "Application items, application processes, web credentials, templates.",
            "sequence": 17,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Shared Components & Security",
            "completed": false
        },
        {
            "title": "Authentication",
            "description": "APEX accounts, database accounts, Custom Authentication, OAuth2/OIDC.",
            "sequence": 18,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Shared Components & Security",
            "completed": false
        },
        {
            "title": "Authorization",
            "description": "Authorization schemes, component-level security, role-based access.",
            "sequence": 19,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Shared Components & Security",
            "completed": false
        },
        {
            "title": "Security",
            "description": "Session state protection (Checksums), escape special characters (XSS), SQL injection prevention.",
            "sequence": 20,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Shared Components & Security",
            "completed": false
        },
        {
            "title": "REST Data Sources",
            "description": "Connecting APEX to external REST endpoints, data profile mapping.",
            "sequence": 21,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "REST & Integrations",
            "completed": false
        },
        {
            "title": "ORDS",
            "description": "Oracle REST Data Services, publishing RESTful web services over database objects.",
            "sequence": 22,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "REST & Integrations",
            "completed": false
        },
        {
            "title": "REST APIs",
            "description": "Consuming external JSON web services inside APEX page processes.",
            "sequence": 23,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "REST & Integrations",
            "completed": false
        },
        {
            "title": "JSON",
            "description": "APEX_JSON package, generating and parsing JSON payloads in PL/SQL.",
            "sequence": 24,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "REST & Integrations",
            "completed": false
        },
        {
            "title": "PL/SQL Integration",
            "description": "Calling backend PL/SQL packages from APEX page processes.",
            "sequence": 25,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "REST & Integrations",
            "completed": false
        },
        {
            "title": "JavaScript Basics",
            "description": "apex.item(), apex.server.process(), apex.event APIs.",
            "sequence": 26,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Client Customization",
            "completed": false
        },
        {
            "title": "CSS Basics",
            "description": "Custom Universal Theme CSS, utility classes, styling cards and badges.",
            "sequence": 27,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": false,
            "skill_id": "oracle_apex",
            "subtopic": "Client Customization",
            "completed": false
        },
        {
            "title": "APEX Automation",
            "description": "Automated background workflows, polling queries, scheduled job execution.",
            "sequence": 28,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Advanced Capabilities",
            "completed": false
        },
        {
            "title": "APEX AI capabilities",
            "description": "APEX AI Assistant, natural language to SQL generation, AI chat components.",
            "sequence": 29,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "oracle_apex",
            "subtopic": "Advanced Capabilities",
            "completed": false
        }
    ],
    "rest_apis": [
        {
            "title": "HTTP",
            "description": "Protocol concepts, statelessness, client-server model, TCP connection.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "HTTP Fundamentals",
            "completed": false
        },
        {
            "title": "HTTPS",
            "description": "SSL/TLS encryption, certificates, secure transport layer.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "HTTP Fundamentals",
            "completed": false
        },
        {
            "title": "Request",
            "description": "HTTP request structure: URL, method, headers, query string, body.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "HTTP Fundamentals",
            "completed": false
        },
        {
            "title": "Response",
            "description": "HTTP response structure: status line, headers, response body.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "HTTP Fundamentals",
            "completed": false
        },
        {
            "title": "GET",
            "description": "Safe and idempotent resource retrieval.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Verbs & Methods",
            "completed": false
        },
        {
            "title": "POST",
            "description": "Resource creation, submitting payloads, non-idempotent actions.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Verbs & Methods",
            "completed": false
        },
        {
            "title": "PUT",
            "description": "Complete resource replacement, idempotent update semantics.",
            "sequence": 7,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Verbs & Methods",
            "completed": false
        },
        {
            "title": "PATCH",
            "description": "Partial resource modification, applying diff payloads.",
            "sequence": 8,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Verbs & Methods",
            "completed": false
        },
        {
            "title": "DELETE",
            "description": "Resource removal, idempotency.",
            "sequence": 9,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Verbs & Methods",
            "completed": false
        },
        {
            "title": "Headers",
            "description": "Content-Type, Accept, Authorization, User-Agent, custom headers.",
            "sequence": 10,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Data & Formats",
            "completed": false
        },
        {
            "title": "Status Codes",
            "description": "2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error.",
            "sequence": 11,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Data & Formats",
            "completed": false
        },
        {
            "title": "JSON",
            "description": "Data representation standard, nested objects, arrays, types.",
            "sequence": 12,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Data & Formats",
            "completed": false
        },
        {
            "title": "Authentication",
            "description": "Basic auth, token-based authentication mechanisms.",
            "sequence": 13,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Security & Auth",
            "completed": false
        },
        {
            "title": "API Keys",
            "description": "API key headers, query param keys, secret management.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Security & Auth",
            "completed": false
        },
        {
            "title": "OAuth2",
            "description": "OAuth 2.0 grant types (authorization code, client credentials), refresh tokens.",
            "sequence": 15,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Security & Auth",
            "completed": false
        },
        {
            "title": "JWT",
            "description": "JSON Web Tokens: header, payload, signature, stateless claims validation.",
            "sequence": 16,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Security & Auth",
            "completed": false
        },
        {
            "title": "Pagination",
            "description": "Offset-limit vs cursor-based pagination, link headers.",
            "sequence": 17,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Architecture & Reliability",
            "completed": false
        },
        {
            "title": "Rate Limiting",
            "description": "429 Too Many Requests, X-RateLimit headers, token bucket algorithm.",
            "sequence": 18,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Architecture & Reliability",
            "completed": false
        },
        {
            "title": "Webhooks",
            "description": "Event-driven webhook subscriptions, payload signatures, idempotent webhook receivers.",
            "sequence": 19,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Architecture & Reliability",
            "completed": false
        },
        {
            "title": "Error Handling",
            "description": "RFC 7807 problem details, consistent error response schemas.",
            "sequence": 20,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Architecture & Reliability",
            "completed": false
        },
        {
            "title": "Retry Strategies",
            "description": "Exponential backoff, jitter, handling transient network drops.",
            "sequence": 21,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Architecture & Reliability",
            "completed": false
        },
        {
            "title": "API Versioning",
            "description": "URI path versioning (/v1), header versioning, deprecation policies.",
            "sequence": 22,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Architecture & Reliability",
            "completed": false
        },
        {
            "title": "Postman",
            "description": "Creating collections, environment variables, pre-request scripts, tests.",
            "sequence": 23,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Tools & Inspection",
            "completed": false
        },
        {
            "title": "curl",
            "description": "Command-line HTTP requests, setting headers, sending data payloads, inspection.",
            "sequence": 24,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rest_apis",
            "subtopic": "Tools & Inspection",
            "completed": false
        }
    ],
    "fastapi": [
        {
            "title": "FastAPI Fundamentals",
            "description": "ASGI framework, Starlette foundation, interactive auto-docs, installation.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "FastAPI Core",
            "completed": false
        },
        {
            "title": "Routes",
            "description": "APIRouter, organizing endpoints into modular microservices.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "FastAPI Core",
            "completed": false
        },
        {
            "title": "Path Parameters",
            "description": "Type annotated path variables, path converters, validation.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "FastAPI Core",
            "completed": false
        },
        {
            "title": "Query Parameters",
            "description": "Optional parameters, default values, boolean flags, validation.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "FastAPI Core",
            "completed": false
        },
        {
            "title": "Request Bodies",
            "description": "Declaring JSON request bodies with Pydantic models.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "FastAPI Core",
            "completed": false
        },
        {
            "title": "Pydantic",
            "description": "BaseModel, Field, data validation, serialization, Pydantic v2 features.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Pydantic & Validation",
            "completed": false
        },
        {
            "title": "Validation",
            "description": "EmailStr, HttpUrl, custom @field_validator, constraining numeric ranges.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Pydantic & Validation",
            "completed": false
        },
        {
            "title": "Response Models",
            "description": "response_model, filtering sensitive fields, status_code declaration.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Pydantic & Validation",
            "completed": false
        },
        {
            "title": "Dependency Injection",
            "description": "Depends(), reusable dependencies, database sessions, auth guards.",
            "sequence": 9,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Architecture & Security",
            "completed": false
        },
        {
            "title": "Error Handling",
            "description": "HTTPException, custom exception handlers, RequestValidationError overrides.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Architecture & Security",
            "completed": false
        },
        {
            "title": "Middleware",
            "description": "CORSMiddleware, request timing middleware, logging middleware.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Architecture & Security",
            "completed": false
        },
        {
            "title": "Authentication",
            "description": "OAuth2PasswordBearer, password hashing with passlib/bcrypt.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Architecture & Security",
            "completed": false
        },
        {
            "title": "JWT",
            "description": "Generating, encoding, and verifying JWT tokens with python-jose / pyjwt.",
            "sequence": 13,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Architecture & Security",
            "completed": false
        },
        {
            "title": "OAuth Concepts",
            "description": "Securing endpoints, scopes, token claims, bearer authentication.",
            "sequence": 14,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Architecture & Security",
            "completed": false
        },
        {
            "title": "Async Endpoints",
            "description": "async def vs def endpoints, running non-blocking async DB/HTTP calls.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Async & Background",
            "completed": false
        },
        {
            "title": "Background Tasks",
            "description": "BackgroundTasks class, executing post-response background work.",
            "sequence": 16,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Async & Background",
            "completed": false
        },
        {
            "title": "OpenAPI",
            "description": "OpenAPI 3.0 specification generation, customizing schema metadata.",
            "sequence": 17,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Documentation & Testing",
            "completed": false
        },
        {
            "title": "Swagger",
            "description": "Interactive Swagger UI (/docs) and ReDoc (/redoc) inspection.",
            "sequence": 18,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Documentation & Testing",
            "completed": false
        },
        {
            "title": "Database Integration",
            "description": "Async SQLAlchemy, sessionmakers, connection pooling, asyncpg.",
            "sequence": 19,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Deployment & Persistence",
            "completed": false
        },
        {
            "title": "Testing",
            "description": "TestClient, pytest with FastAPI, testing async endpoints with httpx.",
            "sequence": 20,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Documentation & Testing",
            "completed": false
        },
        {
            "title": "API Deployment",
            "description": "Uvicorn, Gunicorn process managers, Dockerizing FastAPI apps.",
            "sequence": 21,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "fastapi",
            "subtopic": "Deployment & Persistence",
            "completed": false
        }
    ],
    "llm_fundamentals": [
        {
            "title": "LLM Concepts",
            "description": "Transformer architecture, next-token prediction, pre-training vs fine-tuning.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Foundations",
            "completed": false
        },
        {
            "title": "Tokens",
            "description": "Tokenization (BPE), token-to-word ratio, token costs, rate limits.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Foundations",
            "completed": false
        },
        {
            "title": "Context Windows",
            "description": "Input/output token budgets, attention mechanisms, needle-in-haystack limits.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Foundations",
            "completed": false
        },
        {
            "title": "Temperature",
            "description": "Randomness control, top-p (nucleus sampling), top-k, determinism in output.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Sampling & Control",
            "completed": false
        },
        {
            "title": "Model Parameters",
            "description": "Frequency penalty, presence penalty, stop sequences, max_tokens.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Sampling & Control",
            "completed": false
        },
        {
            "title": "System Prompts",
            "description": "Guiding persona, behavioral constraints, setting core instructions.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Prompting",
            "completed": false
        },
        {
            "title": "User Prompts",
            "description": "Structuring dynamic input data, query phrasing, context injection.",
            "sequence": 7,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Prompting",
            "completed": false
        },
        {
            "title": "Model Limitations",
            "description": "Knowledge cutoffs, reasoning boundaries, mathematical and spatial limits.",
            "sequence": 8,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Safety & Limits",
            "completed": false
        },
        {
            "title": "Hallucinations",
            "description": "Causes of hallucination, mitigation strategies, confidence calibration.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Safety & Limits",
            "completed": false
        },
        {
            "title": "Structured Outputs",
            "description": "Enforcing strict JSON schemas, grammar-guided generation.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_fundamentals",
            "subtopic": "Safety & Limits",
            "completed": false
        }
    ],
    "prompt_engineering": [
        {
            "title": "Zero Shot",
            "description": "Direct instruction prompting without illustrative examples.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Prompting Patterns",
            "completed": false
        },
        {
            "title": "Few Shot",
            "description": "Providing exemplar input-output pairs to guide format and behavior.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Prompting Patterns",
            "completed": false
        },
        {
            "title": "Role Prompting",
            "description": "Assigning professional personas (e.g. Senior RPA Architect) to prime responses.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Prompting Patterns",
            "completed": false
        },
        {
            "title": "Prompt Structure",
            "description": "Delimiters, markdown formatting, XML tags for separating context from instructions.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Context & Constraints",
            "completed": false
        },
        {
            "title": "Context Injection",
            "description": "Placing retrieved documents, chat history, and system variables in prompts.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Context & Constraints",
            "completed": false
        },
        {
            "title": "Output Constraints",
            "description": "Enforcing brevity, negative prompting, specific formats (Markdown, CSV, JSON).",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Context & Constraints",
            "completed": false
        },
        {
            "title": "JSON Outputs",
            "description": "Techniques for reliably extracting parseable JSON from LLM completions.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Structured Execution",
            "completed": false
        },
        {
            "title": "Prompt Chaining",
            "description": "Breaking complex reasoning into sequential prompt-response stages.",
            "sequence": 8,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Structured Execution",
            "completed": false
        },
        {
            "title": "Evaluation",
            "description": "Benchmarking prompt effectiveness, ground-truth comparison, LLM-as-a-judge.",
            "sequence": 9,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "prompt_engineering",
            "subtopic": "Structured Execution",
            "completed": false
        }
    ],
    "llm_apis": [
        {
            "title": "API Authentication",
            "description": "API keys, project IDs, bearer tokens, securing credentials in .env.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "API Operations",
            "completed": false
        },
        {
            "title": "API Requests",
            "description": "Client SDKs vs raw HTTP requests, formulating message payloads.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "API Operations",
            "completed": false
        },
        {
            "title": "Structured Responses",
            "description": "response_format: { type: 'json_object' }, Pydantic schema validation.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "API Operations",
            "completed": false
        },
        {
            "title": "Streaming",
            "description": "Server-Sent Events (SSE), streaming token chunks in real-time.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "API Operations",
            "completed": false
        },
        {
            "title": "Function Calling",
            "description": "Declaring function definitions in API calls, model selecting tools.",
            "sequence": 5,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "Tools & Function Calling",
            "completed": false
        },
        {
            "title": "Tool Calling",
            "description": "Multi-tool calls, passing arguments, sending tool results back to the conversation.",
            "sequence": 6,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "Tools & Function Calling",
            "completed": false
        },
        {
            "title": "Error Handling",
            "description": "Handling 429 rate limits, 500 server errors, context length exceeded errors.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "Production Readiness",
            "completed": false
        },
        {
            "title": "Rate Limits",
            "description": "RPM (requests per minute), TPM (tokens per minute), exponential backoff.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "Production Readiness",
            "completed": false
        },
        {
            "title": "Cost Management",
            "description": "Monitoring input/output token usage, model tier selection (Flash vs Pro).",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "llm_apis",
            "subtopic": "Production Readiness",
            "completed": false
        }
    ],
    "local_ai": [
        {
            "title": "Ollama",
            "description": "Ollama installation, CLI commands, serving local LLMs on Mac/Linux.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "local_ai",
            "subtopic": "Local Runtimes",
            "completed": false
        },
        {
            "title": "Local Models",
            "description": "Llama 3, Mistral, Qwen, DeepSeek, model sizes (7B, 8B, 14B) vs VRAM.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "local_ai",
            "subtopic": "Local Runtimes",
            "completed": false
        },
        {
            "title": "Model Selection",
            "description": "Quantization formats (GGUF, 4-bit, 8-bit), balancing speed and precision.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "local_ai",
            "subtopic": "Local Runtimes",
            "completed": false
        },
        {
            "title": "Model Parameters",
            "description": "Modelfile configuration, custom system instructions, stop sequences.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "local_ai",
            "subtopic": "Local API & Workflows",
            "completed": false
        },
        {
            "title": "Local API",
            "description": "Calling Ollama REST API (/api/generate, /api/chat) from Python.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "local_ai",
            "subtopic": "Local API & Workflows",
            "completed": false
        },
        {
            "title": "Running Models Locally",
            "description": "Zero-cloud cost local inference, offline security compliance, privacy.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "local_ai",
            "subtopic": "Local API & Workflows",
            "completed": false
        }
    ],
    "rag": [
        {
            "title": "RAG Fundamentals",
            "description": "Retrieval-Augmented Generation lifecycle, overcoming hallucination.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Ingestion & Parsing",
            "completed": false
        },
        {
            "title": "Document Loading",
            "description": "Loading PDF, DOCX, CSV, TXT, Markdown, HTML data sources.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Ingestion & Parsing",
            "completed": false
        },
        {
            "title": "Document Parsing",
            "description": "Extracting clean text, handling tables, parsing layout structure.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Ingestion & Parsing",
            "completed": false
        },
        {
            "title": "Chunking",
            "description": "Fixed-size chunking, chunk overlap, semantic boundaries, paragraph chunking.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Chunking & Embeddings",
            "completed": false
        },
        {
            "title": "Chunk Strategies",
            "description": "Recursive character splitting, parent-child chunking, sentence windowing.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Chunking & Embeddings",
            "completed": false
        },
        {
            "title": "Embeddings",
            "description": "Dense vector representations, text-embedding models (OpenAI, Voyage, BGE).",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Chunking & Embeddings",
            "completed": false
        },
        {
            "title": "Vector Databases",
            "description": "Vector store architecture, indexing high-dimensional embeddings.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Retrieval & Search",
            "completed": false
        },
        {
            "title": "Similarity Search",
            "description": "Cosine similarity, dot product, Euclidean distance calculations.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Retrieval & Search",
            "completed": false
        },
        {
            "title": "Metadata",
            "description": "Attaching file source, creation date, department, access level to chunks.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Retrieval & Search",
            "completed": false
        },
        {
            "title": "Metadata Filtering",
            "description": "Pre-filtering and post-filtering vector searches by metadata keys.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Retrieval & Search",
            "completed": false
        },
        {
            "title": "Hybrid Search",
            "description": "Combining dense vector search with sparse keyword search (BM25).",
            "sequence": 11,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Advanced Retrieval",
            "completed": false
        },
        {
            "title": "Reranking",
            "description": "Cross-encoder rerankers (Cohere, BGE-reranker) to re-order top-K candidates.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Advanced Retrieval",
            "completed": false
        },
        {
            "title": "Retrieval",
            "description": "Query expansion, hypothetical document embeddings (HyDE), top-K tuning.",
            "sequence": 13,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Advanced Retrieval",
            "completed": false
        },
        {
            "title": "Context Construction",
            "description": "Assembling retrieved chunks into token-efficient prompt context.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Generation & Citations",
            "completed": false
        },
        {
            "title": "Grounding",
            "description": "Strict instruction forcing LLM to answer only from provided context.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Generation & Citations",
            "completed": false
        },
        {
            "title": "Citations",
            "description": "Generating source document references, page numbers, and exact quotes.",
            "sequence": 16,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "Generation & Citations",
            "completed": false
        },
        {
            "title": "RAG Evaluation",
            "description": "Evaluating end-to-end RAG with Ragas (Faithfulness, Answer Relevance).",
            "sequence": 17,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "RAG Evaluation",
            "completed": false
        },
        {
            "title": "Retrieval Evaluation",
            "description": "Context Precision, Context Recall, evaluating retrieval quality.",
            "sequence": 18,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "rag",
            "subtopic": "RAG Evaluation",
            "completed": false
        }
    ],
    "vector_databases": [
        {
            "title": "Vector Embeddings",
            "description": "High-dimensional vector geometry, dimension sizes (1536, 768).",
            "sequence": 1,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "vector_databases",
            "subtopic": "Vector Foundations",
            "completed": false
        },
        {
            "title": "Similarity Metrics",
            "description": "Cosine distance, Euclidean (L2) distance, Inner Product math.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "vector_databases",
            "subtopic": "Vector Foundations",
            "completed": false
        },
        {
            "title": "ChromaDB",
            "description": "Embedded local vector database, collections, querying, persistence.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "vector_databases",
            "subtopic": "Database Systems",
            "completed": false
        },
        {
            "title": "pgvector",
            "description": "PostgreSQL extension for vector storage, operators (<=>, <#>, <->).",
            "sequence": 4,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "vector_databases",
            "subtopic": "Database Systems",
            "completed": false
        },
        {
            "title": "Indexing",
            "description": "HNSW (Hierarchical Navigable Small World) graphs vs IVFFlat lists.",
            "sequence": 5,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "vector_databases",
            "subtopic": "Indexing & Search",
            "completed": false
        },
        {
            "title": "Metadata Filtering",
            "description": "Indexing metadata for sub-millisecond pre-filtered vector queries.",
            "sequence": 6,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "vector_databases",
            "subtopic": "Indexing & Search",
            "completed": false
        }
    ],
    "ai_agents": [
        {
            "title": "Agent Fundamentals",
            "description": "Agent loop (Think-Act-Observe), autonomy spectrum, ReAct framework.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Agent Architecture",
            "completed": false
        },
        {
            "title": "Agent vs Chatbot",
            "description": "Difference between passive conversational bots and autonomous goal-driven agents.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Agent Architecture",
            "completed": false
        },
        {
            "title": "Tools",
            "description": "Defining tool schemas with name, description, and strict parameter schemas.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Tools & Functions",
            "completed": false
        },
        {
            "title": "Tool Calling",
            "description": "Parsing LLM tool invocation, executing local code, returning results.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Tools & Functions",
            "completed": false
        },
        {
            "title": "Function Calling",
            "description": "Native API function calling support, handling tool errors.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Tools & Functions",
            "completed": false
        },
        {
            "title": "Planning",
            "description": "Decomposing high-level goals into sequential sub-tasks, plan revision.",
            "sequence": 6,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Planning & Memory",
            "completed": false
        },
        {
            "title": "State",
            "description": "Maintaining agent session state, message history, current goal progress.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Planning & Memory",
            "completed": false
        },
        {
            "title": "Memory",
            "description": "Short-term conversation memory vs long-term vector memory.",
            "sequence": 8,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Planning & Memory",
            "completed": false
        },
        {
            "title": "Agent Workflows",
            "description": "Deterministic DAG flows vs dynamic autonomous agent routing.",
            "sequence": 9,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Workflows & Safety",
            "completed": false
        },
        {
            "title": "Human-in-the-loop",
            "description": "Pause and resume execution, requesting confirmation for critical actions.",
            "sequence": 10,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Workflows & Safety",
            "completed": false
        },
        {
            "title": "Guardrails",
            "description": "Input validation, output filtering, safety checks, preventing runaway loops.",
            "sequence": 11,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Workflows & Safety",
            "completed": false
        },
        {
            "title": "Agent Evaluation",
            "description": "Evaluating tool selection accuracy, task completion rate, loop efficiency.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Evaluation & Multi-Agent",
            "completed": false
        },
        {
            "title": "Agent Observability",
            "description": "Tracing agent thoughts, tool inputs/outputs, latency, LangSmith/OpenTelemetry.",
            "sequence": 13,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Evaluation & Multi-Agent",
            "completed": false
        },
        {
            "title": "Multi-Agent Concepts",
            "description": "Hierarchical supervisor swarms, specialist agents, peer-to-peer delegation.",
            "sequence": 14,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_agents",
            "subtopic": "Evaluation & Multi-Agent",
            "completed": false
        }
    ],
    "mcp": [
        {
            "title": "MCP Fundamentals",
            "description": "Model Context Protocol architecture, open standard for AI tools.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Protocol Core",
            "completed": false
        },
        {
            "title": "MCP Client",
            "description": "Connecting AI clients (Claude Desktop, IDEs) to MCP server endpoints.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Protocol Core",
            "completed": false
        },
        {
            "title": "MCP Server",
            "description": "Building a custom MCP server in Python / TypeScript.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Server Implementation",
            "completed": false
        },
        {
            "title": "Tools",
            "description": "Exposing executable functions to agents via MCP tool declarations.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Primitives",
            "completed": false
        },
        {
            "title": "Resources",
            "description": "Exposing file contents, database rows, and static documents via MCP.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Primitives",
            "completed": false
        },
        {
            "title": "Prompts",
            "description": "Standardized prompt templates shared across MCP clients.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Primitives",
            "completed": false
        },
        {
            "title": "Authentication",
            "description": "Securing MCP connections, local vs remote transport credentials.",
            "sequence": 7,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Security & Architecture",
            "completed": false
        },
        {
            "title": "Security",
            "description": "Transport security (stdio vs SSE/HTTP), sandboxing tool actions.",
            "sequence": 8,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Security & Architecture",
            "completed": false
        },
        {
            "title": "Agent + MCP",
            "description": "Connecting autonomous agent loops to enterprise MCP tool catalogs.",
            "sequence": 9,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "mcp",
            "subtopic": "Security & Architecture",
            "completed": false
        }
    ],
    "git": [
        {
            "title": "Git Fundamentals",
            "description": "Working directory, staging area, commit history, SHA-1 hashes.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Git Basics",
            "completed": false
        },
        {
            "title": "Repository",
            "description": "git init, remote origins, upstream branches, repository structure.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Git Basics",
            "completed": false
        },
        {
            "title": "Clone",
            "description": "Cloning over HTTPS and SSH, shallow clones (--depth).",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Git Basics",
            "completed": false
        },
        {
            "title": "Commit",
            "description": "Writing conventional commit messages, git add -p, amending commits.",
            "sequence": 4,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Git Basics",
            "completed": false
        },
        {
            "title": "Branch",
            "description": "Feature branches, branch naming conventions, branch deletion.",
            "sequence": 5,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Branching & Merging",
            "completed": false
        },
        {
            "title": "Merge",
            "description": "Fast-forward merges, 3-way recursive merges, resolving merge conflicts.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Branching & Merging",
            "completed": false
        },
        {
            "title": "Rebase",
            "description": "git rebase, interactive rebasing (squash, reword), keeping history linear.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Branching & Merging",
            "completed": false
        },
        {
            "title": "Stash",
            "description": "git stash, stash pop, stash apply, stashing untracked files.",
            "sequence": 8,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Branching & Merging",
            "completed": false
        },
        {
            "title": "Reset",
            "description": "git reset --soft, --mixed, --hard, recovering from mistakes.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "History Modification",
            "completed": false
        },
        {
            "title": "Revert",
            "description": "git revert, creating safe undo commits on shared branches.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "History Modification",
            "completed": false
        },
        {
            "title": "Pull Requests",
            "description": "Creating PRs, code reviews, inline comments, squash and merge.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "git",
            "subtopic": "Collaboration",
            "completed": false
        },
        {
            "title": "Issues",
            "description": "Issue tracking, labels, milestones, linking issues to commits.",
            "sequence": 12,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": false,
            "skill_id": "git",
            "subtopic": "Collaboration",
            "completed": false
        },
        {
            "title": "Releases",
            "description": "Semantic versioning (v1.0.0), git tags, GitHub Release notes.",
            "sequence": 13,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "git",
            "subtopic": "Collaboration",
            "completed": false
        },
        {
            "title": "GitHub Actions",
            "description": "Workflow YAML syntax, triggers (push, PR), runners, steps.",
            "sequence": 14,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "git",
            "subtopic": "CI/CD",
            "completed": false
        },
        {
            "title": "CI/CD",
            "description": "Automated linting, testing, and deployment pipelines in GitHub Actions.",
            "sequence": 15,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "git",
            "subtopic": "CI/CD",
            "completed": false
        }
    ],
    "testing": [
        {
            "title": "Unit Testing",
            "description": "Testing individual functions in isolation, test independence.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "Testing Principles",
            "completed": false
        },
        {
            "title": "Integration Testing",
            "description": "Testing interaction between modules, databases, and APIs.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "Testing Principles",
            "completed": false
        },
        {
            "title": "API Testing",
            "description": "Validating HTTP status codes, response schemas, and error responses.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "Testing Principles",
            "completed": false
        },
        {
            "title": "pytest",
            "description": "pytest framework, test file conventions, test discovery, CLI flags.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "pytest Framework",
            "completed": false
        },
        {
            "title": "Mocking",
            "description": "unittest.mock, Mock vs MagicMock, patch decorator, mocking HTTP calls.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "pytest Framework",
            "completed": false
        },
        {
            "title": "Test Fixtures",
            "description": "@pytest.fixture, setup/teardown, fixture scope, autouse.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "pytest Framework",
            "completed": false
        },
        {
            "title": "Test Data",
            "description": "Factory boy, faker, fixtures for realistic test payloads.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "testing",
            "subtopic": "Quality & CI",
            "completed": false
        },
        {
            "title": "Test Coverage",
            "description": "pytest-cov, branch coverage, identifying untested edge cases.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "testing",
            "subtopic": "Quality & CI",
            "completed": false
        },
        {
            "title": "CI Testing",
            "description": "Running automated test suites on pull requests with GitHub Actions.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "testing",
            "subtopic": "Quality & CI",
            "completed": false
        }
    ],
    "system_design": [
        {
            "title": "Client Server",
            "description": "Client-server architecture, protocols, DNS, load balancers.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Foundations",
            "completed": false
        },
        {
            "title": "APIs",
            "description": "API design principles, RPC vs REST vs GraphQL, idempotency keys.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Foundations",
            "completed": false
        },
        {
            "title": "Databases",
            "description": "SQL vs NoSQL trade-offs, read replicas, database sharding.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Data & Caching",
            "completed": false
        },
        {
            "title": "Caching",
            "description": "Redis, Memcached, cache-aside, write-through, TTL, cache invalidation.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Data & Caching",
            "completed": false
        },
        {
            "title": "Queues",
            "description": "Message brokers (RabbitMQ, Kafka, SQS), worker pools, dead-letter queues.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Distributed Systems",
            "completed": false
        },
        {
            "title": "Authentication",
            "description": "Stateful sessions vs stateless tokens, identity providers, OAuth.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Security & Auth",
            "completed": false
        },
        {
            "title": "Authorization",
            "description": "RBAC (Role-Based Access Control), ABAC, policy enforcement points.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Security & Auth",
            "completed": false
        },
        {
            "title": "Microservices",
            "description": "Service boundaries, service discovery, API gateways, independent deployment.",
            "sequence": 8,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Architecture Patterns",
            "completed": false
        },
        {
            "title": "Event Driven Architecture",
            "description": "Publish/subscribe patterns, event sourcing, loose coupling.",
            "sequence": 9,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Architecture Patterns",
            "completed": false
        },
        {
            "title": "Async Processing",
            "description": "Decoupling synchronous user requests from long-running background tasks.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Architecture Patterns",
            "completed": false
        },
        {
            "title": "Scalability",
            "description": "Horizontal vs vertical scaling, stateless services, auto-scaling.",
            "sequence": 11,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Scale & Reliability",
            "completed": false
        },
        {
            "title": "Reliability",
            "description": "Redundancy, failover, circuit breakers, graceful degradation.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Scale & Reliability",
            "completed": false
        },
        {
            "title": "Observability",
            "description": "Logging, metrics, distributed tracing, alerting, health checks.",
            "sequence": 13,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "system_design",
            "subtopic": "Scale & Reliability",
            "completed": false
        }
    ],
    "docker": [
        {
            "title": "Images",
            "description": "Docker image layers, base images (Alpine, Slim), image tagging.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Containers & Images",
            "completed": false
        },
        {
            "title": "Containers",
            "description": "Container lifecycle (run, stop, rm), process isolation, cgroups.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Containers & Images",
            "completed": false
        },
        {
            "title": "Dockerfile",
            "description": "FROM, WORKDIR, COPY, RUN, CMD vs ENTRYPOINT, multi-stage builds.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Build & Storage",
            "completed": false
        },
        {
            "title": "Volumes",
            "description": "Named volumes, bind mounts, persisting database and log data.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Build & Storage",
            "completed": false
        },
        {
            "title": "Networks",
            "description": "Bridge networks, host networking, inter-container communication.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Networking & Config",
            "completed": false
        },
        {
            "title": "Environment Variables",
            "description": ".env file integration, passing runtime environment variables.",
            "sequence": 6,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Networking & Config",
            "completed": false
        },
        {
            "title": "Docker Compose",
            "description": "docker-compose.yml syntax, services, dependencies, networks.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Multi-Container Applications",
            "completed": false
        },
        {
            "title": "Containerized FastAPI",
            "description": "Packaging a production-ready async FastAPI service in Docker.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Multi-Container Applications",
            "completed": false
        },
        {
            "title": "Containerized PostgreSQL",
            "description": "Running PostgreSQL + pgvector locally with custom initialization scripts.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "docker",
            "subtopic": "Multi-Container Applications",
            "completed": false
        }
    ],
    "cloud": [
        {
            "title": "Cloud Fundamentals",
            "description": "Cloud computing models (IaaS, PaaS, SaaS), regions, availability zones.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Cloud Foundations",
            "completed": false
        },
        {
            "title": "Compute",
            "description": "Virtual machines, containers in cloud (ECS, Cloud Run), serverless compute.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Infrastructure",
            "completed": false
        },
        {
            "title": "Storage",
            "description": "Object storage (S3, GCS, OCI Object Storage), lifecycle policies, bucket permissions.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Infrastructure",
            "completed": false
        },
        {
            "title": "Networking",
            "description": "VPC, subnets, security groups, public vs private subnets, NAT gateways.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Infrastructure",
            "completed": false
        },
        {
            "title": "IAM",
            "description": "Identity and Access Management, users, roles, least-privilege policies.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Security & Management",
            "completed": false
        },
        {
            "title": "Secrets",
            "description": "AWS Secrets Manager, GCP Secret Manager, storing API keys and DB credentials.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Security & Management",
            "completed": false
        },
        {
            "title": "Managed Databases",
            "description": "Cloud SQL, RDS, Supabase, automated backups, high availability.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Databases & Serverless",
            "completed": false
        },
        {
            "title": "Serverless",
            "description": "Serverless functions, event-driven execution, cold starts.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Databases & Serverless",
            "completed": false
        },
        {
            "title": "Monitoring",
            "description": "CloudWatch, Google Cloud Monitoring, OCI Monitoring, dashboards.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Operations & Deployment",
            "completed": false
        },
        {
            "title": "Logging",
            "description": "Centralized log aggregation, log retention, searching cloud logs.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Operations & Deployment",
            "completed": false
        },
        {
            "title": "Deployment",
            "description": "Deploying web services and API endpoints on cloud platforms.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "cloud",
            "subtopic": "Operations & Deployment",
            "completed": false
        }
    ],
    "data_science": [
        {
            "title": "Statistics",
            "description": "Mean, median, mode, variance, standard deviation, distributions.",
            "sequence": 1,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Statistics & Probability",
            "completed": false
        },
        {
            "title": "Probability",
            "description": "Conditional probability, Bayes theorem, expected values.",
            "sequence": 2,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Statistics & Probability",
            "completed": false
        },
        {
            "title": "NumPy",
            "description": "Numerical computing, matrix operations, broadcasting, array slicing.",
            "sequence": 3,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Data Manipulation",
            "completed": false
        },
        {
            "title": "pandas",
            "description": "DataFrames, reading disparate sources, index alignment, reshaping data.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Data Manipulation",
            "completed": false
        },
        {
            "title": "Data Cleaning",
            "description": "Handling missing data, outliers, string parsing, type coercions.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Data Wrangling",
            "completed": false
        },
        {
            "title": "Exploratory Data Analysis",
            "description": "Descriptive metrics, correlation heatmaps, identifying data trends.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Data Wrangling",
            "completed": false
        },
        {
            "title": "Data Visualization",
            "description": "Matplotlib, Seaborn, plotting distributions, categorical plots.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Visualization",
            "completed": false
        },
        {
            "title": "Feature Engineering",
            "description": "One-hot encoding, feature scaling (StandardScaler, MinMaxScaler), binning.",
            "sequence": 8,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Machine Learning",
            "completed": false
        },
        {
            "title": "Regression",
            "description": "Linear regression, multiple regression, Mean Squared Error, R-squared.",
            "sequence": 9,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Machine Learning",
            "completed": false
        },
        {
            "title": "Classification",
            "description": "Logistic regression, Decision Trees, Random Forests, confusion matrices.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Machine Learning",
            "completed": false
        },
        {
            "title": "Clustering",
            "description": "K-Means clustering, DBSCAN, elbow method, silhouette score.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Machine Learning",
            "completed": false
        },
        {
            "title": "Model Evaluation",
            "description": "Train/test split, cross-validation, precision, recall, F1 score, ROC-AUC.",
            "sequence": 12,
            "difficulty": "Intermediate",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Machine Learning",
            "completed": false
        },
        {
            "title": "Machine Learning Fundamentals",
            "description": "Supervised vs unsupervised learning, overfitting, bias-variance tradeoff.",
            "sequence": 13,
            "difficulty": "Beginner",
            "priority": "P2 - Medium",
            "required": true,
            "skill_id": "data_science",
            "subtopic": "Machine Learning",
            "completed": false
        }
    ],
    "ai_security": [
        {
            "title": "Authentication",
            "description": "Securing AI API endpoints, token verification, client identity.",
            "sequence": 1,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Access & Secrets",
            "completed": false
        },
        {
            "title": "Authorization",
            "description": "Fine-grained permissions, multi-tenant isolation in AI applications.",
            "sequence": 2,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Access & Secrets",
            "completed": false
        },
        {
            "title": "Secrets Management",
            "description": "Keeping API keys, credentials, and access tokens out of code and prompts.",
            "sequence": 3,
            "difficulty": "Beginner",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Access & Secrets",
            "completed": false
        },
        {
            "title": "Prompt Injection",
            "description": "Direct and indirect prompt injection attacks, jailbreak defenses.",
            "sequence": 4,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "LLM Threat Defense",
            "completed": false
        },
        {
            "title": "Data Leakage",
            "description": "Preventing proprietary and training data leaks in LLM completions.",
            "sequence": 5,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "LLM Threat Defense",
            "completed": false
        },
        {
            "title": "PII",
            "description": "Personally Identifiable Information detection, masking, anonymization.",
            "sequence": 6,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "LLM Threat Defense",
            "completed": false
        },
        {
            "title": "Least Privilege",
            "description": "Restricting tool and agent capabilities to only what is required.",
            "sequence": 7,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Agent Governance",
            "completed": false
        },
        {
            "title": "Agent Permissions",
            "description": "Sandboxing agent file system access, limiting external network calls.",
            "sequence": 8,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Agent Governance",
            "completed": false
        },
        {
            "title": "Guardrails",
            "description": "Llama Guard, NeMo Guardrails, semantic input/output safety checks.",
            "sequence": 9,
            "difficulty": "Advanced",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Agent Governance",
            "completed": false
        },
        {
            "title": "Audit Logs",
            "description": "Logging all LLM prompts, completions, tool invocations for audit trails.",
            "sequence": 10,
            "difficulty": "Intermediate",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Audit & Evaluation",
            "completed": false
        },
        {
            "title": "Human Approval",
            "description": "Human-in-the-loop gates before executing state-changing transactions.",
            "sequence": 11,
            "difficulty": "Intermediate",
            "priority": "P0 - Critical",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Audit & Evaluation",
            "completed": false
        },
        {
            "title": "AI Evaluation",
            "description": "Red-teaming AI systems, safety benchmarks, vulnerability scanning.",
            "sequence": 12,
            "difficulty": "Advanced",
            "priority": "P1 - High",
            "required": true,
            "skill_id": "ai_security",
            "subtopic": "Audit & Evaluation",
            "completed": false
        }
    ]
};

const SEED_PROJECTS = [
    {
        "id": "proj_toolkit",
        "name": "Python Automation Toolkit",
        "description": "High-performance modular Python toolkit for enterprise workflow automation, resilient REST API consumers, and CLI utilities.",
        "status": "In Development",
        "priority": "P0 - Critical",
        "progress": 45,
        "github_url": "https://github.com/irshadkohli/python-automation-toolkit",
        "live_url": "",
        "primary_skills": [
            "python",
            "rest_apis",
            "testing",
            "git"
        ],
        "tasks": [
            {
                "title": "Implement resilient HTTP client with exponential backoff & rate-limiting",
                "sequence": 1,
                "completed": false
            },
            {
                "title": "CLI runner with Click / argparse, subcommands, and colored logs",
                "sequence": 2,
                "completed": false
            },
            {
                "title": "Excel & CSV data pipeline processor with batch validation",
                "sequence": 3,
                "completed": false
            },
            {
                "title": "Unit and integration test suite with pytest and mock servers",
                "sequence": 4,
                "completed": false
            },
            {
                "title": "Package distribution via pyproject.toml and GitHub Actions CI",
                "sequence": 5,
                "completed": false
            }
        ]
    },
    {
        "id": "proj_rpa_tower",
        "name": "RPA Control Tower",
        "description": "Unified enterprise operational dashboard monitoring UiPath robot clusters, job queue SLAs, and automated exception triaging.",
        "status": "In Development",
        "priority": "P0 - Critical",
        "progress": 40,
        "github_url": "https://github.com/irshadkohli/rpa-control-tower",
        "live_url": "",
        "primary_skills": [
            "uipath",
            "oracle_sql",
            "oracle_apex",
            "rest_apis"
        ],
        "tasks": [
            {
                "title": "Oracle database schema design for robot telemetry & incident audit logs",
                "sequence": 1,
                "completed": false
            },
            {
                "title": "UiPath Orchestrator REST API polling service with Bearer token refresh",
                "sequence": 2,
                "completed": false
            },
            {
                "title": "Oracle APEX real-time monitoring portal with interactive status charts",
                "sequence": 3,
                "completed": false
            },
            {
                "title": "Automated incident escalation and Telegram / Email webhook alerts",
                "sequence": 4,
                "completed": false
            },
            {
                "title": "SLA performance prediction model and historical failure trends",
                "sequence": 5,
                "completed": false
            }
        ]
    },
    {
        "id": "proj_knowledge_asst",
        "name": "Enterprise Knowledge Assistant",
        "description": "Production RAG microservice with FastAPI, PostgreSQL pgvector embeddings, and citation grounding.",
        "status": "In Development",
        "priority": "P0 - Critical",
        "progress": 30,
        "github_url": "https://github.com/irshadkohli/enterprise-knowledge-assistant",
        "live_url": "",
        "primary_skills": [
            "python",
            "fastapi",
            "postgresql",
            "vector_databases",
            "rag",
            "llm_fundamentals"
        ],
        "tasks": [
            {
                "title": "FastAPI boilerplate with Pydantic v2 schemas",
                "sequence": 1,
                "completed": false
            },
            {
                "title": "PostgreSQL pgvector schema & cosine distance index",
                "sequence": 2,
                "completed": false
            },
            {
                "title": "Chunking and embedding ingestion pipeline",
                "sequence": 3,
                "completed": false
            },
            {
                "title": "Grounded prompt assembly with document citations",
                "sequence": 4,
                "completed": false
            },
            {
                "title": "Docker containerization & docker-compose deployment",
                "sequence": 5,
                "completed": false
            }
        ]
    },
    {
        "id": "proj_ai_agent",
        "name": "AI Automation Agent",
        "description": "Autonomous reasoning agent that investigates failed RPA production jobs, queries database logs, and generates triage reports.",
        "status": "Planning",
        "priority": "P0 - Critical",
        "progress": 20,
        "github_url": "https://github.com/irshadkohli/ai-automation-agent",
        "live_url": "",
        "primary_skills": [
            "llm_fundamentals",
            "ai_agents",
            "llm_apis",
            "rest_apis",
            "uipath"
        ],
        "tasks": [
            {
                "title": "Architecture design & tool calling specification",
                "sequence": 1,
                "completed": false
            },
            {
                "title": "Database log query tool implementation",
                "sequence": 2,
                "completed": false
            },
            {
                "title": "UiPath bot restart API execution tool",
                "sequence": 3,
                "completed": false
            },
            {
                "title": "Human-in-the-loop review interface before executing restarts",
                "sequence": 4,
                "completed": false
            },
            {
                "title": "Evaluation benchmark on 50 historic production incident tickets",
                "sequence": 5,
                "completed": false
            }
        ]
    },
    {
        "id": "proj_capstone",
        "name": "Intelligent Automation Platform (Capstone)",
        "description": "\ud83c\udf1f FLAGSHIP SYNTHESIS: Full-stack convergence of deterministic enterprise RPA execution with multi-agent cognitive reasoning.",
        "status": "Planning",
        "priority": "P0 - Critical",
        "progress": 15,
        "github_url": "https://github.com/irshadkohli/intelligent-automation-platform",
        "live_url": "",
        "primary_skills": [
            "python",
            "fastapi",
            "oracle_apex",
            "oracle_sql",
            "postgresql",
            "rest_apis",
            "uipath",
            "llm_fundamentals",
            "rag",
            "ai_agents",
            "docker",
            "cloud"
        ],
        "tasks": [
            {
                "title": "System architecture blueprint & component contracts",
                "sequence": 1,
                "completed": false
            },
            {
                "title": "FastAPI orchestrator service & PostgreSQL backend",
                "sequence": 2,
                "completed": false
            },
            {
                "title": "Multi-agent coordination workflow with state machine",
                "sequence": 3,
                "completed": false
            },
            {
                "title": "Enterprise bot connector gateway",
                "sequence": 4,
                "completed": false
            },
            {
                "title": "Live interactive telemetry web portal & documentation",
                "sequence": 5,
                "completed": false
            }
        ]
    }
];

const SEED_MILESTONES = [
    {
        "title": "Master Python OOP & Functional Patterns",
        "description": "Complete comprehensive OOP module, custom exceptions, and iterators.",
        "completed": false
    },
    {
        "title": "Build First FastAPI Async Microservice",
        "description": "Deploy validated REST API with Pydantic models and Swagger docs.",
        "completed": false
    },
    {
        "title": "Launch PostgreSQL Vector Knowledge Base",
        "description": "Implement pgvector index and RAG document search.",
        "completed": false
    },
    {
        "title": "Deploy AI Bot Triage Agent",
        "description": "Autonomous exception triaging agent tested on production logs.",
        "completed": false
    },
    {
        "title": "Transition to AI Automation Engineer",
        "description": "Synthesize enterprise RPA + AI agent architecture in capstone.",
        "completed": false
    }
];

// Universal module export
if (typeof window !== 'undefined') {
    window.SEED_SKILLS = SEED_SKILLS;
    window.SEED_TOPICS = SEED_TOPICS;
    window.SEED_PROJECTS = SEED_PROJECTS;
    window.SEED_MILESTONES = SEED_MILESTONES;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SEED_SKILLS,
        SEED_TOPICS,
        SEED_PROJECTS,
        SEED_MILESTONES
    };
}
