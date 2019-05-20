import React from "react";
import {BrowserRouter,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import auth from '../../auth'

export class Logout extends React.Component {

//   logoutfunc(){
//     console.log("here");
//     this.props.Logout();
 
//     auth.logout(() => {
            
//       this.props.history.history.push("/");
//   })
// }
    render() {

    //   if(!this.props.allusers.isUserLoggedIn){
       
          
    //     });
    // }
        return (
          <Button 
          // onClick={() => {
          //   this.logoutfunc.bind(this);
            
          // }}
          href="/"
          >Log Out</Button>
        );
      }
    }
    