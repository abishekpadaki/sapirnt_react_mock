import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default class Registration extends React.Component{
    render() {
        return (
            <React.Fragment>
            <h1>Registration Form</h1>
            <Container>
               
            <Form>
                <Form.Group controlId="formBasicFName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
    
  </Form.Group>

  <Form.Group controlId="formBasicLName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" />
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicOracleid">
    <Form.Label>Oracle ID</Form.Label>
    <Form.Control type="text" placeholder="Enter Oracle ID" />
    
  </Form.Group>

  <Form.Group controlId="formBasicRole">
    <Form.Label>Role</Form.Label>
    <Form.Control type="text" placeholder="Enter Role" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>

  <Form.Group controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
 
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</React.Fragment>)
        }
        }