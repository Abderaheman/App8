// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import TaskList from './components/TaskList';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TaskList />
    </div>
  </Provider>
);

export default App;
