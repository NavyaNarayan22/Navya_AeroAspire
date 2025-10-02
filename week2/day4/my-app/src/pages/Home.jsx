import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const toggleComplete = (id) =>
    setTasks((t) => t.map(task => task.id === id ? { ...task, done: !task.done } : task));

  const removeTask = (id) => setTasks((t) => t.filter(task => task.id !== id));

  return (
    <section>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onToggle={toggleComplete} onRemove={removeTask} />
    </section>
  );
}
