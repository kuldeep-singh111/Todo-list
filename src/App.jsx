import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoPage from './components/pages/TodoPage';
import EmployeePage from './components/pages/EmployeePage';
import { Provider } from 'react-redux';
import store from './components/store/store';

const App = () => {
  return (
    <center>

      <Provider store={store}>
        <Router>
          <div className='navbar'>
            <nav>

              <ul>
                <span>Todo App</span>
                <li><Link to="/">Todo List</Link></li>
                <li><Link to="/employees">Employee List</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<TodoPage />} />
              <Route path="/employees" element={<EmployeePage />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </center>
  );
};

export default App;
