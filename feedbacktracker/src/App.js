import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store'
import {Main} from './connect'
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
