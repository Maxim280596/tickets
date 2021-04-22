import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Logo from '../components/Logo';

describe('Testing <Logo/>', () => {

  it('should Logo have been rendered correctly', () => {
    const logo = shallow(<Logo />);
    expect(toJson(logo)).toMatchSnapshot();
  });
  
});
