import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { nanoid } from "nanoid";

export default function AddTask() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks([...tasks, { id: nanoid(), title: title.trim(), done: false }]);
    navigate("/");
  };

  return (
    <section>
      <h1>Add Task</h1>
      <form onSubmit={submit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
