import React from 'react';
import ReactDOM from 'react-dom';

import { ViewFeedbackDatabase } from './viewfbdb';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewFeedbackDatabase  />, div);
  ReactDOM.unmountComponentAtNode(div);
});