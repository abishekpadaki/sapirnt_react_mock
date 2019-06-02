import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import {GAMdl} from "../growthareasmdl/index"
import {T5fbMdl} from "../top5fb/index"

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

              <GAMdl value={this.props.res[0].GrowthAreas}></GAMdl>
            </Col>

            <Col md={3}>
            <T5fbMdl value={this.props.res[0].Top5Stuff}></T5fbMdl>

            </Col>

            {this.props.res[0]?<Col md={2}><h6>Rating : {this.props.res[0].OverallRating}</h6></Col>:''}
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

