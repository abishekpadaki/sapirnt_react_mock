import {createStore,applyMiddleware} from 'redux';
import { rootReducer } from '../reducers/rootReducer';
// import thunk from 'redux-thunk';
import dataBase from "../jsonData/peopleDetails";
import registrations from "../jsonData/registration";
import feedBack from "../jsonData/feedBackData";
import searchCard from "../jsonData/searchPageData";
import requests from "../jsonData/requestDb";

// create a new store !
//createStore(reducer,data);  //=> Redux !

var defdata ={
    users:dataBase,
    registrations:registrations,
    feedBacks:feedBack,
    searchCards:searchCard,
    requests:requests
};

export var store = createStore(rootReducer,defdata);


