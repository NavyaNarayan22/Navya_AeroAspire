# Dockerizing Flask Backend & React Frontend

## Overview

This section describes how to containerize a Flask backend and a React frontend using Docker. You will learn the purpose of Dockerfiles for each, best practices for Docker images, and the core workflow for building, running, and testing your full-stack application locally.

## Dockerfile for Flask Backend

- **Purpose:** Encapsulate the entire backend (Python + Flask + dependencies) into a portable container image.
- **What’s included:**  
  - A base Python image  
  - Copy of your code and `requirements.txt`  
  - Install Flask and other PyPI dependencies  
  - Set up the working directory and expose the appropriate port (default: 5000)  
  - Specify the command to launch the app (e.g., `flask run` or `python app.py`)
- **Best Practices:**
  - Use a slim Python image for smaller size.
  - Pin dependency versions for reproducibility.
  - Add a `.dockerignore` to avoid copying unnecessary files (e.g., `.git`, `__pycache__`) into the container[web:134][web:135][web:141][web:144].

## Dockerfile for React Frontend

- **Purpose:** Build and serve your React app as static files; optionally, use a web server (like Nginx) for production builds.
- **What’s included:**  
  - A Node.js image (for building)  
  - Copy of your code and `package.json`/`package-lock.json`  
  - Install npm dependencies  
  - Build the production bundle (typically `npm run build`)  
  - Serve static files (with Nginx for production) on port 80 or 3000
- **Best Practices:**
  - Separate build and production stages for efficiency (multi-stage Dockerfiles).
  - Serve only optimized, static files in production[web:139][web:142][web:148][web:145].

## Build Images and Run Locally

- Use `docker build` to create images for backend and frontend separately.
- Tag each image meaningfully (`flask-backend`, `react-frontend`, etc.).
- Start containers with `docker run`, mapping container ports to local machine ports for API and UI access.
- Optionally, use `docker-compose.yml` to orchestrate both services and their networks for streamlined local development and shared environment[web:140][web:143].

## Test Endpoints and UI

- Once containers are running, verify:
  - Flask API endpoints are reachable (test with Postman, curl, or browser).
  - React frontend loads and successfully talks to the backend API (check in browser, developer console).
- Troubleshoot networking:
  - Ensure ports in Dockerfile and `docker run`/`docker-compose` match.
  - Use browser/dev tools to debug connection issues between frontend and backend.

## Best Practices

- Keep Dockerfiles minimal and clean for faster builds.
- Use environment variables or Docker secrets to manage sensitive configuration.
- Rebuild images after code or dependency changes (`docker build --no-cache ...`).
- Automate tests within containers as part of CI, if possible.


