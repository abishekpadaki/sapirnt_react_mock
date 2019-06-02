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
                   <Link to="/fb_db">
                <Button variant="dark" >
                    Click to View
                </Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        );
      }
}