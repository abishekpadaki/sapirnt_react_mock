export function login(defStore = [{isUserLoggedIn:false}],action){
    switch(action.type){
        case "IS_USER_AUTHENTICATED":
            if(action.user.oracleId == "admin" && action.user.password == "admin")
                return [...defStore,{isUserLoggedIn:true}]
            return [{isUserLoggedIn:false}]
        case "IS_LOGGED_OUT":
            return [{isUserLoggedIn:false}]
        default:
            return defStore;
    }
}