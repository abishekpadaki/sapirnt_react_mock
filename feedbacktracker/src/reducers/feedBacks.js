export function feedBack(defStore = [],action){
    switch(action.type){
        case "FETCH_FEEDBACK_HISTORY":
            debugger;
            return action.feedBack;
        case 'ADD_NEW_FEEDBACK':
            console.log(action)   
            console.log([...defStore,action.thenewproduct])                      
            return [...defStore,action.thenewproduct]
        default:
            return defStore;
    }
}