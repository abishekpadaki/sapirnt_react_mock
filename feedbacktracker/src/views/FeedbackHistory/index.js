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

    getFeedbackData = (props) => {
        const res = this.props.allfeedBacks.filter((p,i) =>
        p.OracleId === this.props.login.userDetails.oracleId);

        return res
    }

    getRequests = (props) => {
        const res1 = this.props.allrequests.filter((p,i) =>
        p.OracleId === this.props.login.userDetails.oracleId);
    
        return res1
    }
    render(){
        // console.log(this.props)
        return(
            <React.Fragment>
                <NavbarComponent role={this.props.login.userDetails.role} res={this.getRequests()} {...this.props}/>
                <Container>
                <Tbl header={this.state.header} values={this.getFeedbackData()} />
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