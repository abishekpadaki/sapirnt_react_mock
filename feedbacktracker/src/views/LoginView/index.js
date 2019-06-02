import React from 'react';
import { Container, Row, Col,Form,Button } from "react-bootstrap";
import {Link} from "react-router-dom"

import auth from "../../auth"
// import "./styles/LoginView.css";
export class Login extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           oracleId:"",
           password:"",
       }
    }
    HandleFormSubmit(e) {
        e.preventDefault();
         
        this.props.AuthenicateUser(this.state);
        
    }
    // componentDidUpdate(){
    //     // if(this.props.login[0].isUserLoggedIn){
    //     //     let {history} = this.props;
    //     //     history.push('/cart');
    //     // }
    //     var x = this.props;
    //     console.log(x);
    // }
    render() {
        if(this.props.login.isUserLoggedIn){
            auth.login(() => {
                this.HandleFormSubmit.bind(this);
                this.props.history.history.push("/dashboard");
              
            });
        }
        // console.log(this.props)
        return <React.Fragment>
            <Row>
                <Col md={8}>
                    <img className="img-fluid" src='assets/landingPage_Image.jpg' />
                </Col>
                <Col md={4}>
                    <Container>
                    <Row className="justify-content-md-center">
                        <h2>FEEDBACK TRACKER</h2>
                    </Row>
                    <Form onSubmit = {this.HandleFormSubmit.bind(this)}>
                        <Form.Group controlId="formBasicOracleId">
                            <Form.Label>Oracle Id</Form.Label>
                            <Form.Control 
                                type="text"
                                ref="oracleId" 
                                placeholder="Enter Oracle Id"
                                required 
                                value = {this.state.oracleId}
                                onChange={(e) => {
                                    return this.setState({ oracleId: e.target.value })
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
                                value = {this.state.password}
                                required
                                onChange={(e) => {
                                    return this.setState({ password: e.target.value })
                                }
                            }
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit"
                            // username={this.state.username}
                            // password={this.state.password}
                            onClick={(e) => {
                                this.HandleFormSubmit.bind(this,e);
                                // localStorage.setItem('loggedInUser', this.state[0]);
                                // auth.login(() => {
                                    // this.HandleFormSubmit.bind(this);
                                //   this.props.history.push("/dashboard");
                                // });
                              }}
                        >                            
                            Submit
                        </Button>
                        
                    </Form><br></br>
                    <Link to="/forgot_password">
                        <Button>Forgot Password</Button></Link>
                    
                    </Container>
                    
                </Col>
                </Row>
        </React.Fragment>
    }
}