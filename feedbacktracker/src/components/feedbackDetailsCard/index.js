import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

import auth from "../../auth"

export class FeedbackDeatilsCardComponent extends React.Component {
  
  constructor(props) {
    super(props);
    
  
    
   
    this.state = {
      feedbackCard: {
        Rating: "5",
        FeedbackSender: "Ross",
        Feedback: "Great work please continue working like this."
      }
    };
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <Row>
            <Card.Title>
              Feedback from {this.state.feedbackCard.FeedbackSender}
            </Card.Title>
            <br />
          </Row>
          <Row>
            <Card.Text>{this.state.feedbackCard.Feedback}</Card.Text>
            <br />
          </Row>
          <Row>
            
            <Col md={4}>
              <Button variant="primary"  
                               onClick={() => {
                               
                                  this.props.history.push("/feedback_history");
                                
                              }}
                               
                              >
                View All FeedBacks
              </Button>
            </Col>

            <Col md={3}>
              <Button variant="primary" >
                Growth Areas
              </Button>
            </Col>

            <Col md={3}>
              <Button variant="primary" >
                Top 5 Feedbacks
              </Button>
            </Col>

            <Col md={2}>
            Rating : {this.state.feedbackCard.Rating}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

