import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: '1', completed: false },
    { id: 2, text: '2', completed: false },
    { id: 3, text: '3', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Checklist 1</h1>
      <Link to="/checklist-test">Home</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
