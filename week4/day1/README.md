# Flask Task API with MySQL

A simple task manager REST API using Flask (Python) and MySQL, including schema design and SQL table creation.

---

## Database Schema: `task`

| Field       | Type        | Description                    |
|-------------|------------|--------------------------------|
| id          | INT         | Primary key, auto-increment    |
| title       | VARCHAR(255)| Task title (required/non-empty)|
| description | TEXT        | Detailed description           |
| status      | VARCHAR(32) | Status: "pending", "in progress", "completed" |
| due_date    | DATE        | Optional due date              |

### SQL Table Creation

CREATE TABLE task (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
status VARCHAR(32) DEFAULT 'pending',
due_date DATE
);


---

## Requirements

- MySQL running (Workbench or CLI)
- Python 3.x
- Flask, Flask-CORS, PyMySQL (or preferred MySQL connector)

## Project Structure

project_root/
├── app.py # Main Flask app
├── requirements.txt # Dependencies
├── config.py # DB config info



---

## Usage

1. **Create your MySQL database and table**
    ```
    CREATE DATABASE mydb;
    USE mydb;
    -- Paste table creation SQL above --
    ```

2. **Add your connection info in `config.py`**
    ```
    DB_HOST = "localhost"
    DB_USER = "root"
    DB_PASSWORD = "yourpassword"
    DB_NAME = "mydb"
    ```

3. **Install Python dependencies**
    ```
    pip install -r requirements.txt
    ```

4. **Run Flask server**
    ```
    python app.py
    ```

5. **Test endpoints with browser, Postman, React or Swagger (if included)**

---

## Example Endpoints

- GET `/api/v1/tasks`             – List all tasks
- POST `/api/v1/tasks`            – Add new task (JSON: title, description...)
- PUT `/api/v1/tasks/<id>`        – Update a task
- DELETE `/api/v1/tasks/<id>`     – Delete a task
