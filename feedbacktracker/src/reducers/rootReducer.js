import {combineReducers} from 'redux';
import {login} from './login';
import {feedBack} from './feedBacks';
import {requests} from './requests';
import {fetchsearch} from './database';




// import {fetchUserDetails} from "./fetchUserDetails"
export var rootReducer = combineReducers({
    users:login,feedBack,requests,fetchsearch
});