import React from 'react';
import { shallow } from 'enzyme';

import {FeedBackPage} from './index';

it('FeedBackPage renders without crashing', () => {
  shallow(<FeedBackPage values={[{"OracleId":"Test",}]}/>);
});