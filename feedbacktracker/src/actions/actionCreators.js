import database from "../jsonData/peopleDetails";


export function AuthenicateUser(user){
    const userDetails = database.map((p,i) =>
        p.OracleId === user.oracleId && p.password === user.password   
    );
    return {type: 'IS_USER_AUTHENTICATED',userDetails};
}

export function Logout(){
    return {type: 'IS_LOGGED_OUT'};
}
