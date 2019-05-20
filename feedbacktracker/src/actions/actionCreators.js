export function AuthenicateUser(user){
    return {type: 'IS_USER_AUTHENTICATED',user};
}

export function Logout(){
    return {type: 'IS_LOGGED_OUT'};
}
