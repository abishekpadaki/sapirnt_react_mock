import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { SearchComponent } from "../searchComponent/index";
import Col from "react-bootstrap/Col";
import {Notifications} from "../notification/index";
import {Logout} from "../common/logout"
import Image from 'react-bootstrap/Image'

export class NavbarComponent extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
            modalValues: {
              name: "Registrations",
              heading: "Request for Registration",
              body: ["OracleId: 5555", "FirstName: Dev", "LastName: Boss", "EmailId :boss@gmail.com", "Gender: Male", "Role: Mentor"],
              footer: false
            },
            notificationValues: {
              heading: "FeedBack Requests",
              icon: "fas fa-bell",
              middle: " requested feedback for ",
              details: [
                {
                  requester: {
                    name: "Ross",
                    oracleID: 123457
                  },
                  requestfor: {
                    name: "David",
                    oracleID: 123557
                  }
                },
                {
                  requester: {
                    name: "Arya",
                    oracleID: 123457
                  },
                  requestfor: {
                    name: "Danny",
                    oracleID: 123557
                  }
                },
              ]
            }
          }
        }
render() {
let regnotif;

if(this.props.role=="HR"){
  regnotif= <Col md={1}>
  <Notifications values={this.state.notificationValues} />
</Col>;  
}

  return (
    <Navbar bg="light" expand="lg">
      <Col xs={2}>
        <Image src={require("./assets/publicisSapient1.png")} alt="Logo" fluid />
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Col xs={{ span: 4, offset: 2 }}>
            <SearchComponent />
          </Col>
          <Col xs={{ span: 1, offset: 2 }}>
              <Notifications values={this.state.notificationValues} />
          </Col>
         {regnotif}
          <Col xs={{ span: 1, offset: 1 }}><Logout /></Col>
          
      </Navbar.Collapse>
    </Navbar>
  );
}
}
