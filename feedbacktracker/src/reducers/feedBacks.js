import { FETCH_FEEDBACK_HISTORY, ADD_NEW_FEEDBACK } from '../actions/actionCreators';

export function feedBack(defStore = [], action){
    switch(action.type){
        case "FETCH_FEEDBACK_HISTORY":
            return action.feedBack;
        case 'ADD_NEW_FEEDBACK':
            console.log(defStore) 
            debugger;  
            console.log([...defStore, action.thenewproduct])                      
            return [...defStore, action.thenewproduct]
        default:
            return defStore;
    }
}