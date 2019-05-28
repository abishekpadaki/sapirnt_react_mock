export function fetchsearch(defStore = [],action){
    switch(action.type){
        case "FETCH_SEARCH_PAGE":
            return action.database;
        default:
            return defStore;
    }
}