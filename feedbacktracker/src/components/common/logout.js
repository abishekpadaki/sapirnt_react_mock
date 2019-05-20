import React from "react";
import {BrowserRouter,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import auth from '../../auth'

export class Logout extends React.Component {
    render() {
        return (
          <Button 
          onClick={() => {
            auth.logout(() => {
              this.props.history.push("/");
            });
          }}>Log Out</Button>
        );
      }
    }
    