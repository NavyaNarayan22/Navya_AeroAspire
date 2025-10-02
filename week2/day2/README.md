TASKCARD

## Overview

This project demonstrates how to use React components and props to render a dynamic list of task cards. The main focus is on creating a reusable `TaskCard` component and passing a list of dummy tasks via props to display them elegantly.

***

## Folder Structure

```
src/
├── components/
│   └── TaskCard.js
├── App.js
├── main.jsx
└── ...
```

***

## Components

- **TaskCard**: Displays the title and description for a single task. Props (`title`, `description`) are used for flexibility.
- **App**: Renders a list of tasks and passes their data as props to `TaskCard`.

***

## Example Dummy Data

```jsx
// Inside App.js
const tasks = [
  { title: "Learn React", description: "Go through components & props" },
  { title: "Practice JSX", description: "Build small UI components" },
  { title: "Build Task App", description: "Use state and hooks later" }
];
```

***

## TaskCard Component Example

```jsx
// src/components/TaskCard.js
function TaskCard({ title, description }) {
  return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;
```

***

## Rendering the Task List

```jsx
// App.js
import TaskCard from './components/TaskCard';

function App() {
  const tasks = [
    { title: "Learn React", description: "Go through components & props" },
    { title: "Practice JSX", description: "Build small UI components" },
    { title: "Build Task App", description: "Use state and hooks later" }
  ];

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task, idx) => (
        <TaskCard
          key={idx}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}

export default App;
```

***

## How to Run

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

<img width="1920" height="1080" alt="Screenshot (206)" src="https://github.com/user-attachments/assets/799eedf9-4f96-433b-8ca0-70bfad99dc4b" />

