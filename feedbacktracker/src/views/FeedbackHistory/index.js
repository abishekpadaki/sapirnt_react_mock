import React from 'react'
import {Tbl} from '../../components/table'
import {NavbarComponent} from '../../components/navbar/index'
import Container from 'react-bootstrap/Container'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allactions from '../../actions/actionCreators';

class FeedbackHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header:["Id", "FeedBack", "Rating"],
            values:[
                {
                    Id:"123456",
                    FeedBack:"Amazing work keep going.",
                    OverAllRating:"4"
                }
            ]
        }
        props.FetchFeedbackHistory();
    }

    render(){
        const feedbackHistoryArray = this.props.allfeedBacks.filter((p,i) =>
        p.OracleId === this.props.login.userDetails.oracleId);
        console.log(feedbackHistoryArray);
        console.log(this.props);

        return(
            <React.Fragment>
                <NavbarComponent {...this.props}/>
                <Container>
                <Tbl header={this.state.header} values={feedbackHistoryArray} />
                </Container>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store){
    // console.log(store);
    return {
        login:store.users,
        allregistrations:store.registrations,
        allfeedBacks:store.feedBack,
        allsearchCards:store.searchCards,
        allrequests:store.requests        
}
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators(allactions,dispatcher)
}

export var MainFeedbackHistory  = connect(mapStateToProps,mapDispatchToProps)(FeedbackHistory);