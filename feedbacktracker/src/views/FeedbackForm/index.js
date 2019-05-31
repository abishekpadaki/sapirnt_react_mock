import React from 'react'
import {NavbarComponent} from '../../components/navbar/index'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allactions from '../../actions/actionCreators';

export class FeedbackForm extends React.Component{
    constructor(props){
        super(props);
        
    
    }
    getRequests = (props) => {
        const res1 = this.props.allrequests.filter((p,i) =>
        p.OracleId === this.props.login.userDetails.oracleId);

        return res1
    }

    handleaddnewfeedback(){
        let aNewProduct = {
        OracleId: this.refs.oracleId.value,
        OverallRating: this.refs.overallRating.value,
        ClientFocusedDelivery: this.refs.clientFocusedDelivery.value,
        Creativity: this.refs.creativity.value,
        Leadership: this.refs.leadership.value,
        Openess: this.refs.openess.value,
        PeopleGrowth: this.refs.peopleGrowth.value,
        Relationships: this.refs.relationships.value,
        Suggestions: this.refs.feedback.value,
        GrowthAreas: this.refs.growthAreas.value,
        Top5Stuff: "",
        SenderOracleID: this.refs.senderOracleId.value,
        SenderFirstName: this.refs.senderName.value
        };
        console.log(this.props)
        this.props.AddNewFeedback(aNewProduct);
 
    }

    render(){
        console.log(this.props)
        return(<React.Fragment>
            
            <Container>
            {/* <NavbarComponent role={this.props.login.userDetails.role} res={this.getRequests()} {...this.props}/> */}
            <Form >    
        <Form.Group><h1>Feedback Form</h1></Form.Group>
        
        <Form.Group>
                <Form.Label for="senderOracleId">Your Oracle ID:</Form.Label>
                <Form.Control type="text" ref="senderOracleId" class="form-control" id="senderOracleId" placeholder="Oracle id of feedback sender"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label for="senderName">Your Name:</Form.Label>
                <Form.Control type="text" ref="senderName" class="form-control" id="senderName" placeholder="Name of feedback sender"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label for="oracleId">Recepient's Oracle ID:</Form.Label>
                <Form.Control type="text" ref="oracleId" class="form-control" id="oracleId" placeholder="Oracle id of feedback recepient"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label for="name">Recepient's Name:</Form.Label>
                <Form.Control type="text" ref="name" class="form-control" id="name" placeholder="Name of feedback recepient" />
            </Form.Group>
            <Form.Group>
                <Form.Label for="coreValues">Rating for core values (Max - 5, Min - 1):</Form.Label>
                <Form.Group class="input-group mb-3" >
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="clientFocusedDelivery">Client Focused Delivery</Form.Label>
                    </Form.Group>
                    <select class="custom-select" ref="clientFocusedDelivery" id="clientFocusedDelivery">
                         {/* <option value="" selected>--Choose Rating--</option> */}
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="creativity">Creativity</Form.Label>
                    </Form.Group>
                    <select class="custom-select" ref="creativity" id="creativity">
                         {/* <option value="" selected>--Choose Rating--</option>  */}
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="leadership">Leadership</Form.Label>
                    </Form.Group>
                    <select class="custom-select" ref="leadership" id="leadership">
                        {/* <option value="" selected>--Choose Rating--</option>  */}
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="openess">Openess</Form.Label>
                    </Form.Group>
                    <select class="custom-select" ref="openess" id="openess">
                        {/* <option value="" selected>--Choose Rating--</option> */}
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="peopleGrowth">People Growth</Form.Label>
                    </Form.Group>
                    <select class="custom-select" ref="peopleGrowth" id="peopleGrowth">
                        {/* <option value="" selected>--Choose Rating--</option> */}
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
                <Form.Group class="input-group mb-3">
                    <Form.Group class="input-group-prepend">
                        <Form.Label class="input-group-text" for="relationships">Relationships</Form.Label>
                    </Form.Group>
                    <select class="custom-select" ref="relationships" id="relationships">
                        {/* <option value="" selected>--Choose Rating--</option> */}
                        <option value="5" selected>5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </Form.Group>
            </Form.Group>
            <Form.Group>
                <Form.Label for="technicalSkills">Mention technical skills seperated by commas:</Form.Label>
                <textarea class="form-control" ref="technicalSkills" id="technicalSkills" rows="2"></textarea>
            </Form.Group>

            <Form.Group>
                <Form.Label for="softSkills">Mention soft skills seperated by commas:</Form.Label>
                <textarea class="form-control" id="softSkills" ref="softSkills" rows="2"></textarea>
            </Form.Group>

            <Form.Group>
                <Form.Label for="growthAreas">Growth Areas:</Form.Label>
                <textarea class="form-control" id="growthAreas" ref="growthAreas" rows="2"></textarea>
            </Form.Group>

            <Form.Group>
                <Form.Label for="feedback">Suggestions/Feedback:</Form.Label>
                <textarea class="form-control" id="feedback" ref="feedback" rows="3"></textarea>
            </Form.Group>
            <Form.Group>
                <Form.Label for="overallRating">Overall Rating (Max - 5, Min - 1):</Form.Label>
                <select id="overallRating" ref="overallRating" class="form-control">
                    {/* <option value="" selected>--Choose Rating--</option> */}
                    <option value="5" selected>5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </Form.Group>
            <Button type="button"  className="btn btn-primary" onClick={this.handleaddnewfeedback.bind(this)}>Submit</Button>
        </Form>
    </Container>
        </React.Fragment>)
    }
}

// function mapStateToProps(store){
//     // console.log(store);
//     return {
//         login:store.users,
//         allregistrations:store.registrations,
//         allfeedBacks:store.feedBack,
//         allsearchCards:store.searchCards,
//         allrequests:store.requests        
// }
// }

// function mapDispatchToProps(dispatcher){
//     return bindActionCreators(allactions,dispatcher)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(FeedbackForm);