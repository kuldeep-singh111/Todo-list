import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo/todoSlice';
import { IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.name);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    const updatedTodo = {
      id: todo.id,
      name,
    };
    dispatch(updateTodo(updatedTodo));
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        {isEditing ? (
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        <IconButton onClick={isEditing ? handleUpdate : () => setIsEditing(true)}>
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default TodoItem;
