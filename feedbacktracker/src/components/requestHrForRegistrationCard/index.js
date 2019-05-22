import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export class RequestHrForRegistrationComponent extends React.Component{
    render() {
        return (
          <Card className="card_comp">
            <Card.Body>
              <Row className="justify-content-md-center">
                <Card.Title>Request HR For Registration</Card.Title> 
              </Row>
             
              <Row className="justify-content-md-center">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
              </Row>
            </Card.Body>
          </Card>
        );
      }
}