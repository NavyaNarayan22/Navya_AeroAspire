
import React, { useEffect, useState } from "react";

const initialTasks = () => {
  try {
    const raw = localStorage.getItem("tasks");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export default function App() {
  useEffect(() => {
    document.title = "TASK MANAGER";
  }, []);

  const [tasks, setTasks] = useState(initialTasks);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: form.title.trim(),
      description: form.description.trim(),
      dueDate: form.dueDate || null,
      createdAt: new Date().toISOString(),
    };

    setTasks((t) => [newTask, ...t]);
    setForm({ title: "", description: "", dueDate: "" });
  };

  const handleClear = () => {
    if (window.confirm("Clear all tasks?")) {
      setTasks([]);
      localStorage.removeItem("tasks");
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.h1}>TASK MANAGER</h1>
        <p style={styles.subtitle}>Add tasks and track due dates</p>
      </header>

      <main style={styles.main}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            <span style={styles.labelText}>Title</span>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Finish report"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            <span style={styles.labelText}>Description</span>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Add details (optional)"
              rows={4}
              style={{ ...styles.input, height: 100, resize: "vertical" }}
            />
          </label>

          <label style={styles.label}>
            <span style={styles.labelText}>Due Date</span>
            <input
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
              style={styles.input}
            />
          </label>

          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.actions}>
            <button type="submit" style={styles.primaryBtn}>
              Save Task
            </button>
            <button
              type="button"
              onClick={() => setForm({ title: "", description: "", dueDate: "" })}
              style={styles.ghostBtn}
            >
              Reset
            </button>
            <button type="button" onClick={handleClear} style={styles.dangerBtn}>
              Clear All
            </button>
          </div>
        </form>

        <section style={styles.listSection}>
          <h2 style={styles.listHeading}>
            Tasks ({tasks.length})
          </h2>

          {tasks.length === 0 && <p style={styles.empty}>No tasks yet — add one above.</p>}

          <ul style={styles.list}>
            {tasks.map((t) => (
              <li key={t.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <strong style={styles.cardTitle}>{t.title}</strong>
                  <small style={styles.cardDate}>
                    {t.dueDate ? `Due: ${new Date(t.dueDate).toLocaleDateString()}` : "No due date"}
                  </small>
                </div>
                {t.description && <p style={styles.cardDesc}>{t.description}</p>}
                <div style={styles.cardMeta}>
                  <small>Created: {new Date(t.createdAt).toLocaleString()}</small>
                  <button
                    onClick={() => setTasks((prev) => prev.filter((x) => x.id !== t.id))}
                    style={styles.deleteBtn}
                    title="Delete task"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    background: "linear-gradient(135deg,#f8fbff 0%, #fff7fb 100%)",
    minHeight: "100vh",
    padding: 24,
    color: "#0f172a",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  h1: {
    margin: 0,
    letterSpacing: 2,
    fontSize: 32,
    color: "#0b5cff",
  },
  subtitle: {
    marginTop: 6,
    color: "#475569",
  },
  main: {
    maxWidth: 920,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  form: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(11,92,255,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  label: { display: "flex", flexDirection: "column", gap: 8 },
  labelText: { fontWeight: 600, color: "#0f172a" },
  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #e6eef8",
    outline: "none",
    boxShadow: "inset 0 -1px 0 rgba(2,6,23,0.02)",
    fontSize: 14,
  },
  actions: { display: "flex", gap: 8, marginTop: 8 },
  primaryBtn: {
    background: "linear-gradient(90deg,#0b5cff,#6e8bff)",
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
  },
  ghostBtn: {
    background: "transparent",
    border: "1px solid #cbd5e1",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
  },
  dangerBtn: {
    background: "#ffecec",
    border: "1px solid #ffc2c2",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    marginLeft: "auto",
  },
  error: {
    color: "#b91c1c",
    background: "#fff1f2",
    padding: 8,
    borderRadius: 8,
    fontSize: 13,
  },
  listSection: {
    gridColumn: "span 1",
  },
  listHeading: { marginTop: 0, color: "#06b6d4" },
  empty: { color: "#64748b" },
  list: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 },
  card: {
    background: "linear-gradient(180deg,#ffffff,#fbfdff)",
    padding: 14,
    borderRadius: 12,
    border: "1px solid #eef2ff",
    boxShadow: "0 8px 24px rgba(2,6,23,0.04)",
  },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 },
  cardTitle: { fontSize: 16 },
  cardDate: { color: "#64748b", fontSize: 13 },
  cardDesc: { margin: "8px 0", color: "#334155" },
  cardMeta: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 },
  deleteBtn: {
    background: "#fff",
    border: "1px solid #ffe4e6",
    color: "#ef4444",
    padding: "6px 8px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 700,
  },
};
