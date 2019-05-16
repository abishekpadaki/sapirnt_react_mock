import React from 'react';
import { Modal } from './components/modal/index';
import { Notifications } from "./components/notification/index";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      modalValues: {
        name: "Registrations",
        heading: "Request for Registration",
        body: ["OracleId: 5555", "FirstName: Dev", "LastName: Boss", "EmailId :boss@gmail.com", "Gender: Male", "Role: Mentor"],
        footer: true
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
    return (
      <div className="container">
        <div className="row mt-2">
          {/* <Modal values = {this.state.modalValues}/>  */}
          <Notifications values={this.state.notificationValues} />
        </div>
      </div>
    );
  }
}

export default App;