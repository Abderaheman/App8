// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTodo } from '../redux/actions';

const TaskList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'DONE') return todo.isDone;
    if (filter === 'NOT_DONE') return !todo.isDone;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTodo('ALL'))}>All</button>
        <button onClick={() => dispatch(filterTodo('DONE'))}>Done</button>
        <button onClick={() => dispatch(filterTodo('NOT_DONE'))}>Not Done</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <Task key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
