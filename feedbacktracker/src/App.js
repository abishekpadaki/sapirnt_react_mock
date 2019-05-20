import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { store } from './store/store';
import { Main } from './connect';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


function App() {
  console.log("app.js",store);
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
