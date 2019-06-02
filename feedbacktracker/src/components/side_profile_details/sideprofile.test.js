import React from 'react';
import { shallow } from 'enzyme';

import SideProfile from './index'

it('Side Profile component renders without crashing', () => {
  shallow(<SideProfile login/>);
});