import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import employeeReducer from '../features/employee/employeeSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    employees: employeeReducer,
  },
});

export default store;
