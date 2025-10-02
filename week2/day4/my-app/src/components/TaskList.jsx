import React from "react";

export default function TaskList({ tasks = [], onToggle, onRemove }) {
  if (!tasks.length) return <p>No tasks yet.</p>;
  return (
    <ul className="task-list">
      {tasks.map(t => (
        <li key={t.id} className={t.done ? "done" : ""}>
          <label>
            <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
            <span>{t.title}</span>
          </label>
          <button onClick={() => onRemove(t.id)} aria-label={`Remove ${t.title}`}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
