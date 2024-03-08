import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Header from './Header';
import Footer from './Footer';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete homework', completed: false },
    { id: 2, text: 'Prepare presentation', completed: false },
    { id: 3, text: 'Exercise for 30 minutes', completed: false }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const onUpdateText = (id, newText) => {
    // Implement the logic to update the text of the task with the given ID
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Header /> {/* Include the Header component */}
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onDelete={() => deleteTask(task.id)}
              onToggle={() => toggleTask(task.id)}
              onUpdateText={onUpdateText}
            />
          ))}
        </div>
      ) : (
        <p>No tasks to show</p>
      )}
      <Footer />
    </div>
  );
};

export default Tasks;
