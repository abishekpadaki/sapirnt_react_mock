import React from 'react';
import { Route,Switch} from 'react-router-dom';
// import { ShoppingCart } from './shoppingcart.component';
// import { NewProduct } from './new.product';

export default class RootApp extends React.Component{
  componentDidMount(){
    // dispatch an action
    this.props.FetchProducts(); // ??
  }
    render(){       
          return <div>
                        <Switch>
                          {/* <Route exact path='/' render={()=><ShoppingCart {...this.props}/>} />
                          <Route path='/newproduct' render={()=> <NewProduct {...this.props} />} />     */}
                        </Switch>
                    </div>
    }
  }

