import React from 'react';
import { Container, Row, Col,Form,Button } from "react-bootstrap";


// import "./styles/LoginView.css";
export class Login extends React.Component {
    constructor(props){
       super(props);
       this.state = {
           username:"",
           password:""
       } 
    //    console.log(props.allusers);
    }
    render() {
        return <React.Fragment>
            <Row>
                <Col md={8}>
                    <img className="img-fluid" src='assets/landingPage_Image.jpg' />
                </Col>
                <Col md={4}>
                    <Container>
                    <Row>
                        <h2>FEEDBACK TRACKER</h2>
                    </Row>
                    <Form>
                        <Form.Group controlId="formBasicOracleId">
                            <Form.Label>Oracle Id</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Oracle Id" 
                                value={this.state.username}
                                onChange={(e) => { 
                                    return this.setState({ username: e.target.value })
                                }
                            }
                            />
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password}
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    return this.setState({ password: e.target.value })
                                }
                            }
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit"
                            username={this.state.username}
                            password={this.state.password}
                        >                            
                            Submit
                        </Button>
                    </Form>
                    </Container>
                </Col>
                </Row>
        </React.Fragment>
    }
}