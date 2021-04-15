import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import {SearchInput} from '../components/SearchInput';
import {checkboxOptions} from '../consts.ts'

describe('Testing <SearchInput/>', () => {
  it('SearchInput have rendered correctly', ()=>{
    const searchinput = shallow(<SearchInput options={checkboxOptions} name="checkboxOptions" 
      />);
    expect(toJson(searchinput)).toMatchSnapshot();
  })
})

