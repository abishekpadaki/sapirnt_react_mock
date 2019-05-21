import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export class SearchResultComponent extends React.Component{
    render() {
      
        return (
          <Card>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <Image src="https://urlzs.com/xs7uC" thumbnail />
                </Col>
                <Col xs={6}>
                  <Row>
                    {<h2>{this.props.cardlist[0].FirstName}</h2>}
                    
                  </Row>
                  <Row>{this.props.cardlist[0].OracleID}</Row>
                  

                  <Row>
                     {this.props.cardlist[0].role}
                    
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <button className="btn btn-primary srchbuttn">
                      Request Feedback for Self
                    </button>
                  </Row>
                  <Row>
                    <button className="btn btn-primary srchbuttn">
                      Request Feedback for Someone Else
                    </button>
                  </Row>                  
                </Col>
                </Row>
            </Card.Body>
          </Card>
        );
      }
}