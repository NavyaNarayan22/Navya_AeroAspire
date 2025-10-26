# Flask Task API (v1) with Swagger Docs

A modern, versioned REST API for task management using Flask. Ready for React or Postman clients, documented by OpenAPI and testable via Swagger UI.

---

## Features

- **API Versioning:** All endpoints are under `/api/v1`
- **CRUD Endpoints:** Full create/read/update/delete tasks with filter options
- **Error Handling:** Returns JSON for 400/404 errors
- **Input Validation:** Non-empty strings, valid JSON only
- **CORS Support:** Works with browser/React frontends
- **Swagger/OpenAPI Docs:** Test and explore endpoints interactively

---

## Project Structure

project_root/
├── static/
│ └── openapi.yaml # OpenAPI 3.x spec for docs
├── v1/
│ ├── routes.py # All v1 endpoints
├── app.py # Setup, blueprint register, Swagger UI
├── requirements.txt


---

## Local Setup

**1. Install dependencies:**

pip install -r requirements.txt



**2. Start Flask server:**

python app.py



**3. Open the browser:**  
Swagger UI: [http://localhost:5000/apidocs](http://localhost:5000/apidocs)

---

## Example Endpoints

| Method | Endpoint                | Description                    |
|--------|-------------------------|--------------------------------|
| GET    | `/api/v1/tasks`         | List all tasks, filter with `?completed=true` |
| POST   | `/api/v1/tasks`         | Create new task (JSON)         |
| PUT    | `/api/v1/tasks/<id>`    | Update a task by id            |
| DELETE | `/api/v1/tasks/<id>`    | Delete a task by id            |

---

## Test with React, Postman, or Browser

**React Example:**
fetch('http://localhost:5000/api/v1/tasks')
.then(res => res.json())
.then(console.log);

fetch('http://localhost:5000/api/v1/tasks', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: 'Do homework', done: false })
})
.then(res => res.json())
.then(console.log);



**Postman/Swagger:**  
- Use the `/apidocs` UI or Postman for all CRUD and filter queries.

---

## OpenAPI Spec Example (`static/openapi.yaml`)

openapi: 3.0.3
info:
title: Flask Task API
version: "1.0.0"
description: Versioned API demo with full CRUD and error handling.
servers:

url: http://localhost:5000/api/v1
paths:
/tasks:
get:
summary: List tasks
parameters:
- name: completed
in: query
description: Only show completed or not
schema:
type: boolean
responses:
'200':
description: Task list
content:
application/json:
schema:
type: array
items:
$ref: '#/components/schemas/Task'
post:
summary: Add task
requestBody:
required: true
content:
application/json:
schema:
$ref: '#/components/schemas/TaskInput'
responses:
'201':
description: Created
content:
application/json:
schema:
$ref: '#/components/schemas/Task'
/tasks/{id}:
put:
summary: Update task
parameters:
- name: id
in: path
required: true
schema:
type: integer
requestBody:
required: true
content:
application/json:
schema:
$ref: '#/components/schemas/TaskInput'
responses:
'200':
description: Updated task
content:
application/json:
schema:
$ref: '#/components/schemas/Task'
delete:
summary: Delete task
parameters:
- name: id
in: path
required: true
schema:
type: integer
responses:
'200':
description: Deleted message
content:
application/json:
schema:
type: object
properties:
message:
type: string
components:
schemas:
Task:
type: object
properties:
id:
type: integer
title:
type: string
completed:
type: boolean
TaskInput:
type: object
properties:
title:
type: string
completed:
type: boolean
required:
- title
