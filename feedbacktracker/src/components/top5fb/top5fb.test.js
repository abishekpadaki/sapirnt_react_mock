import React from 'react';
import ReactDOM from 'react-dom';
import {T5fbMdl} from './index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<T5fbMdl value="test"  />, div);
  ReactDOM.unmountComponentAtNode(div);
});