import React from 'react';
import {Form} from 'react-bootstrap';

export class Label extends React.Component{
    render(){
        return <Form.Group controlId={this.props.values.id}>
        <Form.Label>{this.props.values.title}</Form.Label>
        <Form.Control
            disabled
            required
            type="text"
            placeholder={this.props.values.id}
            defaultValue={this.props.values.value}
        />
    </Form.Group>

    }
}