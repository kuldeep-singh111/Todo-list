import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmployeesAsync } from '../features/employee/employeeSlice.js';

const EmployeePage = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees);
  const todos = useSelector(state => state.todos.todos);

  const updateEmployeeList = () => {
    const updatedEmployees = todos.map(todo => ({ name: todo.name }));
    return updatedEmployees;
  };

  // Call the updateEmployeeList function whenever todos change
  useEffect(() => {
    const updatedEmployeeList = updateEmployeeList();
    dispatch(updateEmployeesAsync(updatedEmployeeList));
  }, [todos, dispatch]);

  return (
    <div>
      <h1>Employee List</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeePage;
