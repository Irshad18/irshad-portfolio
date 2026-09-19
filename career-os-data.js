/**
 * CAREER OS DATA & CONFIGURATION STORE
 * 
 * Centralized data store for Mohd Irshad's personal Career OS.
 * You can easily update skill percentages, targets, priorities, project statuses,
 * and GitHub links directly in this file.
 */

const CAREER_OS_DATA = {
    // ----------------------------------------------------
    // 1. PROFESSIONAL PROFILE & CAREER DIRECTION
    // ----------------------------------------------------
    profile: {
        name: "Mohd Irshad",
        currentRole: "Application Solutions Developer / RPA Developer",
        company: "Oracle India Pvt. Ltd.",
        experienceYears: "4+",
        deliveredProjects: "20+",
        primarySpecialization: "RPA / Intelligent Automation",
        enterpriseDomains: ["Supply Chain", "Order Management", "Finance", "Customer Service"],
        strengths: [
            "Enterprise automation",
            "RPA development",
            "Production support",
            "Requirement gathering",
            "Process design",
            "PDD/SDD documentation",
            "UAT",
            "Hypercare",
            "Stakeholder communication",
            "API integration",
            "Exception handling",
            "Business process automation"
        ]
    },

    careerDirection: {
        targetTitles: [
            "AI Automation Engineer",
            "Intelligent Automation Engineer",
            "AI + Automation Engineer"
        ],
        disclaimer: "Personal development direction and target. Not presented as a guaranteed outcome.",
        progressionStages: [
            {
                id: 1,
                title: "RPA Developer",
                status: "Current Foundation",
                isCurrent: true,
                desc: "Enterprise bot architecture, REFramework, 24x7 support at Oracle India."
            },
            {
                id: 2,
                title: "Automation Engineer",
                status: "Active Bridge",
                isCurrent: false,
                desc: "Full-spectrum automation spanning APIs, databases, Python scripting, and system integrations."
            },
            {
                id: 3,
                title: "AI Automation Engineer",
                status: "Core Target",
                isTarget: true,
                desc: "Autonomous workflow agents, RAG knowledge retrieval, and LLM-driven process automation."
            },
            {
                id: 4,
                title: "Intelligent Automation / AI Engineer",
                status: "Horizon Vision",
                isFuture: true,
                desc: "Self-healing enterprise cognitive systems and large-scale agentic orchestrations."
            }
        ]
    },

    // ----------------------------------------------------
    // 2. CURRENT FOCUS ("WHAT SHOULD I WORK ON NOW?")
    // ----------------------------------------------------
    currentFocus: {
        skillId: "python",
        skillName: "Python",
        icon: "🐍",
        currentLevel: 0,
        targetLevel: 85,
        gap: 85,
        priority: "P0 — Critical",
        why: "Large skill gap + high career relevance + foundational prerequisite for FastAPI microservices, RAG architectures, and AI agent engineering.",
        nextSteps: [
            "1. Advanced Object-Oriented Programming (OOP) & Design Patterns",
            "2. REST APIs & requests / httpx client modules",
            "3. Asynchronous programming with asyncio",
            "4. FastAPI microservice development & Pydantic validation",
            "5. Build & publish Python Automation Toolkit"
        ],
        nextAction: "Complete Python OOP + API module",
        linkedProject: "Python Automation Toolkit"
    },

    // ----------------------------------------------------
    // 2B. TODAY'S ACTIVITY & LEARNING STREAK ("WHAT I DID")
    // ----------------------------------------------------
    todayActivity: {
        date: "SEPTEMBER 20, 2026",
        timeSpent: "0m",
        topicsCount: 0,
        streakDays: 0,
        goalPercent: 0,
        goalCurrent: "0m",
        goalTarget: "2h",
        topics: [],
        notes: "Ready to log your first personal learning session."
    },

    // ----------------------------------------------------
    // 3. SKILL CATEGORIES (11 CATEGORIES)
    // ----------------------------------------------------
    categories: [
        { id: "all", name: "All Skills" },
        { id: "automation", name: "Automation" },
        { id: "programming", name: "Programming" },
        { id: "databases", name: "Databases" },
        { id: "oracle", name: "Oracle Ecosystem" },
        { id: "backend", name: "APIs & Backend" },
        { id: "genai", name: "Generative AI" },
        { id: "rag", name: "RAG" },
        { id: "ai_agents", name: "AI Agents" },
        { id: "software_eng", name: "Software Engineering" },
        { id: "devops", name: "DevOps & Cloud" },
        { id: "datascience", name: "Data Science" },
        { id: "ai_security", name: "AI Security" }
    ],

    // Priority definitions
    priorities: {
        P0: { label: "P0 — Critical", badgeClass: "prio-p0", emoji: "🔴" },
        P1: { label: "P1 — High", badgeClass: "prio-p1", emoji: "🟠" },
        P2: { label: "P2 — Medium", badgeClass: "prio-p2", emoji: "🟡" },
        P3: { label: "P3 — Supporting", badgeClass: "prio-p3", emoji: "⚪" }
    },

    // ----------------------------------------------------
    // 4. COMPREHENSIVE SKILLS DATABASE (35+ SKILLS)
    // ----------------------------------------------------
    skills: [
        // --- 1. Automation ---
        {
            id: "uipath",
            name: "UiPath",
            categoryId: "automation",
            categoryName: "Automation",
            current: 85,
            target: 95,
            priority: "P0",
            status: "Core Mastery",
            checklist: [
                { done: true, text: "UiPath Studio & Workflow Designer" },
                { done: true, text: "Robotic Enterprise Framework (REFramework)" },
                { done: true, text: "Orchestrator Assets, Queues & Scheduling" },
                { done: true, text: "24x7 Production Incident Troubleshooting" },
                { done: false, text: "UiPath AI Center & Document Understanding Integration" }
            ],
            projects: ["30+ Enterprise Production Bots", "RPA Control Tower"],
            nextAction: "Integrate UiPath REST API with external control tower dashboard",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "power_automate",
            name: "Power Automate",
            categoryId: "automation",
            categoryName: "Automation",
            current: 25,
            target: 60,
            priority: "P2",
            status: "In Progress",
            checklist: [
                { done: true, text: "Power Automate Desktop Flows" },
                { done: true, text: "Excel & Windows Desktop Actions" },
                { done: false, text: "Cloud Flows & Automated Webhook Triggers" },
                { done: false, text: "M365 Connectors & Outlook Rules" }
            ],
            projects: ["Office Automation Helpers"],
            nextAction: "Build cloud flow webhook trigger for UiPath process dispatch",
            github: "https://github.com/irshadkohli"
        },

        // --- 2. Programming ---
        {
            id: "python",
            name: "Python",
            categoryId: "programming",
            categoryName: "Programming",
            current: 40,
            target: 85,
            priority: "P0",
            status: "Active Focus",
            checklist: [
                { done: false, text: "Python fundamentals & control flow" },
                { done: false, text: "Data structures (lists, dicts, sets, tuples)" },
                { done: false, text: "Object-Oriented Programming (OOP) & Classes" },
                { done: false, text: "Advanced Python (Decorators, Generators, Context Managers)" },
                { done: false, text: "REST API Clients (requests, httpx)" },
                { done: false, text: "Asyncio & Concurrent Execution" },
                { done: false, text: "Testing with Pytest" },
                { done: false, text: "FastAPI Framework" }
            ],
            projects: [
                "Python Automation Toolkit",
                "Enterprise Knowledge Assistant",
                "Intelligent Automation Platform"
            ],
            nextAction: "Complete Python OOP + API module",
            github: "https://github.com/irshadkohli"
        },

        // --- 3. Databases ---
        {
            id: "sql",
            name: "SQL",
            categoryId: "databases",
            categoryName: "Databases",
            current: 70,
            target: 90,
            priority: "P0",
            status: "In Progress",
            checklist: [
                { done: false, text: "Complex SELECT queries, multi-table JOINs, subqueries" },
                { done: false, text: "Data aggregation, grouping, window functions" },
                { done: false, text: "Query execution plan analysis & index optimization" },
                { done: false, text: "Transactions (ACID), isolation levels, locks" },
                { done: false, text: "Database schema normalization & migrations" }
            ],
            projects: ["RPA Control Tower", "Enterprise Knowledge Assistant"],
            nextAction: "Master query plan optimization and indexing strategies",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "postgresql",
            name: "PostgreSQL",
            categoryId: "databases",
            categoryName: "Databases",
            current: 35,
            target: 75,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: false, text: "PostgreSQL installation & psql CLI basics" },
                { done: false, text: "JSONB queries and indexing" },
                { done: false, text: "pgvector extension for AI vector search" },
                { done: false, text: "Connection pooling & async drivers (asyncpg)" },
                { done: false, text: "Alembic database migrations" }
            ],
            projects: ["Enterprise Knowledge Assistant", "Intelligent Automation Platform"],
            nextAction: "Set up PostgreSQL with pgvector for document embeddings",
            github: "https://github.com/irshadkohli"
        },

        // --- 4. Oracle Ecosystem ---
        {
            id: "oracle_sql",
            name: "Oracle SQL",
            categoryId: "oracle",
            categoryName: "Oracle Ecosystem",
            current: 60,
            target: 85,
            priority: "P1",
            status: "Enterprise Core",
            checklist: [
                { done: false, text: "Oracle database queries & enterprise data views" },
                { done: false, text: "Analytical functions (ROW_NUMBER, RANK, DENSE_RANK)" },
                { done: false, text: "Oracle performance tuning & explain plan" },
                { done: false, text: "Materialized views & partitioning" }
            ],
            projects: ["RPA Control Tower", "Oracle Automated Reports"],
            nextAction: "Complete Oracle SQL explain plan optimization module",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "plsql",
            name: "PL/SQL",
            categoryId: "oracle",
            categoryName: "Oracle Ecosystem",
            current: 60,
            target: 75,
            priority: "P1",
            status: "In Progress",
            checklist: [
                { done: false, text: "Anonymous blocks, variables, control statements" },
                { done: false, text: "Stored procedures & simple functions" },
                { done: false, text: "Packages, cursor handling, exception handling" },
                { done: false, text: "Triggers & bulk collect (FORALL)" }
            ],
            projects: ["RPA Control Tower", "Oracle Bot Telemetry Layer"],
            nextAction: "Build automated PL/SQL package for bot KPI calculation",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "oracle_apex",
            name: "Oracle APEX",
            categoryId: "oracle",
            categoryName: "Oracle Ecosystem",
            current: 45,
            target: 75,
            priority: "P1",
            status: "In Progress",
            checklist: [
                { done: false, text: "Interactive Grids & Custom Form pages" },
                { done: false, text: "Dynamic Actions & Client Validations" },
                { done: false, text: "REST Data Sources & External Web APIs" },
                { done: false, text: "Role-based authentication & session state" }
            ],
            projects: ["RPA Control Tower", "Intelligent Automation Platform"],
            nextAction: "Integrate UiPath Orchestrator REST endpoints into APEX dashboard",
            github: "https://github.com/irshadkohli"
        },

        // --- 5. APIs & Backend ---
        {
            id: "rest_apis",
            name: "REST APIs",
            categoryId: "backend",
            categoryName: "APIs & Backend",
            current: 65,
            target: 85,
            priority: "P0",
            status: "In Progress",
            checklist: [
                { done: false, text: "HTTP methods (GET, POST, PUT, DELETE, PATCH)" },
                { done: false, text: "JSON payloads, headers, query parameters" },
                { done: false, text: "HTTPS security, API tokens & OAuth2 bearer tokens" },
                { done: false, text: "Webhooks & asynchronous event handling" },
                { done: false, text: "API rate limiting, retries & exponential backoff" }
            ],
            projects: ["RPA Control Tower", "AI Automation Agent"],
            nextAction: "Build resilient retry wrapper for UiPath orchestrator API calls",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "fastapi",
            name: "FastAPI",
            categoryId: "backend",
            categoryName: "APIs & Backend",
            current: 10,
            target: 80,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "FastAPI routing & path/query params" },
                { done: true, text: "Pydantic request & response schemas" },
                { done: false, text: "Dependency injection system" },
                { done: false, text: "Async database endpoints with SQLAlchemy / SQLModel" },
                { done: false, text: "Background tasks & WebSockets" }
            ],
            projects: [
                "Enterprise Knowledge Assistant",
                "Intelligent Automation Platform"
            ],
            nextAction: "Build CRUD microservice connected to PostgreSQL with Docker",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "postman",
            name: "Postman",
            categoryId: "backend",
            categoryName: "APIs & Backend",
            current: 20,
            target: 70,
            priority: "P1",
            status: "In Progress",
            checklist: [
                { done: true, text: "Creating collections & environment variables" },
                { done: false, text: "Pre-request scripts & test validation scripts" },
                { done: false, text: "Postman Mock Servers & API documentation" },
                { done: false, text: "Newman CLI for automated pipeline tests" }
            ],
            projects: ["API Automation Framework"],
            nextAction: "Create automated test collection with assertions for bot APIs",
            github: "https://github.com/irshadkohli"
        },

        // --- 6. Generative AI ---
        {
            id: "llm_fundamentals",
            name: "LLM Fundamentals",
            categoryId: "genai",
            categoryName: "Generative AI",
            current: 25,
            target: 85,
            priority: "P0",
            status: "In Progress",
            checklist: [
                { done: true, text: "Transformer architecture high-level intuition" },
                { done: true, text: "Tokens, context windows, temperature, top_p" },
                { done: false, text: "Quantization & model sizing (7B, 14B, 70B)" },
                { done: false, text: "Fine-tuning vs RAG vs In-Context Learning trade-offs" }
            ],
            projects: ["Enterprise Knowledge Assistant"],
            nextAction: "Complete transformer attention mechanism breakdown",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "prompt_engineering",
            name: "Prompt Engineering",
            categoryId: "genai",
            categoryName: "Generative AI",
            current: 35,
            target: 85,
            priority: "P0",
            status: "In Progress",
            checklist: [
                { done: true, text: "Zero-shot & Few-shot prompting" },
                { done: true, text: "Chain-of-Thought (CoT) reasoning" },
                { done: false, text: "Structured outputs with JSON schema enforcement" },
                { done: false, text: "System prompt guardrails & jailbreak defenses" }
            ],
            projects: ["AI Automation Agent"],
            nextAction: "Implement structured JSON extraction prompt templates",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "llm_apis",
            name: "LLM APIs",
            categoryId: "genai",
            categoryName: "Generative AI",
            current: 20,
            target: 80,
            priority: "P0",
            status: "In Progress",
            checklist: [
                { done: true, text: "OpenAI & Anthropic API completions" },
                { done: false, text: "Streaming responses via Server-Sent Events" },
                { done: false, text: "Token counting, budgeting & caching" },
                { done: false, text: "Multi-model fallbacks (LiteLLM)" }
            ],
            projects: ["AI Automation Agent", "Enterprise Knowledge Assistant"],
            nextAction: "Build wrapper with automated fallback between LLM providers",
            github: "https://github.com/irshadkohli"
        },

        // --- 7. AI Engineering ---
        {
            id: "rag",
            name: "RAG (Retrieval-Augmented)",
            categoryId: "ai_eng",
            categoryName: "AI Engineering",
            current: 20,
            target: 80,
            priority: "P0",
            status: "In Progress",
            checklist: [
                { done: true, text: "Naive RAG pipeline (Chunking -> Embedding -> Search)" },
                { done: false, text: "Advanced chunking (Semantic, recursive, sliding window)" },
                { done: false, text: "Hybrid search (Dense embeddings + BM25 keyword)" },
                { done: false, text: "Reranking models (Cohere Rerank, BGE)" },
                { done: false, text: "RAG evaluation with Ragas & DeepEval" }
            ],
            projects: [
                "Enterprise Knowledge Assistant",
                "Intelligent Automation Platform"
            ],
            nextAction: "Build hybrid search RAG pipeline for enterprise SOP manuals",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "embeddings",
            name: "Embeddings",
            categoryId: "ai_eng",
            categoryName: "AI Engineering",
            current: 15,
            target: 75,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "Vector representation intuition & cosine similarity" },
                { done: false, text: "Choosing embedding models (OpenAI, HuggingFace)" },
                { done: false, text: "Dimension reduction & clustering" },
                { done: false, text: "Domain-specific embedding adaptation" }
            ],
            projects: ["Enterprise Knowledge Assistant"],
            nextAction: "Compare embedding dimensions and retrieval latency benchmarks",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "vector_databases",
            name: "Vector Databases",
            categoryId: "ai_eng",
            categoryName: "AI Engineering",
            current: 10,
            target: 75,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "Vector DB concepts (HNSW, IVFFlat indexing)" },
                { done: false, text: "ChromaDB local persistence" },
                { done: false, text: "pgvector inside PostgreSQL" },
                { done: false, text: "Filtering vectors by metadata" }
            ],
            projects: ["Enterprise Knowledge Assistant"],
            nextAction: "Implement metadata-filtered vector searches in ChromaDB & pgvector",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "ai_agents",
            name: "AI Agents",
            categoryId: "ai_eng",
            categoryName: "AI Engineering",
            current: 10,
            target: 80,
            priority: "P0",
            status: "Learning",
            checklist: [
                { done: true, text: "ReAct (Reason + Act) loop concept" },
                { done: false, text: "LangGraph state machine workflows" },
                { done: false, text: "Multi-agent collaboration & delegation" },
                { done: false, text: "Self-healing & automated exception recovery" }
            ],
            projects: ["AI Automation Agent", "Intelligent Automation Platform"],
            nextAction: "Prototype LangGraph agent that reads bot exception logs",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "tool_calling",
            name: "Tool Calling",
            categoryId: "ai_eng",
            categoryName: "AI Engineering",
            current: 10,
            target: 75,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "Function calling schemas (OpenAI / Claude)" },
                { done: false, text: "Connecting LLM tools to Python functions" },
                { done: false, text: "Triggering UiPath Orchestrator jobs as tools" },
                { done: false, text: "Error handling & validation of tool outputs" }
            ],
            projects: ["AI Automation Agent"],
            nextAction: "Create tool-calling schema that invokes UiPath start-job API",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "mcp",
            name: "Model Context Protocol (MCP)",
            categoryId: "ai_eng",
            categoryName: "AI Engineering",
            current: 5,
            target: 70,
            priority: "P2",
            status: "Upcoming",
            checklist: [
                { done: true, text: "MCP architecture & spec overview" },
                { done: false, text: "Building an MCP server in Python" },
                { done: false, text: "Exposing database & API resources via MCP" },
                { done: false, text: "Integrating MCP with agent frameworks" }
            ],
            projects: ["Intelligent Automation Platform"],
            nextAction: "Build custom MCP server to query Oracle APEX database",
            github: "https://github.com/irshadkohli"
        },

        // --- 8. DevOps & Cloud ---
        {
            id: "git_github",
            name: "Git / GitHub",
            categoryId: "devops",
            categoryName: "DevOps & Cloud",
            current: 30,
            target: 80,
            priority: "P1",
            status: "In Progress",
            checklist: [
                { done: true, text: "Git clone, add, commit, push, pull" },
                { done: true, text: "Branching, merge, pull requests" },
                { done: false, text: "Resolving merge conflicts & git rebase" },
                { done: false, text: "GitHub Releases, semantic versioning & tags" }
            ],
            projects: ["All Portfolio Projects"],
            nextAction: "Set up standardized branch protection and commit conventions",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "docker",
            name: "Docker",
            categoryId: "devops",
            categoryName: "DevOps & Cloud",
            current: 10,
            target: 65,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "Docker images, containers, Docker CLI basics" },
                { done: false, text: "Writing optimized multi-stage Dockerfiles" },
                { done: false, text: "Docker Compose for multi-container stacks" },
                { done: false, text: "Volume persistence & network bridging" }
            ],
            projects: ["Enterprise Knowledge Assistant", "Intelligent Automation Platform"],
            nextAction: "Create Docker Compose file for FastAPI + PostgreSQL + ChromaDB",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "cloud",
            name: "Cloud (OCI / AWS)",
            categoryId: "devops",
            categoryName: "DevOps & Cloud",
            current: 10,
            target: 65,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "Cloud compute instances & VMs" },
                { done: false, text: "Serverless functions & container runtimes" },
                { done: false, text: "Object storage (S3 / OCI Bucket)" },
                { done: false, text: "IAM policies & secrets management" }
            ],
            projects: ["Intelligent Automation Platform"],
            nextAction: "Deploy containerized FastAPI service to cloud serverless",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "cicd",
            name: "CI/CD",
            categoryId: "devops",
            categoryName: "DevOps & Cloud",
            current: 5,
            target: 60,
            priority: "P1",
            status: "Upcoming",
            checklist: [
                { done: false, text: "GitHub Actions workflow syntax" },
                { done: false, text: "Automated linting & pytest execution on push" },
                { done: false, text: "Automated container builds & registry pushes" },
                { done: false, text: "Continuous deployment to staging environment" }
            ],
            projects: ["Python Automation Toolkit"],
            nextAction: "Create GitHub Action to run pytest on pull requests",
            github: "https://github.com/irshadkohli"
        },

        // --- 9. Data Science ---
        {
            id: "python_data_analysis",
            name: "Python Data Analysis",
            categoryId: "datascience",
            categoryName: "Data Science",
            current: 35,
            target: 75,
            priority: "P2",
            status: "In Progress",
            checklist: [
                { done: true, text: "Jupyter Notebooks exploration" },
                { done: true, text: "Data cleaning, filtering, missing values" },
                { done: false, text: "Exploratory Data Analysis (EDA) pipelines" },
                { done: false, text: "Data visualization (Matplotlib, Seaborn)" }
            ],
            projects: ["Bot Telemetry Analytics"],
            nextAction: "Build automated monthly SLA reporting script with charts",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "pandas",
            name: "pandas",
            categoryId: "datascience",
            categoryName: "Data Science",
            current: 30,
            target: 75,
            priority: "P2",
            status: "In Progress",
            checklist: [
                { done: true, text: "DataFrames & Series creation" },
                { done: true, text: "Filtering, slicing, merging, concatenating" },
                { done: false, text: "groupby, agg, pivot_table operations" },
                { done: false, text: "Vectorized operations for large CSV processing" }
            ],
            projects: ["Python Automation Toolkit"],
            nextAction: "Replace Excel macro logic with pandas automated pipelines",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "numpy",
            name: "NumPy",
            categoryId: "datascience",
            categoryName: "Data Science",
            current: 25,
            target: 70,
            priority: "P2",
            status: "In Progress",
            checklist: [
                { done: true, text: "N-dimensional arrays & vector math" },
                { done: false, text: "Broadcasting rules & array slicing" },
                { done: false, text: "Linear algebra & matrix operations" }
            ],
            projects: ["IIT Roorkee PG Coursework"],
            nextAction: "Complete matrix math assignments for ML specialization",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "statistics",
            name: "Statistics & Probability",
            categoryId: "datascience",
            categoryName: "Data Science",
            current: 30,
            target: 70,
            priority: "P2",
            status: "In Progress",
            checklist: [
                { done: true, text: "Descriptive statistics (Mean, Median, Std Dev)" },
                { done: false, text: "Probability distributions (Normal, Poisson, Binomial)" },
                { done: false, text: "Hypothesis testing (p-value, z-test, t-test)" }
            ],
            projects: ["IIT Roorkee PG Coursework"],
            nextAction: "Apply hypothesis testing to bot failure distribution metrics",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "machine_learning",
            name: "Machine Learning",
            categoryId: "datascience",
            categoryName: "Data Science",
            current: 20,
            target: 70,
            priority: "P2",
            status: "In Progress",
            checklist: [
                { done: true, text: "Supervised vs Unsupervised learning paradigms" },
                { done: false, text: "Regression, Decision Trees, Random Forests" },
                { done: false, text: "Model evaluation (Precision, Recall, F1, ROC-AUC)" },
                { done: false, text: "Scikit-Learn pipelines & cross-validation" }
            ],
            projects: ["IIT Roorkee PG Coursework"],
            nextAction: "Train bot exception classification model with Scikit-Learn",
            github: "https://github.com/irshadkohli"
        },

        // --- 10. Software Engineering ---
        {
            id: "testing",
            name: "Testing & QA",
            categoryId: "software_eng",
            categoryName: "Software Engineering",
            current: 15,
            target: 70,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "UAT testing protocols for RPA bots" },
                { done: false, text: "Unit testing with Pytest" },
                { done: false, text: "Mocking external APIs & databases" },
                { done: false, text: "Integration test suites" }
            ],
            projects: ["Python Automation Toolkit", "API Automation Framework"],
            nextAction: "Write comprehensive pytest suite with mocks for API client",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "system_design",
            name: "System Design",
            categoryId: "software_eng",
            categoryName: "Software Engineering",
            current: 15,
            target: 70,
            priority: "P2",
            status: "Learning",
            checklist: [
                { done: true, text: "RPA enterprise queue architecture & dispatcher-performer" },
                { done: false, text: "Microservices vs Monolith architectures" },
                { done: false, text: "Caching strategies (Redis) & Load Balancing" },
                { done: false, text: "Message queues (RabbitMQ, Kafka)" }
            ],
            projects: ["Intelligent Automation Platform"],
            nextAction: "Diagram end-to-end architecture for multi-agent bot platform",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "auth_security",
            name: "Authentication & Security",
            categoryId: "software_eng",
            categoryName: "Software Engineering",
            current: 15,
            target: 70,
            priority: "P1",
            status: "Learning",
            checklist: [
                { done: true, text: "Orchestrator credential assets & CyberArk basics" },
                { done: false, text: "JWT tokens & OAuth2 password flows" },
                { done: false, text: "API key hashing & secure storage" },
                { done: false, text: "OWASP Top 10 vulnerabilities & prevention" }
            ],
            projects: ["Enterprise Knowledge Assistant"],
            nextAction: "Implement OAuth2 JWT authentication in FastAPI gateway",
            github: "https://github.com/irshadkohli"
        },

        // --- 11. Professional Skills ---
        {
            id: "req_gathering",
            name: "Requirement Gathering",
            categoryId: "professional",
            categoryName: "Professional Skills",
            current: 75,
            target: 90,
            priority: "P0",
            status: "Enterprise Core",
            checklist: [
                { done: true, text: "Business stakeholder discovery sessions" },
                { done: true, text: "Process walk-throughs & AS-IS vs TO-BE mappings" },
                { done: true, text: "Feasibility analysis & ROI calculations" },
                { done: false, text: "AI agent opportunity identification frameworks" }
            ],
            projects: ["20+ Delivered Automation Projects"],
            nextAction: "Develop AI automation feasibility evaluation matrix",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "pdd_sdd",
            name: "PDD / SDD Documentation",
            categoryId: "professional",
            categoryName: "Professional Skills",
            current: 80,
            target: 95,
            priority: "P0",
            status: "Enterprise Core",
            checklist: [
                { done: true, text: "Process Definition Document (PDD) authoring" },
                { done: true, text: "Solution Design Document (SDD) architecture" },
                { done: true, text: "Exception handling matrix & escalation paths" },
                { done: false, text: "AI agent architecture decision records (ADRs)" }
            ],
            projects: ["Oracle Enterprise Automations"],
            nextAction: "Create template for Agentic AI Architecture Design Documents",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "uat",
            name: "User Acceptance Testing (UAT)",
            categoryId: "professional",
            categoryName: "Professional Skills",
            current: 75,
            target: 90,
            priority: "P1",
            status: "Enterprise Core",
            checklist: [
                { done: true, text: "Test scenario design & test data preparation" },
                { done: true, text: "Facilitating business user sign-off sessions" },
                { done: true, text: "Defect logging & fast-turnaround remediation" },
                { done: false, text: "Automated regression validation before UAT" }
            ],
            projects: ["Enterprise Automations"],
            nextAction: "Standardize pre-UAT automated verification checklists",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "prod_support",
            name: "Production Support (24x7)",
            categoryId: "professional",
            categoryName: "Professional Skills",
            current: 80,
            target: 95,
            priority: "P0",
            status: "Enterprise Core",
            checklist: [
                { done: true, text: "Managing 30+ live production bots around the clock" },
                { done: true, text: "P1/P2 critical incident escalation & resolution" },
                { done: true, text: "SLA compliance tracking & root cause analysis (RCA)" },
                { done: false, text: "Automated self-healing bot monitoring agents" }
            ],
            projects: ["30+ Live Production Bots"],
            nextAction: "Integrate LLM bot log analyzer for proactive incident triage",
            github: "https://github.com/irshadkohli"
        },
        {
            id: "stakeholder_comm",
            name: "Stakeholder Communication",
            categoryId: "professional",
            categoryName: "Professional Skills",
            current: 70,
            target: 90,
            priority: "P1",
            status: "Enterprise Core",
            checklist: [
                { done: true, text: "Leading global engineering town halls" },
                { done: true, text: "Sprint review demos to business executives" },
                { done: true, text: "Hypercare status reporting & executive updates" },
                { done: false, text: "Technical AI evangelism & mentoring junior engineers" }
            ],
            projects: ["Oracle Global Town Hall Presentation"],
            nextAction: "Deliver internal workshop on transitioning RPA to Agentic AI",
            github: "https://github.com/irshadkohli"
        }
    ],

    // ----------------------------------------------------
    // 5. CAREER ROADMAP (6 SEQUENTIAL PHASES)
    // ----------------------------------------------------
    roadmap: [
        {
            phase: 1,
            title: "PHASE 1 — FOUNDATION",
            badge: "In Progress",
            badgeClass: "phase-active",
            skills: ["Python", "SQL", "Git/GitHub", "REST APIs", "Postman", "Oracle SQL"],
            description: "Solidifying core programming, relational query optimization, version control, and enterprise API communication standards."
        },
        {
            phase: 2,
            title: "PHASE 2 — ORACLE + BACKEND",
            badge: "In Progress",
            badgeClass: "phase-active",
            skills: ["PL/SQL", "Oracle APEX", "FastAPI", "PostgreSQL", "Database Design"],
            description: "Connecting enterprise Oracle databases with asynchronous Python backend services and relational schema design."
        },
        {
            phase: 3,
            title: "PHASE 3 — GENERATIVE AI",
            badge: "Active Sprints",
            badgeClass: "phase-upcoming",
            skills: ["LLMs", "Prompt Engineering", "LLM APIs", "Embeddings", "Vector Databases", "RAG"],
            description: "Mastering Large Language Model fundamentals, structured prompt engineering, semantic embeddings, and context-aware RAG pipelines."
        },
        {
            phase: 4,
            title: "PHASE 4 — AGENTIC AI",
            badge: "Next Horizon",
            badgeClass: "phase-horizon",
            skills: ["Tool Calling", "AI Agents", "Memory", "Human-in-the-loop", "MCP", "Agent Evaluation"],
            description: "Building autonomous agents capable of dynamic reasoning, external tool execution, state management, and self-correction loops."
        },
        {
            phase: 5,
            title: "PHASE 5 — INTELLIGENT AUTOMATION",
            badge: "Synthesis Goal",
            badgeClass: "phase-synthesis",
            skills: ["AI", "Python", "FastAPI", "APEX", "Oracle", "PostgreSQL", "REST APIs", "UiPath"],
            description: "The convergence point: unifying deterministic enterprise RPA reliability with cognitive AI decision systems."
        },
        {
            phase: 6,
            title: "PHASE 6 — PRODUCTION ENGINEERING",
            badge: "Hardening",
            badgeClass: "phase-production",
            skills: ["Docker", "Cloud", "CI/CD", "Testing", "Security", "Monitoring", "System Design"],
            description: "Packaging, containerizing, and orchestrating scalable, secure cloud-native automation microservices with automated pipelines."
        }
    ],

    // ----------------------------------------------------
    // 6. "BUILD → LEARN → PROVE": PROJECT ROADMAP
    // ----------------------------------------------------
    projects: [
        {
            id: "proj_toolkit",
            number: "01",
            title: "Python Automation Toolkit",
            tagline: "High-speed headless utilities replacing fragile UI actions",
            skills: ["Python", "File handling", "APIs", "Automation", "Testing"],
            status: "Active Development",
            progress: 55,
            isCapstone: false,
            description: "A modular suite of Python-driven automation utilities and CLI runners replacing brittle desktop UI clicks with headless data processing, Excel transformation, and REST webhook triggers.",
            githubUrl: "https://github.com/irshadkohli",
            liveUrl: "",
            highlights: [
                "Automated Excel / CSV normalization and validation engine",
                "Modular CLI with Click and structured logging",
                "Asynchronous HTTP client with retry logic",
                "Unit test coverage with Pytest"
            ]
        },
        {
            id: "proj_control_tower",
            number: "02",
            title: "RPA Control Tower",
            tagline: "Enterprise bot telemetry & SLA management platform",
            skills: ["Oracle APEX", "Oracle SQL", "UiPath", "Orchestrator", "REST APIs", "Dashboards"],
            status: "In Progress",
            progress: 40,
            isCapstone: false,
            description: "Centralized operations portal built with Oracle APEX and UiPath Orchestrator APIs to monitor 30+ production bots in real-time, track Average Handling Time (AHT), and dispatch self-healing restart triggers.",
            githubUrl: "https://github.com/irshadkohli",
            liveUrl: "",
            highlights: [
                "Real-time bot health telemetry and exception tracking",
                "Automated SLA degradation alerts and incident dispatch",
                "Interactive Oracle APEX analytics charts and queue inspection",
                "Integrated secure credential rotation hooks"
            ]
        },
        {
            id: "proj_knowledge_assistant",
            number: "03",
            title: "Enterprise Knowledge Assistant",
            tagline: "Context-aware RAG search across enterprise SOPs & runbooks",
            skills: ["Python", "FastAPI", "PostgreSQL", "pgvector", "RAG", "LLM"],
            status: "Prototype Active",
            progress: 30,
            isCapstone: false,
            description: "Contextual question-answering and enterprise runbook assistant built with FastAPI and PostgreSQL pgvector, utilizing hybrid dense/sparse retrieval and cited source synthesis.",
            githubUrl: "https://github.com/irshadkohli",
            liveUrl: "",
            highlights: [
                "Hybrid dense embedding + BM25 keyword retrieval pipeline",
                "Vector similarity search with pgvector inside PostgreSQL",
                "Strict context citation to eliminate hallucinations",
                "FastAPI asynchronous backend with OpenAPI documentation"
            ]
        },
        {
            id: "proj_ai_agent",
            number: "04",
            title: "AI Automation Agent",
            tagline: "Autonomous exception diagnostic & remediation co-pilot",
            skills: ["LLM", "AI Agents", "Tool Calling", "REST APIs", "UiPath", "Human-in-the-loop"],
            status: "Architecture Design",
            progress: 20,
            isCapstone: false,
            description: "Autonomous agentic co-pilot that ingests UiPath bot exception screenshots and stack traces, queries runbooks via RAG, formulates resolution plans, and executes corrective API calls with human approval.",
            githubUrl: "https://github.com/irshadkohli",
            liveUrl: "",
            highlights: [
                "LangGraph state machine for multi-step exception remediation",
                "Tool-calling integration with UiPath Orchestrator REST endpoints",
                "Human-in-the-loop confirmation modal for high-impact actions",
                "Automated post-incident RCA summary generation"
            ]
        },
        {
            id: "proj_capstone",
            number: "05",
            title: "Intelligent Automation Platform",
            tagline: "End-to-end cognitive automation ecosystem",
            skills: [
                "Python", "FastAPI", "Oracle APEX", "Oracle SQL", "PostgreSQL",
                "REST APIs", "UiPath", "LLM", "RAG", "AI Agents", "Docker", "Cloud"
            ],
            status: "Capstone Vision",
            progress: 15,
            isCapstone: true,
            capstoneLabel: "CAPSTONE PROJECT",
            description: "The flagship capstone synthesis: an enterprise-grade intelligent automation platform bridging deterministic RPA bot execution with autonomous multi-agent reasoning, scalable FastAPI services, and unified Oracle telemetry.",
            githubUrl: "https://github.com/irshadkohli",
            liveUrl: "",
            highlights: [
                "Full convergence of RPA reliability and Agentic AI autonomy",
                "Unified microservices stack containerized with Docker",
                "Multi-agent task orchestration with memory and vector search",
                "Enterprise role-based security, audit trails, and cloud hosting"
            ]
        }
    ]
};

// Expose globally
if (typeof window !== "undefined") {
    window.CAREER_OS_DATA = CAREER_OS_DATA;
}
if (typeof global !== "undefined") {
    global.CAREER_OS_DATA = CAREER_OS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = CAREER_OS_DATA;
}

