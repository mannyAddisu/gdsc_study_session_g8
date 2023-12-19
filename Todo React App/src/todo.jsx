import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              style={{ margin: "20px" }}
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          style={{ padding: "20px" }}
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button style={{ margin: "20px" }} onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}
