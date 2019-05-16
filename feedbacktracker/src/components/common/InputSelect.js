import React from "react";
import {Form,InputGroup} from "react-bootstrap";

export class InputSelect extends React.Component{
    render(){

        return <Form.Group controlId={this.props.values.id}>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id={this.props.values.id}>{this.props.values.name}</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control as="select">                        
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
        </InputGroup>
        </Form.Group>
    }
}