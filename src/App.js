import React, { useState } from "react";
import "./ToDoApp.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Things to Get Done!</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="todo-add-button" onClick={addTask}>
        Add Task
      </button>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <div>
              <button
                className="todo-complete-button"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="todo-delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;