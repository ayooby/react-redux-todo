import API from "../API";
import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB
} from "./types";

export const fetchTodos = () => dispatch => {
  API
    .get()
    .then(res => dispatch({ type: FETCH_TODOS, payload: res.data }))
    .catch(err => console.log(err));
};

export const addTodo = type => dispatch => {
  API
  .post('/', {type})
  .then(res => dispatch({ type: ADD_TODO, payload: res.data }))
  .catch(err => console.log(err));
};

export const toggleTodo = todo => dispatch => {
  API
  .put(`${todo._id}`, {completed: !todo.completed})
  .then(res => dispatch({ type: TOGGLE_TODO, payload: res.data }))
  .catch(err => console.log(err));
};  


export const updateTodo = (id, type) => dispatch => {
  API
  .put(`${id}`, {type})
  .then(res => dispatch({ type: UPDATE_TODO, payload: { ...res.data } }))
  .catch(err => console.log(err));
};

export const deleteTodo = id => dispatch => {
  API
  .delete(`${id}`)
  .then(() => dispatch({ type: DELETE_TODO, payload: { _id: id } }))
  .catch(err => console.log(err));
};

export const toggleTab = tab => async dispatch => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};
