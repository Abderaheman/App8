// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTodo(description));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
