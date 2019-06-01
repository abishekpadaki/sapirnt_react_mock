import React from 'react';
import { shallow } from 'enzyme';

import {SearchPage} from './index'

it('Search Page renders without crashing', () => {
  shallow(<SearchPage userDetails/>);
});