# Flask Database Integration: ORM vs Direct SQL

## Overview

This project demonstrates Flask integration with SQL databases using two strategies: direct SQL (raw queries) and ORM (SQLAlchemy). It supports SQLite (file-based) and MySQL (server-based), and covers CRUD (Create, Read, Update, Delete) operations.

## Database Approaches

### Direct SQL (Raw Queries)

- Use plain SQL statements in your Flask code for all database interactions.
- Gives maximum control and can yield better performance for simple queries.
- Suitable for small scripts, legacy systems, or when detailed query optimization is needed.
- The developer is responsible for managing transactions, security, and escaping values.

### ORM (SQLAlchemy)

- Enables database interactions with Python classes and methods.
- Abstracts away raw SQL and simplifies handling relationships and schema migrations.
- Makes your app more portable, maintainable, and secure by preventing SQL injection.
- Especially recommended for complex projects and rapid prototyping.

## Supported Databases

- **SQLite:** Embedded, file-based, suitable for development and smaller projects.
- **MySQL:** Popular server database, used for scalable, production workloads.

## CRUD Operations

The application implements full CRUD functionality:

- **Create:** Insert new records
- **Read:** Query individual records or all records
- **Update:** Edit existing records
- **Delete:** Remove records

All operations are exposed as RESTful API endpoints in Flask.

## ORM vs Direct SQL: Comparison

| Aspect          | ORM (SQLAlchemy)                        | Direct SQL (Raw Queries)      |
|-----------------|-----------------------------------------|------------------------------|
| Abstraction     | Python classes (models)                 | Manual SQL statements        |
| Portability     | High (easy DB swaps)                    | Low (DB-specific SQL needed) |
| Maintainability | Good for growing or complex codebases   | Harder for large projects    |
| Control         | High-level, but can use raw SQL if needed | Full control of queries      |
| Security        | Auto-escapes, reduces SQL injection risk | Must ensure proper handling  |
| Performance     | Slight abstraction overhead             | Efficient for simple cases   |

## When to Use

- **ORM:** For most applications, when clear structure, maintainability, and cross-database support are priorities.
- **Direct SQL:** For optimized performance, simple scripts, or when complex, database-specific features are required.

## References

- Flask documentation: [Database Integration][web:22][web:26]
- Flask-SQLAlchemy docs: [Flask-SQLAlchemy][web:28]
- ORM vs raw SQL in Flask: [Read more][web:12]

