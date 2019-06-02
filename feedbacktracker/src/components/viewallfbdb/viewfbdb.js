import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import auth from "../../auth"

export class ViewFeedbackDatabase extends React.Component{
    render() {
        return (
          <Card className="card_comp">
            <Card.Body>
              <Row className="justify-content-md-center">
                <Card.Title>View Feedback Database</Card.Title> 
              </Row>
             
              <Row className="justify-content-md-center">
                   
                <Button variant="dark" onClick={() => {
                  this.props.history.push("/fb_db");
                }} >
                    Click to View
                </Button>
               
              </Row>
            </Card.Body>
          </Card>
        );
      }
}