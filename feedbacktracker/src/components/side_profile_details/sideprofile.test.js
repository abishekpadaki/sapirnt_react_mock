import React from 'react';
import { shallow } from 'enzyme';

import SideProfile from './index'
var login={userDetails:{
  profilPic:"test",
  FirstName:"tets",
  LastName:"Tets",
  oracleId:"4141",
  role:"PM"
}
}
it('Side Profile component renders without crashing', () => {
  shallow(<SideProfile login={login}/>);
});