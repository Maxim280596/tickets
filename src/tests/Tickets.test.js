import React from 'react';
import {render} from 'enzyme';
import toJson from 'enzyme-to-json';

import {Ticket} from '../components/Ticket';

describe('Testing <Ticket/>', () => {
  it('Logo have rendered correctly', ()=>{
    const ticket = render(<Ticket price= '100'
      origin='MOW'
      destination='HKT'
      originBack='HKT'
      destinationBack='MOW'
      stops='3'
      stopsBack='2'
      stopsCity='KV,LG,HKT'
      stopsCityBack='KV,LG,HKT'
      departureDate='12342'
      duration='121323'
      departureDateBack='232333'
      durationBack='232'/>);
    expect(toJson(ticket)).toMatchSnapshot();
  })
})