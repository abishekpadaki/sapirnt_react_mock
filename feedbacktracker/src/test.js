// import React from 'react';
// import { Mdl } from './components/modal/index';
// import { Notifications } from "./components/notification/index";

// export class Test extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       modalValues: {
//         name: "Registrations",
//         heading: "Request for Registration",
//         body: ["OracleId: 5555", "FirstName: Dev", "LastName: Boss", "EmailId :boss@gmail.com", "Gender: Male", "Role: Mentor"],
//         footer: false
//       },
//       notificationValues: {
//         heading: "FeedBack Requests",
//         icon: "fas fa-bell",
//         middle: " requested feedback for ",
//         details: [
//           {
//             requester: {
//               name: "Ross",
//               oracleID: 123457
//             },
//             requestfor: {
//               name: "David",
//               oracleID: 123557
//             }
//           },
//           {
//             requester: {
//               name: "Arya",
//               oracleID: 123457
//             },
//             requestfor: {
//               name: "Danny",
//               oracleID: 123557
//             }
//           },
//         ]
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row mt-2">
//           {/* <Mdl values = {this.state.modalValues}/>  */}
//           <Notifications values={this.state.notificationValues} />
//         </div>
//       </div>
//     );
//   }
// }



// import React from "react";
// import {FeedBackPage} from "./components/feedBack/index";
// export class Test extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       feedback : {
//         OracleId : 123457,
//         Name : "Lochan RN",
//       }
//     }
//   }

//   render(){
//     return(   
//          <div className="container">
//             <div className="row mt-2">
//               <FeedBackPage values={this.state.feedback} />
//             </div>
//           </div>
//     )
//   }
// }


import React from "react" 
import {Tbl} from "./components/table/index";

export class Test extends React.Component{

  constructor(){
    super();
    this.state = {
      header:["Sender's Oracle Id","FeedBack","Over All Rating"],
      values:[
        {
          Id: 124057,
          FeedBack: "Wow what an amazing Employee great stuff and very dedicated",
          OverAllRating:"4"
        },
        {
          Id: 124357,
          FeedBack: "Nice work done",
          OverAllRating:"3"
        },
        {
          Id: 124057,
          FeedBack: "Best work and keep going",
          OverAllRating:"5"
        },
      ]
    }
  }
  render(){
    return <Tbl header={this.state.header} values={this.state.values}/>
  }
} 

//Anurag

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav';
// import { SearchComponent } from "./components/searchComponent/index";
// import Col from "react-bootstrap/Col";
// import {Notifications} from "./components/notification/index";
// import {Logout} from "../common/logout"

// export class Test extends React.Component {
//     constructor() {
//             super();
//             this.state = {
//               modalValues: {
//                 name: "Registrations",
//                 heading: "Request for Registration",
//                 body: ["OracleId: 5555", "FirstName: Dev", "LastName: Boss", "EmailId :boss@gmail.com", "Gender: Male", "Role: Mentor"],
//                 footer: false
//               },
//               notificationValues: {
//                 heading: "FeedBack Requests",
//                 icon: "fas fa-bell",
//                 middle: " requested feedback for ",
//                 details: [
//                   {
//                     requester: {
//                       name: "Ross",
//                       oracleID: 123457
//                     },
//                     requestfor: {
//                       name: "David",
//                       oracleID: 123557
//                     }
//                   },
//                   {
//                     requester: {
//                       name: "Arya",
//                       oracleID: 123457
//                     },
//                     requestfor: {
//                       name: "Danny",
//                       oracleID: 123557
//                     }
//                   },
//                 ]
//               }
//             }
//           }
//   render() {
//     return (
//       <Navbar bg="light" expand="lg">
//         <Col xs={2}>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         </Col>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Col xs={{ span: 4, offset: 2 }}>
//               <SearchComponent />
//             </Col>
//             <Col xs={{ span: 1, offset: 2 }}>
//                 <Notifications values={this.state.notificationValues} />
//                 {/* <Notifications values={this.state.notificationValues} /> */}
//             </Col>
//             <Col md={1}>
//                 <Notifications values={this.state.notificationValues} />
//                 {/* <Notifications values={this.state.notificationValues} /> */}
//             </Col>  
//             <Col xs={{ span: 1, offset: 1 }}><Logout /></Col>
            
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }