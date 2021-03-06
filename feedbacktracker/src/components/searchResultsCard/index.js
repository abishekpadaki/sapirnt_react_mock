import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { TPMdl } from '../thirdpartymodal';

import Button from 'react-bootstrap/Button';
import './styles/searchResultsCard.css'

function alert_display(){
  
    alert("Feedback Request Sent");
  

}


export class SearchResultComponent extends React.Component{
  constructor(props){
    super(props);
   
  
    }
  
    render() {
      
      
        return (
          <Card>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <Image src={this.props.pic} thumbnail />
                </Col>
                <Col xs={6}>
                  <Row>
                    {<h2>{this.props.fname} {this.props.lname}</h2>}
                    
                  </Row>
                  <Row>{this.props.id}</Row>
                  

                  <Row>
                     {this.props.role}
                    
                  </Row>
                </Col>
                <Col>
                  <Row className="requestFeedbackforSelfTopMargin">
                    <Button className="btn btn-dark srchbuttn" block onClick={() => { alert("Feedback Request Sent")}}>
                      Request Feedback for Self
                    </Button>
                  </Row>
                  <Row>

                    <TPMdl></TPMdl>

                  </Row>                  
                </Col>
                </Row>
            </Card.Body>
          </Card>
        );
      }
}