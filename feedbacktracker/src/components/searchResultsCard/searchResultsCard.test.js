import React from 'react';
import ReactDOM from 'react-dom';
import {SearchResultComponent} from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResultComponent pic={"test"} fname={"test"} lname={"test"} id={"123"} role={"test"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});