import React from 'react';
import ReactDOM from 'react-dom';
import {FeedbackDeatilsCardComponent} from './index';

var res=[{ SenderFirstName:"Abi",
Suggestion:"Test",
GrowthAreas:"Test",
Top5Stuff:"Test"

},];
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedbackDeatilsCardComponent res={res}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});