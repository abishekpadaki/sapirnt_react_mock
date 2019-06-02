import React from 'react';
import ReactDOM from 'react-dom';
import {GAMdl} from './index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GAMdl value="test"  />, div);
  ReactDOM.unmountComponentAtNode(div);
});