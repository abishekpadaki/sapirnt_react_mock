import database from "../jsonData/peopleDetails";
import { functionExpression } from "@babel/types";


export function AuthenicateUser(user){
    const userDetails = database.filter((p,i) =>
        p.OracleId === user.oracleId && p.password === user.password   
    );
    console.log(userDetails);
    localStorage.setItem('loggedInUser', JSON.stringify(userDetails[0]));
    return {type: 'IS_USER_AUTHENTICATED',userDetails};
}

export function Logout(){
    return {type: 'IS_LOGGED_OUT'};
}

// export function FetchProfileDetails(){
//     const userDetails = database.filter((p,i) =>
//         p.OracleId === localStorage.getItem('LsOId') 
        
//     );
//     console.log(userDetails);   
//     return {type:'FETCH_PROFILE_DETAILS',userDetails};
// }