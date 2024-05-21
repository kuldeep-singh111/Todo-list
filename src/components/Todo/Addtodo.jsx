import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [name, setName] = useState('');

  const handleAddTodo = () => {
    if (name.trim() === '') return;

    const newTodo = {
      id: todos.length + 1, // Incremental ID
      name,
    };
    dispatch(addTodo(newTodo));
    setName('');
  };

  return (
    <div>
      <input
        placeholder='Enter Your Todos......'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <IconButton onClick={handleAddTodo} aria-label="add">
        <AddIcon /> Add
      </IconButton>
    </div>
  );
};

export default AddTodo;
