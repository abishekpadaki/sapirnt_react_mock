import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export class RequestHrForRegistrationComponent extends React.Component{
  handleclick(){
    alert("Registration Request sent");
  }
    render() {
        return (
          <Card className="card_comp text-center" style={{ width: '15rem' }}>
            <Card.Body>
              <Row className="justify-content-md-center">
                <Card.Title>Request HR For Registration</Card.Title> 
              </Row>
             
              <Row className="justify-content-md-center">

              <Form onSubmit={()=>{this.handleclick()}}>
                  <Form.Group controlId="formBasicOID">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Candidate's Oracle ID"
                      required
                    />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Candidate's Name"
                    />
                  </Form.Group>
                  
                  <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="email"
                      placeholder="Candidate's Email"
                    />
                  </Form.Group>
                  
                  <Form.Group controlId="formBasicRole">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Candidate's Role"
                    />
                  </Form.Group>
                  

                <Button variant="dark" type="submit">

                    Submit
                  </Button>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        );
      }
}