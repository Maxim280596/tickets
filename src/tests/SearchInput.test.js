import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SearchInput } from '../components/SearchInput';
import { checkboxOptions } from '../consts.ts';

describe('Testing <SearchInput/>', () => {
  let searchinput;
  beforeAll(() => {
    searchinput = shallow(
      <SearchInput options={checkboxOptions} name="checkboxOptions" />
    );
  });
  it('SearchInput have rendered correctly', () => {
    expect(toJson(searchinput)).toMatchSnapshot();
  });
});
