import {createStore,applyMiddleware} from 'redux';
import { rootReducer } from '../reducers/rootReducer';
// import thunk from 'redux-thunk';

import dataBase from "../jsonData/peopleDetails";
import registrations from "../jsonData/registration";
import feedBack from "../jsonData/feedBackData";
import searchCard from "../jsonData/searchPageData";
import requests from "../jsonData/requestDb";
import thunk from 'redux-thunk';

// create a new store !
//createStore(reducer,data);  //=> Redux !

var data={
    users:dataBase,
    registrations:registrations,
    feedBacks:feedBack,
    searchCards:searchCard,
    requests:requests,
    fetchsearch:dataBase
};
export var store = createStore(rootReducer,data);