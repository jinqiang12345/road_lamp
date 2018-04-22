import { combineReducers } from 'redux';
import { SET_LOGIN, REMOVE_LOGIN, SET_ERROR, REMOVE_ERROR, SET_FIX, REMOVE_FIX } from '../actions';

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

function fix(state = {}, action) {
  switch(action.type) {
    case SET_FIX:
      return action.fix;
    case REMOVE_FIX:
      return {};
    default:
      return state;
  }
}

const road = combineReducers({
  login,
  error,
  fix

  });
  
  export default road;