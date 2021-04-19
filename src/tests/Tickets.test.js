import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Ticket } from '../components/Ticket';

const props = {
  price: '100',
  origin: 'MOW',
  destination: 'HKT',
  originBack: 'HKT',
  destinationBack: 'MOW',
  stops: '3',
  stopsBack: '2',
  stopsCity: 'KV,LG,HKT',
  stopsCityBack: 'KV,LG,HKT',
  departureDate: '12342',
  duration: '121323',
  departureDateBack: '232333',
  durationBack: '232',
};

describe('Testing rendering <Ticket/>', () => {
  it('should rendering Ticket with props', () => {
    const ticket = mount(<Ticket {...props} />);
    expect(toJson(ticket)).toMatchSnapshot();
  });
  it('should rendering Ticket correctly without props', () => {
    const ticket = mount(<Ticket />);
    expect(toJson(ticket)).toMatchSnapshot();
  });
});
