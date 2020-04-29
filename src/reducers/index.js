import { combineReducers } from 'redux';
import user from './auth';
import loggedInStatus from './loggedin';
import barber from './barber';

const rootReducer = combineReducers({ user, loggedInStatus, barber });

export default rootReducer;
