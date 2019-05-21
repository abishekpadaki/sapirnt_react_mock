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

    //   if(!this.props.login.isUserLoggedIn){
       
          
    //     });
    // }
        return (
          <Button className="btn btn-danger"
          // onClick={() => {
          //   this.logoutfunc.bind(this);
            
          // }}
          href="/"
          onClick={() => {localStorage.removeItem('LsOId')}}
          ><i class="fas fa-sign-out-alt"></i></Button>
        );
      }
    }
    