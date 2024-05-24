// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from '../redux/actions';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo(id, newDescription));
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{description}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
