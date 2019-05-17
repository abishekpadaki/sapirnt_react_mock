import React from 'react';
import { Container, Row, Col,Form,Button } from "react-bootstrap";


// import "./styles/LoginView.css";
export class Login extends React.Component {
    constructor(){
       super();
       this.state = {
           username:"",
           password:""
       } 
    }
    render() {
        return <Container>
            <Row>
                <Col md={8}>
                    <img src="" />
                </Col>
                <Col md={4}>
                    <Row>
                        <img src="" />
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
                                We'll never share your email with anyone else.
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
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit"
                            username={this.state.username}
                            password={this.state.password}
                        >                            
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}