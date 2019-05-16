import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allactions from './actions/actionCreators';
import RootApp from "./components/root.component";


// provider makes the store available
function mapStateToProps(store){
    return {
            allusers:store.users,
            allregistrations:store.registrations,
            allfeedBacks:store.feedBacks,
            allsearchCards:store.searchCards,
            allrequests:store.requests        
    }
}

function mapDispatchToProps(dispatcher){
        return bindActionCreators(allactions,dispatcher)
}

export var Main  = connect(mapStateToProps,mapDispatchToProps)(RootApp);