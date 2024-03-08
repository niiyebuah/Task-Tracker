import React, { useState } from 'react';

const Task = ({ task, onDelete, onToggle, onUpdateText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleToggle = () => {
    const confirmed = window.confirm('Do you want to mark this task as completed and delete it?');
    if (confirmed) {
      onDelete(task.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateText(task.id, editedText); // Invoke onUpdateText with the updated text
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''} mb-3 p-3 border rounded`}>
      {isEditing ? (
        <div className="d-flex align-items-center">
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            autoFocus
            className="form-control mr-2"
          />
          <button onClick={handleSave} className="btn btn-success">Save</button>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-between">
          <span className="flex-grow-1">{task.text}</span>
          <div>
            <button onClick={handleEdit} className="btn btn-sm btn-primary mr-1">Edit</button>
            <button onClick={handleToggle} className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
