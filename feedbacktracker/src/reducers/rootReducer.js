import {combineReducers} from 'redux';
import {login} from './login';
import {feedBack} from './feedBacks';

// import {fetchUserDetails} from "./fetchUserDetails"
export var rootReducer = combineReducers({
    users:login,feedBack
});