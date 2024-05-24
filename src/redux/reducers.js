// src/redux/reducers.js
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, FILTER_TODO } from './actions';

const initialState = {
    todos: [],
    filter: 'ALL' // ALL, DONE, NOT_DONE
};

let nextTodoId = 1;

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: nextTodoId++,
                    description: action.payload.description,
                    isDone: false
                }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
                )
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo
                )
            };
        case FILTER_TODO:
            return {
                ...state,
                filter: action.payload.filter
            };
        default:
            return state;
    }
};

export default todoReducer;
