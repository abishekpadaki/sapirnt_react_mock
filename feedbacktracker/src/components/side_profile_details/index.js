import React from 'react';
import Card from 'react-bootstrap/Card';


export default class SideProfile extends React.Component{
    render() {
        let loggedInUser = this.props.login.userDetails
        console.log(loggedInUser)
        return (
            
            <Card className="sidebar" style={{ width: '15rem' }}>
  <Card.Img variant="top" src="assets/avatar2.png" />
  <Card.Body>
    
    <Card.Text>
      <strong>Name: {loggedInUser.FirstName} {loggedInUser.LastName}</strong><br />
      <strong>OracleId: {loggedInUser.oracleId}</strong><br />
      <strong>Role: {loggedInUser.role}</strong>
    </Card.Text>
  
  </Card.Body>
</Card>
)}
        }
