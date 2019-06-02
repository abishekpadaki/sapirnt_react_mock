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

//   getFeedbackData = (props) => {
//     const res = this.props.allfeedBacks.filter((p,i) =>
//     p.OracleId === this.props.login.userDetails.oracleId);

//     return res
// }
  render() {
    // console.log(this.props.res[0]);
    // var res = this.props.allfeedBacks.filter((p,i) =>
    // p.OracleId === this.props.login.userDetails.oracleId);
    
    return (
      <Card className="card_comp text-center">
        <Card.Body>
          <Row className="justify-content-md-center">
          {this.props.res[0]?<Card.Title>
            Feedback from {this.props.res[0].SenderFirstName}
            </Card.Title>:''}
            <br />
          </Row>
          <Row className="justify-content-md-center">
          {this.props.res[0]?<Card.Text>{this.props.res[0].Suggestions}</Card.Text>:''}
            <br />
          </Row>
          <Row>
            <Col md={4}>
              <Button
                variant="dark"
                onClick={() => {
                  this.props.history.push("/feedback_history");
                }}
              >
                View All FeedBacks
              </Button>
            </Col>

            <Col md={3}>
              <Button variant="dark">Growth Areas</Button>
            </Col>

            <Col md={3}>
              <Button variant="dark">Top 5 Feedbacks</Button>
            </Col>

            {this.props.res[0]?<Col md={2}>Rating : {this.props.res[0].OverallRating}</Col>:''}
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

