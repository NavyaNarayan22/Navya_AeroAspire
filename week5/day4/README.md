# 🧪 Final Testing, Logging, Cleanup & Retrospective

## Overview

After implementing your full stack with Docker Compose and linking all services, the last phase involves thorough local testing, monitoring the system with logs, cleaning up unused Docker resources, and reflecting on the deployment process to document lessons learned and improvements.

## Full Stack Testing

- Start the stack with `docker-compose up --build` (or `-d` for detached mode).  
- Verify:
  - All containers (`flask-backend`, `react-frontend`, `mysql-db` or equivalent) stay healthy and show as "Started".
  - The UI loads and operates as expected in the browser.
  - All backend endpoints are reachable via Postman, curl, or direct from the frontend.
  - Data pipelines (API to DB) are working as intended—add, query, edit, and delete operations work end to end.

## Viewing Logs

- Use `docker-compose logs [SERVICE]` or `docker logs <container_name>` to view output from specific services.  
  - Example: `docker-compose logs -f flask-backend`
- Aggregate logs with `docker-compose logs` (no service specified) for a timeline of all containers.
- Monitor for:
  - Application errors, failed API calls, DB connection issues.
  - Startup and shutdown messages.
  - Any stack traces or warning messages[web:175][web:176][web:181][web:189].

## Cleaning Up

- Remove unused containers, images, and volumes to free disk space and avoid conflicts:
  - `docker-compose down -v` — stop stack and remove volumes.
  - `docker container prune` — remove stopped containers.
  - `docker image prune -a` — remove unused images.
  - `docker volume prune` — remove unused volumes.
  - `docker system prune` — full cleanup of all unused resources.  
- Optionally, script cleanup process for repeatability[web:179][web:184][web:182][web:192].

## Retrospective / Deployment Reflection

- Note what worked:
  - Docker Compose managed dependencies and startup order.
  - Containers were isolated but easily networked internally.
  - Using `.env` and bind mounts/volumes made local dev reproducible.
- Challenges/Improvements:
  - Write down any tricky networking, build context, caching, or port issues you faced.
  - Capture Dockerfile or compose improvements for image size, health checks, or multi-stage builds.
  - Document any manual steps that should be automated for CI/CD.
- Summarize main takeaways for future deployments or for onboarding new team members.


