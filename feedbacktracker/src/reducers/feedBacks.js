export function feedBack(defStore = [],action){
    switch(action.type){
        case "FETCH_FEEDBACK_HISTORY":
            return action.feedBack;
        default:
            return defStore;
    }
}