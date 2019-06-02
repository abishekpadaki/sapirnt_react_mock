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
            ref="search_txt"
          />
          <Button variant="outline-dark"  onClick={() => {
                               
                               this.props.history.push("/search_page");
                               sessionStorage.setItem("search_txt", this.refs.search_txt.value);
                             
                           }}>Search</Button>
        </Form>
      );
    }
  }
  