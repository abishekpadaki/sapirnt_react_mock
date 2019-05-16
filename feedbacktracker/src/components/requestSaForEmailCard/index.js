import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class RequestSaForEmailComponent extends React.Component{
    render() {
        return (
          <Card>
            <Card.Body>
              <Row className="justify-content-md-center">
                <Card.Title>Request SA for email</Card.Title>
              </Row>
              <Row>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="email"
                      placeholder="Your email id"
                    />
                    </Form.Group>
                    <Form.Group controlId="formBasicCandidateId">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Candidate's ORACLE ID"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        );
      }
}