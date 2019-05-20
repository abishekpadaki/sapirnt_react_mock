import database from "../jsonData/peopleDetails";
import { functionExpression } from "@babel/types";


export function AuthenicateUser(user){
    const userDetails = database.filter((p,i) =>
        p.OracleId === user.oracleId && p.password === user.password   
    );
    console.log(userDetails);
    return {type: 'IS_USER_AUTHENTICATED',userDetails};
}

export function Logout(){
    return {type: 'IS_LOGGED_OUT'};
}

export function FetchProfileDetails(){
    
}