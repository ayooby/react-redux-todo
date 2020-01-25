import {
    FETCH_TODOS,
    ADD_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    DELETE_TODO
  } from '../actions/types';
  
  export default function(state = [], action) {
    switch (action.type) {
      case FETCH_TODOS:
        return action.payload;
      case ADD_TODO:
        return [...state, action.payload];
      case TOGGLE_TODO:
        return state.map(todo =>
          todo._id === action.payload._id ? { ...todo, completed: !todo.completed } : todo
        );
      case UPDATE_TODO:
        return state.map(todo =>
          todo._id === action.payload._id
            ? { ...todo, type: action.payload.type }
            : todo
        );
      case DELETE_TODO:
        return state.filter(todo => todo._id !== action.payload._id);
      default:
        return state;
    }
  }