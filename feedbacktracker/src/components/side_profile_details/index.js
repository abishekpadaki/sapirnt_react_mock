import React from 'react';
import Card from 'react-bootstrap/Card';


export default class SideProfile extends React.Component{
    render() {
        return (
            
            <Card className="sidebar" style={{ width: '15rem' }}>
  <Card.Img variant="top" src="assets/avatar2.png" />
  <Card.Body>
    
    <Card.Text className="sidebar_text">
      <h3>Abishek P</h3>
      <h4>224634</h4>
      <h4>Human Resources</h4>
    </Card.Text>
  
  </Card.Body>
</Card>
)}
        }
