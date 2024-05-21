import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  try {
    const response = await axios.get('https://api.restful-api.dev/objects');
    return response.data;
  } catch (error) {
    throw error;
  }
});


export const updateEmployeesAsync = createAsyncThunk(
  'employees/updateEmployees',
  async (updatedEmployees) => {

    return updatedEmployees;
  }
);


const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchEmployees.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.employees = action.payload;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });


    builder.addCase(updateEmployeesAsync.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export const { updateEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
