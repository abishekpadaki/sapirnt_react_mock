import React from 'react';
import Card from 'react-bootstrap/Card';


export default class SideProfile extends React.Component{
    render() {
        let loggedInUser = this.props.login.userDetails
        console.log(loggedInUser)
        return (
            
            <Card className="sidebar" style={{ width: '15rem' }}>
  <Card.Img variant="top" src={loggedInUser.profilePic} />
  <Card.Body>
    
    <Card.Text>
     <h3>{loggedInUser.FirstName} {loggedInUser.LastName}</h3>
      <h4>OracleId: {loggedInUser.oracleId}</h4>
      <h4>Role: {loggedInUser.role}</h4>
    </Card.Text>
  
  </Card.Body>
</Card>
)}
        }
