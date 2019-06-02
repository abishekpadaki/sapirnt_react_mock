import React from 'react';
import ReactDOM from 'react-dom';
import {SearchComponent} from './index';
var history=[];
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchComponent history={history}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});