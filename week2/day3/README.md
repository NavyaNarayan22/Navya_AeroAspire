# React Task Manager

A modern Task Manager app built with React, Vite, and Material UI (MUI). This project demonstrates best practices in React: component structure, props, state management with hooks, controlled forms, validation, theming, and more.

***

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Core Concepts](#core-concepts)
  - [Theming with MUI](#theming-with-mui)
  - [Components & Props](#components--props)
  - [State & Hooks](#state--hooks)
  - [Controlled Forms & Validation](#controlled-forms--validation)
- [Sample Code](#sample-code)
- [How to Run](#how-to-run)
- [Extending the App](#extending-the-app)

***

## Features

- **Vite + React**: Fast development and build tooling.
- **Material UI**: Professional, customizable UI components and theming.
- **Component-based**: Reusable components (e.g., TaskCard, Header).
- **Props**: Pass data to components for dynamic rendering.
- **State & Hooks**: Manage tasks and form data with `useState` and `useEffect`.
- **Controlled Forms**: All form fields are controlled by React state.
- **Validation**: Required fields, minimum lengths, and date validation.
- **Task Management**: Add, display, and (optionally) remove tasks.
- **Responsive Design**: Clean, modern look on all devices.

### 1. Scaffold the App with Vite

```sh
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

### 2. Install Material UI

```sh
npm install @mui/material @emotion/react @emotion/styled
```

***

## Folder Structure

```
my-app/
├── public/
├── src/
│   ├── components/
│   │   └── TaskCard.js
│   ├── App.js
│   ├── main.jsx
│   └── ...
├── package.json
└── ...
```

***

## Core Concepts

### Theming with MUI

- Use MUI’s `ThemeProvider` to set global colors, fonts, and styles.
- Easily switch between light/dark mode and customize the palette.

### Components & Props

- **TaskCard**: Displays a single task’s title, description, due date, and creation time.
- **Props**: Task data is passed as props to each `TaskCard` for flexible rendering.

### State & Hooks

- **useState**: Manages the list of tasks and form input values.
- **useEffect**: Can be used to fetch dummy data or sync with localStorage.

### Controlled Forms & Validation

- All form fields are controlled by React state.
- Validation checks for required fields, minimum lengths, and correct date format.
- Errors are displayed using MUI’s `helperText` and `error` props.

***

## Sample Code

### App.js

```jsx
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", dueDate: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.title || form.title.trim().length < 3)
      errs.title = "Title is required (min 3 chars)";
    if (form.description && form.description.length < 5)
      errs.description = "Description must be at least 5 chars";
    if (!form.dueDate)
      errs.dueDate = "Due date is required";
    return errs;
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setTasks([...tasks, { ...form, created: new Date().toLocaleString() }]);
    setForm({ title: "", description: "", dueDate: "" });
    setErrors({});
  };

  return (
    <div>
      <Typography variant="h3" align="center" sx={{ mb: 2, mt: 2 }}>
        TASK MANAGER
      </Typography>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={3}
          value={form.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
          error={!!errors.dueDate}
          helperText={errors.dueDate}
          required
          margin="normal"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Save Task</Button>
        <Button type="reset" variant="outlined" onClick={() => { setForm({ title: "", description: "", dueDate: "" }); setErrors({}); }} sx={{ mt: 2, ml: 2 }}>Reset</Button>
      </form>
      <div style={{ marginTop: 40 }}>
        {tasks.map((task, i) => <TaskCard key={i} {...task} />)}
      </div>
    </div>
  );
}

export default App;
```

### TaskCard.js

```jsx
import { Card, CardContent, Typography } from "@mui/material";

function TaskCard({ title, description, dueDate, created }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="caption">Due: {dueDate}</Typography>
        <Typography variant="caption" sx={{ display: "block", mt: 1 }}>Created: {created}</Typography>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
```

***

## How to Run

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

***

<img width="1920" height="1080" alt="addtask" src="https://github.com/user-attachments/assets/61e3a37b-a581-4c01-8ba0-fdb4d568fd51" />

## Extending the App

- Add routing (Home, Add Task, About) and a navigation bar.
- Save/load tasks from localStorage or a backend.
- Polish UI with icons, theming, and responsive design.
- Add task editing, deletion, and filtering.

***
