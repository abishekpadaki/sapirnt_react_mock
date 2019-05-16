import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export class SearchComponent extends React.Component {
    render() {
      return (
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      );
    }
  }
  