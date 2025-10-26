# Docker Compose, .env, Networking

## Overview

This section describes how to orchestrate a full-stack application using Docker Compose, including the Flask backend, React frontend, and MySQL or SQLite database. It covers using a `.env` file for configuration and secrets, connecting services over a shared network, and successfully testing communication between containers.

## Docker Compose for Multi-Container Apps

- **Purpose:** Manage multiple interdependent services as a single stack.
- **docker-compose.yml:**  
  - Defines each service (backend, frontend, db).
  - Specifies build contexts or images, network settings, ports, and environment variables.
  - Manages startup order (e.g., `depends_on` to ensure MySQL initializes before Flask runs DB migrations).
- **Networking:**  
  - All services are on a shared default bridge network by service name (e.g., `flask-backend`, `mysql-db`).
  - Services communicate using internal DNS (e.g., backend at `http://flask-backend:5000`, DB at `mysql-db:3306` from within containers).
- **Volumes:**  
  - Use to persist database data beyond container lifecycle[web:154][web:156][web:157].

## .env for Secrets and Config

- **.env file:**  
  - Stores environment-specific variables (API secrets, DB credentials, ports).
  - Kept out of source control for security; reference with `env_file:` or `${VAR_NAME}` syntax in `docker-compose.yml`.
  - Example:  
    ```
    MYSQL_ROOT_PASSWORD=supersecret
    FLASK_SECRET_KEY=anothersecret
    ```
- **Usage:**  
  - Compose auto-detects `.env` in the root.
  - Use `env_file:` in a service, or `${VAR_NAME}` placeholders anywhere in your `docker-compose.yml`.
  - Never expose secrets in public repositories—use `.gitignore` for `.env`[web:163][web:165][web:160][web:169].

## Testing and Service Communication

- **Build and run:**  
  - Use `docker-compose up --build` to build images and launch all containers together.
- **Container DNS:**  
  - Each service can reach others using their service name—no IP hardcoding needed.
  - Validate with logs, shell into the containers (`docker-compose exec`) and test networking (e.g., `curl flask-backend:5000` from another container).
- **Frontend to backend:**  
  - Configure React app’s API base URL to Flask’s container name (`fetch("/api/endpoint")` or `fetch("http://flask-backend:5000/api/endpoint")`).

## Best Practices

- Use compose for reproducible, isolated development, and ease of scaling or moving to production.
- Manage secrets/configuration in `.env`—never hardcode in Dockerfiles or sources.
- Monitor container logs for connectivity or startup errors.
- Use `docker-compose down -v` to stop and clean up containers, networks, and persisted volumes when resetting environment.

