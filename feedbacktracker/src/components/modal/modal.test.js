import React from 'react';
import ReactDOM from 'react-dom';
import { Mdl} from './index';

var values= {
    name: "Registrations",
    heading: "Request for Registration",
    body: ["OracleId: 5555", "FirstName: Dev", "LastName: Boss", "EmailId :boss@gmail.com", "Gender: Male", "Role: Mentor"],
    footer: true
  };


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mdl values={values} />, div);
  ReactDOM.unmountComponentAtNode(div);
});