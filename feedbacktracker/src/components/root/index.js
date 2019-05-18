import React from 'react';
import { Route,Switch} from 'react-router-dom';
import { Login } from "../../views/LoginView/index";
import { Dashboard } from "../../views/Dashboard/index";
import { FeedbackForm } from "../../views/FeedbackForm/index";

export default class RootApp extends React.Component{
    render(){
          return <div>
                        <Switch>
                          <Route exact path='/' render={()=><Login {...this.props}/>} />
                          <Route exact path='/dashboard' render={()=> <Dashboard {...this.props} />} />
                          <Route exact path='/feedback_form' render={()=> <FeedbackForm {...this.props} />} />
                        </Switch>
                    </div>
    }
  }
