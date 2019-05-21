import React from 'react'
import {NavbarComponent} from '../../components/navbar/index'
import {SearchResultComponent} from '../../components/searchResultsCard/index'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
this.state={
    cardlist: [
        {
            "OracleID": "1234567",
            "FirstName": "Abishek",
            "LastName": "Padaki",
            "profilePic":"https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png",
            "role": "Human Resources"
        },
    
        {
            "OracleID": "1234568",
            "FirstName": "Anurag",
            "LastName": "Hakeem",
            "profilePic":"https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png",
            "role": "Human Resources"
        },
    
        {
            "OracleID": "1234569",
            "FirstName": "Raja",
            "LastName": "Lochan",
            "profilePic":"https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_businessman_male-512.png",
            "role": "Human Resources"
        },
    ],}
}

render(){
    var match=[{}];




var j=0;
var data=this.state.cardlist;
let cardx;
for(var key in data){
    cardx=<React.Fragment>
        <Row>
        <Col md={12}>
        <SearchResultComponent cardlist={this.state.cardlist}/>
   </Col>

 </Row>
    </React.Fragment>;
   
}

return(
    <React.Fragment>
    <NavbarComponent {...this.props}/>
    <Container>
    {cardx}
    </Container>
    </React.Fragment>
    )
    }
}