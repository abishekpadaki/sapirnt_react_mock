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
                  <Image src={this.props.pic} thumbnail />
                </Col>
                <Col xs={6}>
                  <Row>
                    {<h2>{this.props.name}</h2>}
                    
                  </Row>
                  <Row>{this.props.id}</Row>
                  

                  <Row>
                     {this.props.role}
                    
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