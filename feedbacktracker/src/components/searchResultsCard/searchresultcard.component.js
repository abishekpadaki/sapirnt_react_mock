import React from 'react';

export class Product extends React.Component{
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
                    <h2>{this.props.searchResultDeatils.Name}</h2>
                  </Row>
                  <Row>{this.props.searchResultDeatils.Id}</Row>
                  <Row>
                    {this.props.searchResultDeatils.Designation}
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <button className="btn btn-primary">
                      Request Feedback for Self
                    </button>
                  </Row>
                  <Row>
                    <button className="btn btn-primary">
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