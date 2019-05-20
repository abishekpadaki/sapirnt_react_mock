import {combineReducers} from 'redux';
import {login} from './login';
// import {fetchUserDetails} from "./fetchUserDetails"
export var rootReducer = combineReducers({
    users:login
});