import React from "react";
import {BrowserRouter,Link} from 'react-router-dom';

export class Logout extends React.Component {
    render() {
        return (
          <BrowserRouter><Link to="/Login">Sign out</Link></BrowserRouter>
        );
      }
    }
    