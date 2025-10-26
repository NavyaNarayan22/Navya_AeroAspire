# Flask Database Migrations, Setup Scripts, and Seeding

## Overview

This section outlines how to manage database schemas and initial data in a Flask app. Workflow includes applying migrations when models change, setting up the database for a new environment, and seeding with required or sample data for testing and development.

## Database Migrations

- **Purpose:** Track and apply changes to the database schema over time while preserving data.
- **Tooling:** The standard approach uses **Flask-Migrate**, which integrates Alembic with Flask and SQLAlchemy.
- **Workflow:**
  - `flask db init` – Initialize migrations folder (run once per project)
  - `flask db migrate -m "description"` – Auto-generates migration script when models change
  - `flask db upgrade` – Applies migrations to the database
  - `flask db downgrade` – Rolls back the last migration if needed
- **Benefits:** Enables collaborative development, safe DB upgrades, and rollbacks without manual SQL editing.
- Migrations should be version controlled alongside the application code for reliable deployments[web:67][web:68][web:69][web:72].

## Database Setup Scripts

- **Purpose:** Set up a clean database schema for development, testing, or production.
- **Method:** Use Python scripts or CLI commands (via Flask’s CLI or `flask shell`) to create all database tables, usually by importing models and calling a creation method.
- In complex cases, a dedicated script (`setup_db.py`) or Flask CLI command provides a single entry point to (re)set the schema.

## Seeding the Database

- **Purpose:** Insert initial or sample data — e.g., admin users, fixed categories, or demo entities.
- **How:** 
  - Write a seed script (`seed.py`) that connects to the database and adds records.
  - For more structure, use an extension like Flask-Seeder.
- **Best Practices:** 
  - Seeders should be idempotent (safe to run multiple times).
  - Keep seed data minimal and relevant to avoid clutter.

## Best Practices

- Always review auto-generated migration scripts before applying in production.
- Back up the database before applying new migrations.
- Keep your development, test, and production environments consistent by running migrations instead of hand-editing DBs.
- Document your workflow for team contributors.


