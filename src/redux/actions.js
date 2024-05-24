// src/redux/actions.js

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODO = 'FILTER_TODO';

export const addTodo = (description) => ({
    type: ADD_TODO,
    payload: { description }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const editTodo = (id, description) => ({
    type: EDIT_TODO,
    payload: { id, description }
});

export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: { filter }
});
