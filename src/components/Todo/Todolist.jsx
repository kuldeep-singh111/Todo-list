import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todoitem from './Todoitem';
import { setTodos } from '../features/todo/todoSlice';
import { fetchEmployees } from '../features/employee/employeeSlice';

const Todolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (employees.length > 0 && todos.length === 0) {
      const defaultTodos = employees.map((employee, index) => ({
        id: index + 1,
        name: employee.name,
      }));
      dispatch(setTodos(defaultTodos));
    }
  }, [employees, todos, dispatch]);

  return (
    <div>
      <h2>Todo List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <Todoitem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
