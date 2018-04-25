import { combineReducers } from 'redux';
import { SET_LOGIN, REMOVE_LOGIN, SET_ERROR, REMOVE_ERROR } from '../actions';

function login(state = {}, action) {
  switch(action.type) {
    case SET_LOGIN:
      return action.login;
    case REMOVE_LOGIN:
      return {};
    default:
      return state;
  }
}

function error(state = {}, action) {
  switch(action.type) {
    case SET_ERROR:
      return action.error;
    case REMOVE_ERROR:
      return {};
    default:
      return state;
  }
}

const road = combineReducers({
  login,
  error

  });
  
  export default road;