# Flask Task API (v1) with OpenAPI/Swagger

A beginner-friendly, versioned Flask REST API for managing simple tasks. Supports CRUD operations, optional filtering, and interactive documentation/testing via Swagger UI.

## Features

- **API Versioning**: All endpoints use the `/api/v1` prefix.
- **CRUD Endpoints**: Create, read, update, delete tasks.
- **Task Filtering**: Optional filter on GET for `completed=true|false`.
- **Interactive Docs**: Swagger UI at `/apidocs`.
- **OpenAPI Spec**: Easily customizable `openapi.yaml` for your endpoints.

## Project Structure

project_root/
├── static/
│ └── openapi.yaml # OpenAPI spec
├── v1/
│ ├── routes.py # v1 API routes
├── app.py # App entrypoint
├── requirements.txt # Dependencies

## Quick Start

### 1. Install Dependencies

pip install -r requirements.txt

### 2. Start the Flask App

python app.py

### 3. Open Swagger UI for API Docs

Go to [http://localhost:5000/apidocs](http://localhost:5000/apidocs) in your web browser.

## API Endpoints

| Method | Endpoint                      | Description                                     |
| ------ | ----------------------------- | ----------------------------------------------- |
| GET    | `/api/v1/tasks`               | List all tasks; filter with `?completed=true`   |
| POST   | `/api/v1/tasks`               | Create a new task (send JSON)                   |
| PUT    | `/api/v1/tasks/<id>`          | Update a task by id                             |
| DELETE | `/api/v1/tasks/<id>`          | Delete a task by id                             |

## Task Filtering Example

- Get only completed tasks:
GET /api/v1/tasks?completed=true

## Example Usage (Curl)

Create a new task:
curl -X POST http://127.0.0.1:5000/api/v1/tasks
-H "Content-Type: application/json"
-d '{"title": "Finish assignment", "done": false}'

Update a task (id=1):
curl -X PUT http://127.0.0.1:5000/api/v1/tasks/1
-H "Content-Type: application/json"
-d '{"title": "Finish assignment", "completed": true}'

Delete a task (id=2):
curl -X DELETE http://127.0.0.1:5000/api/v1/tasks/2

## Interactive Testing

- Use Swagger UI at `/apidocs` to try endpoints with live requests and responses.
- Or use tools like Postman for advanced testing.

## Customization

- Edit `static/openapi.yaml` to update your API's documentation.
- Add more task properties or endpoints as you grow the project.

## License

MIT

---

*Project created for learning Flask REST APIs, OpenAPI/Swagger docs, and CRUD design pattern.*
