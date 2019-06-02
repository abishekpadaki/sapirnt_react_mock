import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
export class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
    }
handleClick(){
    alert("Reset Email sent to "+this.refs.emailref.value);
}
    render(){
        return(<React.Fragment>
            <Row>
<Container>
    <h1>Reset Password</h1>
    <Form onSubmit={()=>{this.handleClick()}}>
        <Form.Group>
<Form.Label>Enter Email ID:</Form.Label>
<Form.Control type="email" className="form-control" placeholder="abc@xyz.com" ref="emailref"/>

        </Form.Group>
        
        <Button type="submit" class="btn btn-primary">Send Reset link to mail</Button>
        
    </Form> <br></br>
    <Link to="/">
    <Button>Back To Login Page</Button></Link>
</Container>
</Row>

    


        </React.Fragment>)
    }
}