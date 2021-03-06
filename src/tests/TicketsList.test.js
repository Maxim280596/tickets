import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TicketsList from '../components/TicketsList';

const actionState = [
  {
    price: 30546,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-04-24T02:20:00.000Z',
        stops: ['HKG', 'BKK', 'AUH'],
        duration: 1769,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-05-14T09:20:00.000Z',
        stops: [],
        duration: 1196,
      },
    ],
  },
  {
    price: 79420,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-04-24T12:36:00.000Z',
        stops: ['KUL', 'AUH'],
        duration: 792,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-05-14T02:04:00.000Z',
        stops: ['DXB', 'KUL'],
        duration: 1149,
      },
    ],
  },
  {
    price: 45377,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-04-24T12:28:00.000Z',
        stops: ['DXB'],
        duration: 889,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-05-14T16:38:00.000Z',
        stops: ['IST', 'AUH', 'SIN'],
        duration: 639,
      },
    ],
  },
];

let state = {
  data: [...actionState],
  isLoaded: true,
  renderTickets: [...actionState],
  error: '',
};

describe('Testing <TicketList/>', () => {
  let setUp;
  beforeEach(() => {
    const mockStore = configureStore();
    setUp = (state) =>
      shallow(
        <Provider store={mockStore(state)}>
          <TicketsList {...state} />
        </Provider>
      );
  });

  it('should TicketsList have rendered correctly', () => {
    const ticketslist = setUp(state);
    expect(toJson(ticketslist)).toMatchSnapshot();
  });
});

