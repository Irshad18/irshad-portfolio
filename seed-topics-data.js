/**
 * CAREER OS 2.0: SEED DATA & COMPREHENSIVE TOPICS CATALOG
 * 
 * Exhaustive learning roadmaps and initial state for all skills, topics,
 * project tasks, and milestones.
 */

const SEED_SKILLS = [
    {
        id: "python",
        name: "Python",
        category: "Programming",
        description: "Core language for backend automation, API development, AI engineering, and data pipelines.",
        priority: "P0 - Critical",
        current_level: 40,
        target_level: 85,
        active: true
    },
    {
        id: "sql",
        name: "SQL",
        category: "Databases",
        description: "Relational database querying, aggregations, joins, analytical queries, and schema management.",
        priority: "P1 - High",
        current_level: 70,
        target_level: 85,
        active: true
    },
    {
        id: "oracle_plsql",
        name: "Oracle SQL / PL-SQL",
        category: "Oracle Ecosystem",
        description: "Enterprise database logic, stored procedures, packages, triggers, cursors, and bulk processing.",
        priority: "P1 - High",
        current_level: 60,
        target_level: 80,
        active: true
    },
    {
        id: "oracle_apex",
        name: "Oracle APEX",
        category: "Oracle Ecosystem",
        description: "Low-code enterprise web applications, interactive grids, charts, ORDS REST integration.",
        priority: "P1 - High",
        current_level: 45,
        target_level: 80,
        active: true
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        category: "Databases",
        description: "Advanced relational database, JSONB handling, indexes, pgvector embeddings for RAG.",
        priority: "P1 - High",
        current_level: 35,
        target_level: 80,
        active: true
    },
    {
        id: "rest_apis",
        name: "REST APIs",
        category: "APIs & Backend",
        description: "HTTP protocol, status codes, authentication, rate limiting, webhook consumers, Postman.",
        priority: "P0 - Critical",
        current_level: 65,
        target_level: 90,
        active: true
    },
    {
        id: "fastapi",
        name: "FastAPI",
        category: "APIs & Backend",
        description: "High-performance async Python backend framework for AI microservices and REST endpoints.",
        priority: "P0 - Critical",
        current_level: 25,
        target_level: 85,
        active: true
    },
    {
        id: "genai",
        name: "Generative AI",
        category: "Generative AI",
        description: "LLM architectures, prompting strategies, structured JSON outputs, function calling, evaluation.",
        priority: "P0 - Critical",
        current_level: 25,
        target_level: 85,
        active: true
    },
    {
        id: "rag",
        name: "RAG (Retrieval-Augmented Generation)",
        category: "Generative AI",
        description: "Embeddings, vector databases, chunking strategies, hybrid search, retrieval grounding.",
        priority: "P0 - Critical",
        current_level: 15,
        target_level: 85,
        active: true
    },
    {
        id: "ai_agents",
        name: "AI Agents",
        category: "AI Engineering",
        description: "Autonomous reasoning, tool execution, multi-agent coordination, human-in-the-loop guardrails.",
        priority: "P0 - Critical",
        current_level: 10,
        target_level: 80,
        active: true
    },
    {
        id: "mcp",
        name: "MCP (Model Context Protocol)",
        category: "AI Engineering",
        description: "Standardized open protocol connecting AI agents to external tools, data sources, and servers.",
        priority: "P1 - High",
        current_level: 15,
        target_level: 80,
        active: true
    },
    {
        id: "uipath",
        name: "UiPath (RPA)",
        category: "Automation",
        description: "Enterprise robotic process automation, REFramework, Orchestrator queues, production support.",
        priority: "P1 - High",
        current_level: 90,
        target_level: 90,
        active: true
    },
    {
        id: "docker",
        name: "Docker & Containers",
        category: "DevOps & Cloud",
        description: "Containerization of Python scripts, FastAPI services, PostgreSQL, and multi-container Docker Compose.",
        priority: "P1 - High",
        current_level: 30,
        target_level: 75,
        active: true
    },
    {
        id: "git",
        name: "Git & GitHub",
        category: "DevOps & Cloud",
        description: "Version control, branching workflows, PRs, GitHub Actions for basic CI/CD automation.",
        priority: "P1 - High",
        current_level: 70,
        target_level: 85,
        active: true
    }
];

const SEED_TOPICS = {
    // ----------------------------------------------------
    // PYTHON (53 Topics)
    // ----------------------------------------------------
    python: [
        // Fundamentals (9)
        { title: "Variables and Data Types", description: "Integers, floats, strings, booleans, type casting, type inspection.", sequence: 1, difficulty: "Beginner", required: true, completed: true },
        { title: "Conditions", description: "if, elif, else branches, boolean logic, ternary operators.", sequence: 2, difficulty: "Beginner", required: true, completed: true },
        { title: "Loops", description: "for loops, while loops, break, continue, pass, loop else clauses.", sequence: 3, difficulty: "Beginner", required: true, completed: true },
        { title: "Functions", description: "def, return values, *args, **kwargs, default parameters, scope.", sequence: 4, difficulty: "Beginner", required: true, completed: true },
        { title: "Lists", description: "Indexing, slicing, appending, extending, list methods, sorting.", sequence: 5, difficulty: "Beginner", required: true, completed: true },
        { title: "Tuples", description: "Immutability, tuple packing/unpacking, namedtuples.", sequence: 6, difficulty: "Beginner", required: true, completed: true },
        { title: "Sets", description: "Unique sets, set operations (union, intersection, difference), frozensets.", sequence: 7, difficulty: "Beginner", required: true, completed: true },
        { title: "Dictionaries", description: "Key-value pairs, dict methods, dictionary merges, defaultdict.", sequence: 8, difficulty: "Beginner", required: true, completed: true },
        { title: "Comprehensions", description: "List, dictionary, and set comprehensions with conditional filtering.", sequence: 9, difficulty: "Beginner", required: true, completed: true },

        // OOP (7)
        { title: "Classes and Objects", description: "Class definitions, self parameter, instantiating objects.", sequence: 10, difficulty: "Intermediate", required: true, completed: true },
        { title: "Constructors", description: "__init__ method, instance attributes vs class attributes.", sequence: 11, difficulty: "Intermediate", required: true, completed: true },
        { title: "Encapsulation", description: "Public, protected (_), and private (__) attributes, getters/setters, @property.", sequence: 12, difficulty: "Intermediate", required: true, completed: false },
        { title: "Inheritance", description: "Single inheritance, multiple inheritance, super(), method resolution order (MRO).", sequence: 13, difficulty: "Intermediate", required: true, completed: false },
        { title: "Polymorphism", description: "Method overriding, duck typing in Python.", sequence: 14, difficulty: "Intermediate", required: true, completed: false },
        { title: "Abstraction", description: "abc module, ABC base class, @abstractmethod.", sequence: 15, difficulty: "Intermediate", required: true, completed: false },
        { title: "Composition", description: "Has-a relationships vs is-a relationships, decoupling components.", sequence: 16, difficulty: "Intermediate", required: true, completed: false },

        // Intermediate (10)
        { title: "Modules", description: "Creating and importing modules, __name__ == '__main__'.", sequence: 17, difficulty: "Intermediate", required: true, completed: true },
        { title: "Packages", description: "__init__.py, relative vs absolute imports, package distribution.", sequence: 18, difficulty: "Intermediate", required: true, completed: true },
        { title: "Virtual Environments", description: "venv, virtualenv, poetry, requirements.txt management.", sequence: 19, difficulty: "Intermediate", required: true, completed: true },
        { title: "Exception Handling", description: "try, except, else, finally, custom exception hierarchies.", sequence: 20, difficulty: "Intermediate", required: true, completed: true },
        { title: "File Handling", description: "open(), read, write, append, path validation.", sequence: 21, difficulty: "Intermediate", required: true, completed: true },
        { title: "JSON", description: "json.loads(), json.dumps(), serialization of custom objects.", sequence: 22, difficulty: "Intermediate", required: true, completed: true },
        { title: "CSV", description: "csv.reader, csv.DictReader, csv.writer, handling delimiters.", sequence: 23, difficulty: "Intermediate", required: true, completed: true },
        { title: "Regular Expressions", description: "re module: match, search, findall, sub, regex flags.", sequence: 24, difficulty: "Intermediate", required: true, completed: false },
        { title: "Logging", description: "logging module, levels (DEBUG, INFO, ERROR), handlers, formatters.", sequence: 25, difficulty: "Intermediate", required: true, completed: true },
        { title: "Environment Variables", description: "os.environ, python-dotenv, securing secrets.", sequence: 26, difficulty: "Intermediate", required: true, completed: true },

        // Advanced (7)
        { title: "Decorators", description: "Function wrappers, functools.wraps, parameterized decorators.", sequence: 27, difficulty: "Advanced", required: true, completed: false },
        { title: "Generators", description: "yield keyword, generator expressions, memory-efficient iteration.", sequence: 28, difficulty: "Advanced", required: true, completed: false },
        { title: "Iterators", description: "__iter__ and __next__ protocols, custom iterable classes.", sequence: 29, difficulty: "Advanced", required: true, completed: false },
        { title: "Context Managers", description: "with statement, __enter__ and __exit__, contextlib.contextmanager.", sequence: 30, difficulty: "Advanced", required: true, completed: false },
        { title: "Type Hints", description: "typing module, Optional, Union, Any, List, Dict, Callable, mypy.", sequence: 31, difficulty: "Advanced", required: true, completed: false },
        { title: "AsyncIO", description: "async/await, event loop, asyncio.gather, asyncio.run, coroutines.", sequence: 32, difficulty: "Advanced", required: true, completed: false },
        { title: "Concurrency", description: "Threading vs multiprocessing vs asyncio, GIL implications.", sequence: 33, difficulty: "Advanced", required: true, completed: false },

        // APIs (8)
        { title: "HTTP Fundamentals", description: "Request/response lifecycle, verbs, headers, status codes.", sequence: 34, difficulty: "Intermediate", required: true, completed: true },
        { title: "REST Architecture", description: "Statelessness, resources, URI design, representations.", sequence: 35, difficulty: "Intermediate", required: true, completed: true },
        { title: "requests Library", description: "GET, POST, PUT, DELETE, query params, form data, JSON payloads.", sequence: 36, difficulty: "Intermediate", required: true, completed: true },
        { title: "JSON APIs", description: "Parsing nested responses, payload construction, schema validation.", sequence: 37, difficulty: "Intermediate", required: true, completed: true },
        { title: "Authentication", description: "Basic Auth, Bearer Tokens, API Keys, OAuth2 token flows.", sequence: 38, difficulty: "Intermediate", required: true, completed: false },
        { title: "Error Handling in APIs", description: "Status code checking (raise_for_status), catching connection errors.", sequence: 39, difficulty: "Intermediate", required: true, completed: false },
        { title: "Retries & Backoff", description: "Exponential backoff, urllib3 Retry adapter, tenacity library.", sequence: 40, difficulty: "Intermediate", required: true, completed: false },
        { title: "Pagination", description: "Cursor-based, offset/limit, page-number pagination handling.", sequence: 41, difficulty: "Intermediate", required: true, completed: false },

        // Testing (4)
        { title: "pytest Fundamentals", description: "Test discovery, assertions, test runners, pytest CLI.", sequence: 42, difficulty: "Intermediate", required: true, completed: false },
        { title: "Unit Testing", description: "Testing isolated functions and classes, test fixtures.", sequence: 43, difficulty: "Intermediate", required: true, completed: false },
        { title: "Mocking", description: "unittest.mock, Mock, patch, mock return values for external APIs.", sequence: 44, difficulty: "Advanced", required: true, completed: false },
        { title: "Integration Testing", description: "End-to-end flow testing, test databases, test containers.", sequence: 45, difficulty: "Advanced", required: true, completed: false },

        // FastAPI (8)
        { title: "FastAPI Routes", description: "FastAPI app instance, APIRouter, path parameters, query parameters.", sequence: 46, difficulty: "Intermediate", required: true, completed: false },
        { title: "Pydantic Models", description: "BaseModel, type declarations, Field(), validators, ConfigDict.", sequence: 47, difficulty: "Intermediate", required: true, completed: false },
        { title: "Request & Response Validation", description: "Automatic request validation, custom response models, HTTP exceptions.", sequence: 48, difficulty: "Intermediate", required: true, completed: false },
        { title: "Dependency Injection", description: "Depends(), reusable dependencies, database session injection.", sequence: 49, difficulty: "Advanced", required: true, completed: false },
        { title: "API Authentication", description: "OAuth2PasswordBearer, JWT tokens, secure password hashing.", sequence: 50, difficulty: "Advanced", required: true, completed: false },
        { title: "Database Integration", description: "SQLAlchemy 2.0 async sessions, Alembic migrations, CRUD patterns.", sequence: 51, difficulty: "Advanced", required: true, completed: false },
        { title: "Async APIs", description: "async def endpoint handlers, non-blocking I/O operations.", sequence: 52, difficulty: "Advanced", required: true, completed: false },
        { title: "Swagger & OpenAPI", description: "Interactive documentation (/docs), OpenAPI schema customization.", sequence: 53, difficulty: "Beginner", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // SQL (16 Topics)
    // ----------------------------------------------------
    sql: [
        { title: "SELECT", description: "Querying specific columns, column aliases, DISTINCT.", sequence: 1, difficulty: "Beginner", required: true, completed: true },
        { title: "WHERE", description: "Comparison operators, LIKE, BETWEEN, IN, NULL checks.", sequence: 2, difficulty: "Beginner", required: true, completed: true },
        { title: "ORDER BY", description: "Sorting results, ASC/DESC, multi-column ordering.", sequence: 3, difficulty: "Beginner", required: true, completed: true },
        { title: "GROUP BY", description: "Aggregating data across categories, aggregate functions.", sequence: 4, difficulty: "Beginner", required: true, completed: true },
        { title: "HAVING", description: "Filtering grouped records based on aggregate conditions.", sequence: 5, difficulty: "Beginner", required: true, completed: true },
        { title: "JOIN", description: "INNER, LEFT, RIGHT, FULL OUTER, CROSS joins, join conditions.", sequence: 6, difficulty: "Intermediate", required: true, completed: true },
        { title: "Subqueries", description: "Scalar subqueries, correlated subqueries, EXISTS, IN.", sequence: 7, difficulty: "Intermediate", required: true, completed: true },
        { title: "CASE Statements", description: "Conditional logic in SELECT and WHERE clauses.", sequence: 8, difficulty: "Intermediate", required: true, completed: true },
        { title: "COALESCE & NVL", description: "Handling NULL values, fallback defaults.", sequence: 9, difficulty: "Intermediate", required: true, completed: true },
        { title: "Common Table Expressions (CTE)", description: "WITH clauses, readable multi-step queries, recursive CTEs.", sequence: 10, difficulty: "Intermediate", required: true, completed: true },
        { title: "Window Functions", description: "ROW_NUMBER(), RANK(), DENSE_RANK(), OVER (PARTITION BY ... ORDER BY).", sequence: 11, difficulty: "Advanced", required: true, completed: false },
        { title: "Views", description: "CREATE VIEW, materialized views, refreshing views.", sequence: 12, difficulty: "Intermediate", required: true, completed: true },
        { title: "Indexes", description: "B-Tree indexes, composite indexes, index selectivity.", sequence: 13, difficulty: "Intermediate", required: true, completed: true },
        { title: "Constraints", description: "PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK.", sequence: 14, difficulty: "Intermediate", required: true, completed: true },
        { title: "Transactions", description: "ACID properties, COMMIT, ROLLBACK, SAVEPOINT, isolation levels.", sequence: 15, difficulty: "Intermediate", required: true, completed: true },
        { title: "Query Optimization", description: "EXPLAIN / EXPLAIN ANALYZE, avoiding full table scans.", sequence: 16, difficulty: "Advanced", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // ORACLE SQL / PL-SQL (12 Topics)
    // ----------------------------------------------------
    oracle_plsql: [
        { title: "Oracle SQL Dialect", description: "Dual table, rownum/fetch first, Oracle date arithmetic.", sequence: 1, difficulty: "Beginner", required: true, completed: true },
        { title: "PL/SQL Fundamentals", description: "Block structure: DECLARE, BEGIN, EXCEPTION, END.", sequence: 2, difficulty: "Beginner", required: true, completed: true },
        { title: "Variables & Data Types", description: "Scalar types, %TYPE, %ROWTYPE anchors.", sequence: 3, difficulty: "Beginner", required: true, completed: true },
        { title: "Procedures", description: "CREATE OR REPLACE PROCEDURE, IN/OUT parameters.", sequence: 4, difficulty: "Intermediate", required: true, completed: true },
        { title: "Functions", description: "Deterministic functions, return types, calling in SQL.", sequence: 5, difficulty: "Intermediate", required: true, completed: true },
        { title: "Packages", description: "Package specification vs package body, encapsulation.", sequence: 6, difficulty: "Intermediate", required: true, completed: true },
        { title: "Cursors", description: "Explicit cursors, parameterized cursors, FOR LOOP cursors.", sequence: 7, difficulty: "Intermediate", required: true, completed: true },
        { title: "Exceptions", description: "Predefined exceptions, user-defined exceptions, RAISE_APPLICATION_ERROR.", sequence: 8, difficulty: "Intermediate", required: true, completed: true },
        { title: "Triggers", description: "BEFORE/AFTER triggers, FOR EACH ROW, :NEW and :OLD references.", sequence: 9, difficulty: "Intermediate", required: true, completed: false },
        { title: "Collections", description: "Associative arrays, nested tables, VARRAYs, BULK COLLECT.", sequence: 10, difficulty: "Advanced", required: true, completed: false },
        { title: "Dynamic SQL", description: "EXECUTE IMMEDIATE, binding variables, avoiding SQL injection.", sequence: 11, difficulty: "Advanced", required: true, completed: false },
        { title: "Autonomous Transactions", description: "PRAGMA AUTONOMOUS_TRANSACTION for isolated logging.", sequence: 12, difficulty: "Advanced", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // ORACLE APEX (25 Topics)
    // ----------------------------------------------------
    oracle_apex: [
        { title: "Workspace Administration", description: "Managing workspaces, users, schemas, privileges.", sequence: 1, difficulty: "Beginner", required: true, completed: true },
        { title: "Applications", description: "Creating and configuring APEX applications, theme styles.", sequence: 2, difficulty: "Beginner", required: true, completed: true },
        { title: "Pages & Page Designer", description: "Rendering tree, layout grid, component gallery.", sequence: 3, difficulty: "Beginner", required: true, completed: true },
        { title: "Regions", description: "Static content, cards, forms, reports, region display points.", sequence: 4, difficulty: "Beginner", required: true, completed: true },
        { title: "Page Items", description: "Text fields, selects, date pickers, session state values (:ITEM).", sequence: 5, difficulty: "Beginner", required: true, completed: true },
        { title: "Buttons", description: "Page submission, dynamic action triggers, redirections.", sequence: 6, difficulty: "Beginner", required: true, completed: true },
        { title: "Dynamic Actions", description: "Client-side events (change, click), actions, true/false execution.", sequence: 7, difficulty: "Intermediate", required: true, completed: true },
        { title: "Validations", description: "Item and page level validation rules, error message display.", sequence: 8, difficulty: "Intermediate", required: true, completed: true },
        { title: "Processes", description: "PL/SQL execution points (before header, processing, after submit).", sequence: 9, difficulty: "Intermediate", required: true, completed: true },
        { title: "Computations", description: "Static or SQL value computations during page rendering.", sequence: 10, difficulty: "Intermediate", required: true, completed: true },
        { title: "Forms", description: "Form on a table with automated row processing (ARP).", sequence: 11, difficulty: "Beginner", required: true, completed: true },
        { title: "Interactive Reports", description: "User filtering, sorting, highlight rules, saved reports.", sequence: 12, difficulty: "Intermediate", required: true, completed: true },
        { title: "Interactive Grids", description: "Editable multi-row grids, master-detail relationships.", sequence: 13, difficulty: "Intermediate", required: true, completed: false },
        { title: "Lists of Values (LOV)", description: "Static and dynamic query-driven select lists.", sequence: 14, difficulty: "Beginner", required: true, completed: true },
        { title: "Charts", description: "Oracle JET charts integration, data series configuration.", sequence: 15, difficulty: "Intermediate", required: true, completed: false },
        { title: "Dashboards", description: "Combining cards, metric KPI counters, and interactive summaries.", sequence: 16, difficulty: "Intermediate", required: true, completed: false },
        { title: "Authentication Schemes", description: "APEX Accounts, Custom Database Auth, Social Sign-In.", sequence: 17, difficulty: "Intermediate", required: true, completed: false },
        { title: "Authorization Schemes", description: "Role-based access control (RBAC), conditional rendering.", sequence: 18, difficulty: "Intermediate", required: true, completed: false },
        { title: "REST Data Sources", description: "Connecting APEX to external REST endpoints declaratively.", sequence: 19, difficulty: "Intermediate", required: true, completed: false },
        { title: "ORDS Integration", description: "Oracle REST Data Services endpoints, auto-REST enablement.", sequence: 20, difficulty: "Intermediate", required: true, completed: false },
        { title: "Custom REST APIs in APEX", description: "Publishing GET/POST handlers through ORDS modules.", sequence: 21, difficulty: "Advanced", required: true, completed: false },
        { title: "JSON Handling in APEX", description: "APEX_JSON package for parsing and generating payloads.", sequence: 22, difficulty: "Intermediate", required: true, completed: false },
        { title: "PL/SQL in APEX", description: "Binding session items, apex_application.g_print_success_message.", sequence: 23, difficulty: "Intermediate", required: true, completed: true },
        { title: "JavaScript Basics in APEX", description: "apex.item(), apex.message, apex.server.process calls.", sequence: 24, difficulty: "Intermediate", required: true, completed: false },
        { title: "CSS Customization in APEX", description: "Theme Roller, custom CSS classes, responsive grid overrides.", sequence: 25, difficulty: "Beginner", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // POSTGRESQL (12 Topics)
    // ----------------------------------------------------
    postgresql: [
        { title: "Database Design", description: "Normalization (1NF, 2NF, 3NF), entity-relationship modeling.", sequence: 1, difficulty: "Intermediate", required: true, completed: true },
        { title: "Tables & Data Types", description: "Serial/UUID, text vs varchar, timestamp with time zone.", sequence: 2, difficulty: "Beginner", required: true, completed: true },
        { title: "Relationships", description: "1-to-many, many-to-many junction tables, cascading deletes.", sequence: 3, difficulty: "Intermediate", required: true, completed: true },
        { title: "Constraints", description: "CHECK constraints, unique composite constraints, foreign keys.", sequence: 4, difficulty: "Intermediate", required: true, completed: true },
        { title: "Indexes (B-Tree, GIN, GiST)", description: "Index types, partial indexes, indexing JSONB fields.", sequence: 5, difficulty: "Intermediate", required: true, completed: false },
        { title: "Transactions & Isolation", description: "Read Committed, Repeatable Read, Serializable.", sequence: 6, difficulty: "Intermediate", required: true, completed: false },
        { title: "Views & Materialized Views", description: "Defining views, concurrent refreshing of materialized views.", sequence: 7, difficulty: "Intermediate", required: true, completed: false },
        { title: "Stored Functions & PL/pgSQL", description: "Writing PostgreSQL functions, return types, triggers.", sequence: 8, difficulty: "Intermediate", required: true, completed: false },
        { title: "JSONB Capabilities", description: "JSON operators (->, ->>, @>), indexing JSON documents.", sequence: 9, difficulty: "Advanced", required: true, completed: false },
        { title: "Full Text Search", description: "tsvector, tsquery, GiST/GIN full-text indexing.", sequence: 10, difficulty: "Advanced", required: true, completed: false },
        { title: "pgvector for Embeddings", description: "vector data type, cosine distance (<=>), ivfflat & HNSW indexes.", sequence: 11, difficulty: "Advanced", required: true, completed: false },
        { title: "Query Optimization & EXPLAIN", description: "Query plan analysis, cost estimation, vacuuming.", sequence: 12, difficulty: "Advanced", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // REST APIs (20 Topics)
    // ----------------------------------------------------
    rest_apis: [
        { title: "HTTP Protocol Basics", description: "Statelessness, client-server model, HTTP/1.1 vs HTTP/2.", sequence: 1, difficulty: "Beginner", required: true, completed: true },
        { title: "HTTPS & TLS", description: "SSL/TLS handshake, encryption in transit, certificates.", sequence: 2, difficulty: "Beginner", required: true, completed: true },
        { title: "GET Requests", description: "Retrieving resources, idempotent operations, query strings.", sequence: 3, difficulty: "Beginner", required: true, completed: true },
        { title: "POST Requests", description: "Creating resources, body payloads, Content-Type headers.", sequence: 4, difficulty: "Beginner", required: true, completed: true },
        { title: "PUT Requests", description: "Full resource replacement, idempotency guarantees.", sequence: 5, difficulty: "Beginner", required: true, completed: true },
        { title: "PATCH Requests", description: "Partial resource updates, atomic modifications.", sequence: 6, difficulty: "Beginner", required: true, completed: true },
        { title: "DELETE Requests", description: "Removing resources, proper status responses (204 vs 200).", sequence: 7, difficulty: "Beginner", required: true, completed: true },
        { title: "HTTP Headers", description: "Authorization, Accept, Content-Type, User-Agent, custom headers.", sequence: 8, difficulty: "Beginner", required: true, completed: true },
        { title: "HTTP Status Codes", description: "2xx success, 3xx redirects, 4xx client errors, 5xx server errors.", sequence: 9, difficulty: "Beginner", required: true, completed: true },
        { title: "JSON Standard", description: "Valid syntax, nested objects, arrays, types, schema validation.", sequence: 10, difficulty: "Beginner", required: true, completed: true },
        { title: "API Keys", description: "Passing keys in headers/query params, key rotation.", sequence: 11, difficulty: "Beginner", required: true, completed: true },
        { title: "OAuth2 Flows", description: "Authorization code grant, client credentials grant, refresh tokens.", sequence: 12, difficulty: "Intermediate", required: true, completed: false },
        { title: "JWT (JSON Web Tokens)", description: "Header, payload, signature, token decoding and expiration.", sequence: 13, difficulty: "Intermediate", required: true, completed: false },
        { title: "Pagination Strategies", description: "Limit/offset, page/size, cursor-based pagination.", sequence: 14, difficulty: "Intermediate", required: true, completed: false },
        { title: "Rate Limiting", description: "HTTP 429 Too Many Requests, X-RateLimit headers, token bucket.", sequence: 15, difficulty: "Intermediate", required: true, completed: false },
        { title: "Webhooks", description: "Event-driven push architecture, signature verification.", sequence: 16, difficulty: "Intermediate", required: true, completed: false },
        { title: "Error Handling Standards", description: "RFC 7807 Problem Details, actionable error responses.", sequence: 17, difficulty: "Intermediate", required: true, completed: false },
        { title: "Retries with Exponential Backoff", description: "Handling transient 503/504 errors gracefully.", sequence: 18, difficulty: "Intermediate", required: true, completed: false },
        { title: "API Versioning", description: "URI path versioning (/v1), header versioning, deprecation.", sequence: 19, difficulty: "Intermediate", required: true, completed: false },
        { title: "Postman & Newman", description: "Collections, environment variables, pre-request scripts, tests.", sequence: 20, difficulty: "Beginner", required: true, completed: true }
    ],

    // ----------------------------------------------------
    // GENERATIVE AI (16 Topics)
    // ----------------------------------------------------
    genai: [
        { title: "LLM Fundamentals", description: "Transformer architectures, autoregressive next-token prediction.", sequence: 1, difficulty: "Beginner", required: true, completed: false },
        { title: "Tokens & Tokenization", description: "BPE (Byte Pair Encoding), token counts, cost calculation.", sequence: 2, difficulty: "Beginner", required: true, completed: false },
        { title: "Context Windows", description: "Input token limits, output token limits, context degradation.", sequence: 3, difficulty: "Beginner", required: true, completed: false },
        { title: "Temperature & Sampling", description: "Temperature, top-p, frequency penalty, presence penalty.", sequence: 4, difficulty: "Beginner", required: true, completed: false },
        { title: "Prompt Engineering", description: "System prompts, role-based prompts, clear delimiters, instructions.", sequence: 5, difficulty: "Beginner", required: true, completed: false },
        { title: "Zero Shot Prompting", description: "Direct task instruction without demonstrations.", sequence: 6, difficulty: "Beginner", required: true, completed: false },
        { title: "Few Shot Prompting", description: "Providing structured input-output examples in context.", sequence: 7, difficulty: "Intermediate", required: true, completed: false },
        { title: "Structured Outputs", description: "Constrained decoding to guarantee schema compliance.", sequence: 8, difficulty: "Intermediate", required: true, completed: false },
        { title: "JSON Outputs", description: "Enforcing response_format: { type: 'json_object' }.", sequence: 9, difficulty: "Intermediate", required: true, completed: false },
        { title: "LLM APIs (OpenAI, Anthropic, Gemini)", description: "Client SDKs, chat completions endpoints, streaming responses.", sequence: 10, difficulty: "Intermediate", required: true, completed: false },
        { title: "Function Calling", description: "Defining JSON tool schemas, model selection of function calls.", sequence: 11, difficulty: "Advanced", required: true, completed: false },
        { title: "Local LLMs", description: "Running open models locally (Llama 3, Mistral, Qwen).", sequence: 12, difficulty: "Intermediate", required: true, completed: false },
        { title: "Ollama", description: "Ollama CLI, pull models, running local API endpoints.", sequence: 13, difficulty: "Beginner", required: true, completed: false },
        { title: "Model Limitations", description: "Context loss, non-determinism, mathematical limits.", sequence: 14, difficulty: "Beginner", required: true, completed: false },
        { title: "Hallucinations", description: "Causes of hallucinations, grounding techniques, validation.", sequence: 15, difficulty: "Intermediate", required: true, completed: false },
        { title: "AI Evaluation", description: "LLM-as-a-judge, benchmark datasets, automated rubric scoring.", sequence: 16, difficulty: "Advanced", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // RAG (12 Topics)
    // ----------------------------------------------------
    rag: [
        { title: "Embeddings", description: "Dense vector representations of semantic text, embedding models.", sequence: 1, difficulty: "Intermediate", required: true, completed: false },
        { title: "Chunking Strategies", description: "Fixed size, recursive character, semantic chunking, overlaps.", sequence: 2, difficulty: "Intermediate", required: true, completed: false },
        { title: "Document Loading", description: "Extracting text from PDF, DOCX, Markdown, HTML, CSV.", sequence: 3, difficulty: "Beginner", required: true, completed: false },
        { title: "Vector Databases", description: "Pinecone, Chroma, Qdrant, Supabase pgvector.", sequence: 4, difficulty: "Intermediate", required: true, completed: false },
        { title: "Similarity Search", description: "Cosine similarity, dot product, Euclidean distance.", sequence: 5, difficulty: "Intermediate", required: true, completed: false },
        { title: "Metadata Filtering", description: "Combining vector similarity with hard boolean filters.", sequence: 6, difficulty: "Intermediate", required: true, completed: false },
        { title: "Hybrid Search", description: "Combining sparse BM25 keyword search with dense vector search.", sequence: 7, difficulty: "Advanced", required: true, completed: false },
        { title: "Reranking", description: "Cross-encoder models (Cohere Rerank) to rescore top K results.", sequence: 8, difficulty: "Advanced", required: true, completed: false },
        { title: "Retrieval Augmentation", description: "Injecting relevant context chunks into system prompt.", sequence: 9, difficulty: "Intermediate", required: true, completed: false },
        { title: "Grounding", description: "Instructing the model to answer strictly based on provided context.", sequence: 10, difficulty: "Intermediate", required: true, completed: false },
        { title: "Citations & Traceability", description: "Returning source document metadata and line numbers with answers.", sequence: 11, difficulty: "Intermediate", required: true, completed: false },
        { title: "RAG Evaluation (RAGAS)", description: "Measuring Faithfulness, Answer Relevance, Context Recall.", sequence: 12, difficulty: "Advanced", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // AI AGENTS (12 Topics)
    // ----------------------------------------------------
    ai_agents: [
        { title: "Agent Fundamentals", description: "ReAct pattern (Reason + Act), perception-decision-action loops.", sequence: 1, difficulty: "Intermediate", required: true, completed: false },
        { title: "Tools Definition", description: "Wrapping Python functions and APIs into callable agent tools.", sequence: 2, difficulty: "Intermediate", required: true, completed: false },
        { title: "Tool Calling Execution", description: "Parsing model tool arguments, executing code, returning observation.", sequence: 3, difficulty: "Intermediate", required: true, completed: false },
        { title: "Planning & Decomposition", description: "Breaking complex objectives into subtasks, step-by-step plans.", sequence: 4, difficulty: "Advanced", required: true, completed: false },
        { title: "Agent State Management", description: "Graph state, tracking variables across multi-step invocations.", sequence: 5, difficulty: "Advanced", required: true, completed: false },
        { title: "Agent Memory", description: "Short-term conversation buffer, long-term vector memory recall.", sequence: 6, difficulty: "Advanced", required: true, completed: false },
        { title: "Agent Workflows", description: "Router workflows, orchestrator-worker workflows, evaluators.", sequence: 7, difficulty: "Advanced", required: true, completed: false },
        { title: "Human-in-the-Loop (HITL)", description: "Pause for human approval on high-risk actions (delete, transfer).", sequence: 8, difficulty: "Advanced", required: true, completed: false },
        { title: "Guardrails & Safety", description: "Input sanitization, output constraints, preventing prompt injection.", sequence: 9, difficulty: "Advanced", required: true, completed: false },
        { title: "Agent Evaluation", description: "Success rate, tool call precision, trajectory evaluation.", sequence: 10, difficulty: "Advanced", required: true, completed: false },
        { title: "Multi-Agent Concepts", description: "Supervisor agents, specialized subagents, message passing.", sequence: 11, difficulty: "Advanced", required: true, completed: false },
        { title: "Agent Observability", description: "LangSmith, OpenInference, tracing token usage and latencies.", sequence: 12, difficulty: "Advanced", required: true, completed: false }
    ],

    // ----------------------------------------------------
    // MCP (9 Topics)
    // ----------------------------------------------------
    mcp: [
        { title: "MCP Fundamentals", description: "Model Context Protocol architecture, JSON-RPC 2.0 transport.", sequence: 1, difficulty: "Beginner", required: true, completed: false },
        { title: "MCP Client", description: "Host environments (Claude Desktop, IDEs) initiating connections.", sequence: 2, difficulty: "Intermediate", required: true, completed: false },
        { title: "MCP Server", description: "Building an MCP server in Python or TypeScript exposing resources.", sequence: 3, difficulty: "Intermediate", required: true, completed: false },
        { title: "Tools in MCP", description: "Defining executable functions with JSON Schema parameter definitions.", sequence: 4, difficulty: "Intermediate", required: true, completed: false },
        { title: "Resources in MCP", description: "Exposing read-only data (file contents, database schemas, API docs).", sequence: 5, difficulty: "Intermediate", required: true, completed: false },
        { title: "Prompts in MCP", description: "Reusable parameterized prompt templates declared by servers.", sequence: 6, difficulty: "Intermediate", required: true, completed: false },
        { title: "Authentication in MCP", description: "Securing MCP connections, local stdio vs remote SSE.", sequence: 7, difficulty: "Advanced", required: true, completed: false },
        { title: "Security Considerations", description: "Permissions model, sandboxing, preventing malicious tool execution.", sequence: 8, difficulty: "Advanced", required: true, completed: false },
        { title: "Agent + MCP Integration", description: "Connecting LangChain/LangGraph or custom agents to MCP servers.", sequence: 9, difficulty: "Advanced", required: true, completed: false }
    ]
};

const SEED_PROJECTS = [
    {
        id: "proj_python_toolkit",
        name: "Python Automation Toolkit",
        description: "Modular CLI framework for batch document processing, automated CSV/JSON schema validation, and REST API integration.",
        status: "In Development",
        priority: "P0 - Critical",
        progress: 55,
        github_url: "https://github.com/irshadkohli/python-automation-toolkit",
        live_url: "",
        tasks: [
            { title: "Project scaffolding, virtualenv, and poetry config", sequence: 1, completed: true },
            { title: "CLI argument parser with rich terminal output", sequence: 2, completed: true },
            { title: "JSON & CSV batch transformer modules", sequence: 3, completed: true },
            { title: "Async HTTP client with exponential backoff", sequence: 4, completed: false },
            { title: "Unit test suite with pytest & coverage >= 80%", sequence: 5, completed: false }
        ]
    },
    {
        id: "proj_rpa_tower",
        name: "RPA Control Tower",
        description: "Oracle APEX monitoring dashboard integrated with UiPath Orchestrator REST APIs for live bot health telemetry.",
        status: "In Development",
        priority: "P1 - High",
        progress: 40,
        github_url: "https://github.com/irshadkohli/rpa-control-tower",
        live_url: "",
        tasks: [
            { title: "Database schema design for bot audit logs", sequence: 1, completed: true },
            { title: "Oracle APEX interactive grid & dashboard pages", sequence: 2, completed: true },
            { title: "UiPath Orchestrator OAuth2 authentication flow", sequence: 3, completed: false },
            { title: "Automated queue monitoring & email/Slack alert triggers", sequence: 4, completed: false }
        ]
    },
    {
        id: "proj_rag_assistant",
        name: "Enterprise Knowledge Assistant",
        description: "Production RAG microservice with FastAPI, PostgreSQL pgvector embeddings, and citation grounding.",
        status: "In Development",
        priority: "P0 - Critical",
        progress: 30,
        github_url: "https://github.com/irshadkohli/enterprise-knowledge-assistant",
        live_url: "",
        tasks: [
            { title: "FastAPI boilerplate with Pydantic v2 schemas", sequence: 1, completed: true },
            { title: "PostgreSQL pgvector schema & cosine distance index", sequence: 2, completed: false },
            { title: "Chunking and embedding ingestion pipeline", sequence: 3, completed: false },
            { title: "Grounded prompt assembly with document citations", sequence: 4, completed: false },
            { title: "Docker containerization & docker-compose deployment", sequence: 5, completed: false }
        ]
    },
    {
        id: "proj_ai_agent",
        name: "AI Automation Agent",
        description: "Autonomous reasoning agent that investigates failed RPA production jobs, queries database logs, and generates triage reports.",
        status: "Planning",
        priority: "P0 - Critical",
        progress: 20,
        github_url: "https://github.com/irshadkohli/ai-automation-agent",
        live_url: "",
        tasks: [
            { title: "Architecture design & tool calling specification", sequence: 1, completed: true },
            { title: "Database log query tool implementation", sequence: 2, completed: false },
            { title: "UiPath bot restart API execution tool", sequence: 3, completed: false },
            { title: "Human-in-the-loop review interface before executing restarts", sequence: 4, completed: false },
            { title: "Evaluation benchmark on 50 historic production incident tickets", sequence: 5, completed: false }
        ]
    },
    {
        id: "proj_capstone",
        name: "Intelligent Automation Platform (Capstone)",
        description: "🌟 FLAGSHIP SYNTHESIS: Full-stack convergence of deterministic enterprise RPA execution with multi-agent cognitive reasoning.",
        status: "Planning",
        priority: "P0 - Critical",
        progress: 15,
        github_url: "https://github.com/irshadkohli/intelligent-automation-platform",
        live_url: "",
        tasks: [
            { title: "System architecture blueprint & component contracts", sequence: 1, completed: true },
            { title: "FastAPI orchestrator service & PostgreSQL backend", sequence: 2, completed: false },
            { title: "Multi-agent coordination workflow with state machine", sequence: 3, completed: false },
            { title: "Enterprise bot connector gateway", sequence: 4, completed: false },
            { title: "Live interactive telemetry web portal & documentation", sequence: 5, completed: false }
        ]
    }
];

const SEED_MILESTONES = [
    { title: "Master Python OOP & Functional Patterns", description: "Complete comprehensive OOP module, custom exceptions, and iterators.", completed: false },
    { title: "Build First FastAPI Async Microservice", description: "Deploy validated REST API with Pydantic models and Swagger docs.", completed: false },
    { title: "Launch PostgreSQL Vector Knowledge Base", description: "Implement pgvector index and RAG document search.", completed: false },
    { title: "Deploy AI Bot Triage Agent", description: "Autonomous exception triaging agent tested on production logs.", completed: false },
    { title: "Transition to AI Automation Engineer", description: "Synthesize enterprise RPA + AI agent architecture in capstone.", completed: false }
];

// Universal export
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
