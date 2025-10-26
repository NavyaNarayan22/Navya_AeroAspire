Database Integration in Flask: ORM vs Direct SQL
This project demonstrates how to connect a Flask web application to an SQL database (SQLite or MySQL) and perform CRUD (Create, Read, Update, Delete) operations using two approaches: direct/raw SQL and ORM (SQLAlchemy).

Overview
Database integration in Flask means configuring your application to communicate with a database, enabling persistent storage and retrieval of data. The two most common approaches are:

Direct SQL (Raw Queries): Use SQL statements directly for all database interactions. This approach is closer to the database "metal" and often preferred for simple or performance-critical tasks.

ORM (Object Relational Mapper): Use an abstraction layer (like SQLAlchemy) to interact with the database using Python classes and methods instead of raw SQL. ORM streamlines database code, reduces boilerplate, and makes migrations and portability easier.​

Connecting Flask to SQLite or MySQL
With SQLite, integration is straightforward, as Python’s standard library includes the sqlite3 module. Flask applications can connect to .db files easily with minimal configuration. Typically, a database file is either created on startup or initialized using a management command.​

With MySQL or other databases, you provide connection parameters (host, user, password, database) to a Python connector (such as pymysql). With SQLAlchemy, you configure the database URI for seamless switching between SQLite, MySQL, or PostgreSQL.​

CRUD Operations
Create: Insert new records into the database.

Read: Retrieve existing records or lists from the database.

Update: Modify attributes of existing records.

Delete: Remove records from the database.

Each operation is mapped to HTTP verbs (POST, GET, PUT, DELETE) and exposed through Flask endpoint routes, forming a typical REST API.

ORM (SQLAlchemy) vs Direct SQL (Raw Queries)
Aspect	ORM (SQLAlchemy)	Direct SQL (Raw Queries)
Abstraction	High (Python classes, automatic SQL generation)	Low (manual SQL statements)
Ease of Use	Easier for complex apps, reduces boilerplate	Simpler for small scripts, more control
Maintainability	Better for large, evolving projects	Can get messy with complex queries
Portability	Switch between databases with minor changes	Significant rewrite for new databases
Performance	Slight overhead due to abstraction	Often faster for simple operations
Security	Handles escaping and SQL injection prevention	Requires manual handling, more error-prone
Control	High-level, but possible to drop down to SQL	Full manual control over queries
When to Use Which Approach
ORM is ideal for rapid development, apps requiring maintenance, or those targeting portability between different database systems.

Raw SQL excels in simple applications, when ultimate control or raw performance is required, or when leveraging complex native SQL features.
