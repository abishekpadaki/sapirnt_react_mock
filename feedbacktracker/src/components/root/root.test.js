import React from 'react';
import { shallow } from 'enzyme';

import RootApp from './index';

it('RootApp renders without crashing', () => {
  shallow(<RootApp />);
});