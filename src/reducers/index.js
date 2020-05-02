import { combineReducers } from 'redux';
import user from './auth';
import loggedInStatus from './loggedin';
import barber from './barber';
import booking from './booking';

const rootReducer = combineReducers({ user, loggedInStatus, barber, booking });

export default rootReducer;
