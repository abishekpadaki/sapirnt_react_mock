export function login(defStore = {isUserLoggedIn:false,userDetails:{}},action){
    switch(action.type){
        case "IS_USER_AUTHENTICATED":
            if(action.userDetails.length)
            // console.log("this"+action.userDetails);
                return {isUserLoggedIn:true, userDetails: action.userDetails[0]}

            return {...defStore,isUserLoggedIn:false}
        case "IS_LOGGED_OUT":
            return {isUserLoggedIn:false, userDetails: {}}
        default:
            return defStore;
    }
}