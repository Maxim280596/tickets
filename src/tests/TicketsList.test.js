import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TicketsList from '../components/TicketsList';

describe('Testing <TicketList/>', () => {
  // const initialState = { data: [],
  //   isLoaded: false,
  //   renderTickets: [],
  //   error: ''}
  const mockStore = configureStore()
  let props = {
    state:{
      data: [{price:1234}],
      isLoaded: false,
      renderTickets: [],
      error: ''
    }
  }
  let store;
  it('TicketsList have rendered correctly', ()=>{
    store = mockStore(props)
    const ticketslist = shallow(<Provider store={store}><TicketsList state={props.state} /></Provider>)
    expect(toJson(ticketslist)).toMatchSnapshot();
  })
})