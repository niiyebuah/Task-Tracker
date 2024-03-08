import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add Task" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddTask;
