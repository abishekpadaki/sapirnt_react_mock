import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
export class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<React.Fragment>
<Container>
    <h1>Reset Password</h1>
    <Form>
        <Form.Group>
<Form.Label>Enter Email ID:</Form.Label>
<Form.Control type="email" className="form-control" placeholder="abc@xyz.com"/>

        </Form.Group>
        <Button type="submit" class="btn btn-primary">Send Reset link to mail</Button>
    </Form>
</Container>
        </React.Fragment>)
    }
}