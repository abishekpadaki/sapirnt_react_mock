import React from 'react';
import { Route,Switch} from 'react-router-dom';
import { Login } from "../../views/LoginView/index";

export default class RootApp extends React.Component{
  componentDidMount(){
    // dispatch an action
    this.props.FetchProducts(); // ??
  }
    render(){       
          return <div>
                        <Switch>
                          <Route exact path='/' render={()=><Login {...this.props}/>} />
                          <Route exact path='/dashboard' render={()=> <DashBoard {...this.props} />} />    
                        </Switch>
                    </div>
    }
  }
