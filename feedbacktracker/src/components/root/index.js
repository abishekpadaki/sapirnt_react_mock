import React from 'react';
import { Route,Switch} from 'react-router-dom';
import { Login } from "../../views/LoginView/index";
import { Dashboard } from "../../views/Dashboard/index";
import { FeedbackForm } from "../../views/FeedbackForm/index";
import { FeedbackHistory } from '../../views/FeedbackHistory';
import { ForgotPassword } from '../../views/ForgotPassword/index';

// import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "../../protected_route";
export default class RootApp extends React.Component{
    render(){
          return <div>
                        <Switch>
                          <Route exact path='/' render={(history)=> <Login {...this.props} history={history}/>} />
                          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                          <ProtectedRoute exact path='/feedback_history' component={FeedbackHistory} />
                          <ProtectedRoute exact path='/feedback_form' component={FeedbackForm} />

                          
                          
                          
                          <Route exact path='/forgot_password' render={()=> <ForgotPassword {...this.props} />} />

                        </Switch>
                    </div>
    }
  }
