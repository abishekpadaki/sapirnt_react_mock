import React from 'react';
import {Form} from 'react-bootstrap';

export class TextArea extends React.Component{
    render(){
        return <Form.Group controlId={this.props.values.id}>
        <Form.Label>{this.props.values.name}</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    }
}