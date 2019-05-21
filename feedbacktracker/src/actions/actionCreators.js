import database from "../jsonData/peopleDetails";
import feedBack from "../jsonData/feedBackData";

import { functionExpression } from "@babel/types";


export function AuthenicateUser(user){
    // console.log(user)
    const userDetails = database.filter((p,i) =>
        p.oracleId === user.oracleId && p.password === user.password   
    );
    // console.log(userDetails);
    localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]));
    return {type: 'IS_USER_AUTHENTICATED',userDetails};
}

export function Logout(){
    return {type: 'IS_LOGGED_OUT'};
}

export function FetchFeedbackHistory(){
    console.log(feedBack);
    // localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]));
    return {type: 'FETCH_FEEDBACK_HISTORY',feedBack};
}
