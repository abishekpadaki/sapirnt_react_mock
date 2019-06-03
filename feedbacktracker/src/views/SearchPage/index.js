import React from 'react'
import {NavbarComponent} from '../../components/navbar/index'
import {SearchResultComponent} from '../../components/searchResultsCard/index'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { SearchComponent } from '../../components/searchComponent';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allactions from '../../actions/actionCreators';

 export class SearchPage extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.login);
//        
//     cardlist: [
//         {
//             "OracleID": "1234567",
//             "FirstName": "Abishek",
//             "LastName": "Padaki",
//             "profilePic":"https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png",
//             "role": "Human Resources"
//         },
    
//         {
//             "OracleID": "1234568",
//             "FirstName": "Anurag",
//             "LastName": "Hakeem",
//             "profilePic":"https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png",
//             "role": "Human Resources"
//         },
    
//         {
//             "OracleID": "1234569",
//             "FirstName": "Raja",
//             "LastName": "Lochan",
//             "profilePic":"https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_businessman_male-512.png",
//             "role": "Human Resources"
//         },
//     ],}

    


// componentWillMount(){
//     var x= sessionStorage.getItem('search_txt');
//     console.log(x);
//     let searchview;
  
//     var j=0;
//     var match=[{}];
//     var clist=this.state.cardlist;
// for(var key in clist){
    
        

// if (clist[key].OracleID==x){
//     match[j]=clist[key];
//     j++;
// }

// else if(clist[key].FirstName==x){
//     match[j]=clist[key];
//     j++;
//     }

// }
// if(j>0){
// for (var key in match) {
    
//     searchview=<Row>

// <SearchComponent {...this.props} name={match[key].FirstName} id={match[key].OracleID} role={match[key].role} pic={match[key].profilePic}/>

// </Row>;
// }
// }

// else{
//     searchview=<Row>
//         <h1>Sorry, No user found.</h1>
//     </Row>
// }

}



getRequests = (props) => {
    const res1 = this.props.allrequests.filter((p,i) =>
    p.OracleId === this.props.login.userDetails.oracleId);

    return res1
}

render(){

    
    var x= sessionStorage.getItem('search_txt');
    console.log(x);
    let searchview;
  
    var j=0;
    var match=[{}];
    var clist=this.props.allusers;
    console.log(clist);
    console.log(this.props)
for(var key in clist){
    
        

if (clist[key].oracleId==x){
    match[j]=clist[key];
    j++;
}

else if(clist[key].FirstName==x){
    match[j]=clist[key];
    j++;
    }

}
if(j>0){
for (var key in match) {
    
    searchview=<Row>

<SearchResultComponent {...this.props} fname={match[key].FirstName} lname={match[key].LastName} id={match[key].OracleID} role={match[key].role} pic={match[key].profilePic}/>

</Row>;
}
}

else{
    searchview=<Row>
        <h1>Sorry, No user found.</h1>
    </Row>
}

    




// var j=0;
// var data=this.state.cardlist;
// let cardx;
// for(var key in data){
//     cardx=<React.Fragment>
//         <Row>
//         <Col md={12}>
//         <SearchResultComponent cardlist={this.state.cardlist}/>
//    </Col>

//  </Row>
//     </React.Fragment>;
   
// }

return(
    <React.Fragment>
    <NavbarComponent role={this.props.login.userDetails.role} res={this.getRequests()} {...this.props}/>
    <Container>
    {searchview}
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
        allrequests:store.requests,
        allusers:store.fetchsearch        
}
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators(allactions,dispatcher)
}

export var MainSearchPage = connect(mapStateToProps,mapDispatchToProps)(SearchPage);