import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

export class FeedbackDeatilsCardComponent extends React.Component {
  constructor() {
    super();
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
            
            <Col md={2}>
              <Button variant="primary" type="submit">
                View All FeedBacks
              </Button>
            </Col>
            <Col md={2}>
              <Button variant="primary" type="submit">
                Growth Areas
              </Button>
            </Col>
            <Col md={1}>
              <Button variant="primary" type="submit">
                Top 5 Feedbacks
              </Button>
            </Col>
            <Col md={{ span: 2, offset: 5 }}>
            <Card.Text>Rating : {this.state.feedbackCard.Rating}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
