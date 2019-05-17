import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { store } from './store/store';
import { Main } from './connect';
import { BrowserRouter } from 'react-router-dom';
import RootApp from './components/root.component';


function App() {
  return (
   <Provider store={store}>
      <BrowserRouter>  
            <Main/>    
      </BrowserRouter>
   </Provider>
  ); 
}

export default App;
