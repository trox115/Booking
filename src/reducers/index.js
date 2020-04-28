import { combineReducers } from 'redux';
import user from './auth';
import loggedInStatus from './loggedin';

const rootReducer = combineReducers({ user, loggedInStatus });

export default rootReducer;
