import database from "../jsonData/peopleDetails";
import feedBack from "../jsonData/feedBackData";
import requests from "../jsonData/requestDb";

// import { functionExpression } from "@babel/types";
export const FETCH_FEEDBACK_HISTORY = 'FETCH_FEEDBACK_HISTORY';
export const ADD_NEW_FEEDBACK = 'ADD_NEW_FEEDBACK';

// const fb=feedBack;

export function AuthenicateUser(user){
    // console.log(user)
    const userDetails = database.filter((p,i) =>
        p.oracleId === user.oracleId && p.password === user.password   
    );
    // console.log(userDetails);
    localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]));
    return {type: 'IS_USER_AUTHENTICATED',userDetails};
}

export function fetchsearch(){
    console.log(database)
    return {type: 'FETCH_SEARCH_PAGE',database};
}

export function Logout(){
    return {type: 'IS_LOGGED_OUT'};
}

export function FetchFeedbackHistory(){
   // console.log(feedBack);
    // localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]));
    return {type: 'FETCH_FEEDBACK_HISTORY',feedBack};
}

export function FetchRequests(){
    console.log(requests);
    // localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]));
    return {type: 'FETCH_REQUESTS',requests};
}

export function AddNewFeedback(thenewproduct) {
    console.log(thenewproduct);
    return {type:'ADD_NEW_FEEDBACK',thenewproduct};
}