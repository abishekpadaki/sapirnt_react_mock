export function requests(defStore = [],action){
    switch(action.type){
        case "FETCH_REQUESTS":
            return action.requests;
        default:
            return defStore;
    }
}