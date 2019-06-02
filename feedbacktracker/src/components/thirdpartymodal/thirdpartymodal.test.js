import React from 'react';
import ReactDOM from 'react-dom';
import {TPMdl} from './index';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TPMdl  />, div);
  ReactDOM.unmountComponentAtNode(div);
});