import {combineReducers} from 'redux';
import {login} from './login';
export var rootReducer = combineReducers({
    users:login
});