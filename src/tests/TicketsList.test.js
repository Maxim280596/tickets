import React from 'react';
import {render} from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TicketsList from '../components/TicketsList';

describe('Testing <TicketList/>', () => {
  const initialState = {data:[]}
  const mockStore = configureStore()
  let state = {data:[]}
  let store;
  it('TicketsList have rendered correctly', ()=>{
    store = mockStore(initialState)
    const ticketslist = render(<Provider store={store}><TicketsList state={state} /></Provider>)
    expect(toJson(ticketslist)).toMatchSnapshot();
  })
})