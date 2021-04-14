import React from 'react';
import {render} from 'enzyme';
import toJson from 'enzyme-to-json';

import Filter from '../components/Filter';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Testing <Filter/>', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store
  it('Filter have rendered correctly', ()=>{
    store = mockStore(initialState)
    const filter = render(<Provider store={store}><Filter/></Provider>);
    expect(toJson(filter)).toMatchSnapshot();  
  })
})