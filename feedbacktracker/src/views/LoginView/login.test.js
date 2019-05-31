import React from 'react';
import { shallow } from 'enzyme';

import {Login} from './index';

it('Login Page renders without crashing', () => {
  shallow(<Login login={[{isUserLoggedIn:false}]}/>);
});