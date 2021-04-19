import mainReducer, {
  failRequestAction,
  filteringFast,
  filteringPrice,
  filterTickets,
  renderTicket,
  successRequestAction,
} from '../redux/ducks/ticketsReduser';

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

const filterAction = [
  { id: 1, path: '/', value: 'Все', checked: false, length: 10 },
  {
    id: 2,
    path: '/no_stops',
    value: 'Без пересадки',
    checked: false,
    length: 0,
  },
  { id: 3, path: '/one_stop', value: '1 пересадка', checked: false, length: 1 },
  {
    id: 4,
    path: '/two_stops',
    value: '2 пересадки',
    checked: true,
    length: 2,
  },
  {
    id: 5,
    path: '/three_stops',
    value: '3 пересадки',
    checked: false,
    length: 3,
  },
];

const state = {
  data: [],
  isLoaded: false,
  renderTickets: [],
  error: ' ',
};

it('should be test data added in the state', () => {
  let action = successRequestAction(actionState);
  let newState = mainReducer(state, action);
  expect(newState.data.length).toBe(3);
  expect(newState.isLoaded).toBe(true);
});

it('should be test error = "NO DATA"', () => {
  let action = failRequestAction('404');
  let newState = mainReducer(state, action);
  expect(newState.error).toBe('NO DATA');
});

it('should be added data in renderTickets', () => {
  let action = renderTicket();
  let newState = mainReducer(state, action);
  expect(newState.renderTickets).toEqual(newState.data);
});

const filterState = {
  renderTickets: actionState,
  data: actionState,
};

it('should be filterTickets add in the state one ticket', () => {
  let action = filterTickets(filterAction);
  let newState = mainReducer(filterState, action);
  expect(newState.renderTickets.length).toBe(1);
});

it('should be filteringPrice add ticket in first position', () => {
  let action = filteringPrice;
  let newState = mainReducer(filterState, action);
  expect(newState.renderTickets[0].price).toBe(30546);
});

it('should be first ticket duration must be 1789', () => {
  let action = filteringFast;
  let newState = mainReducer(filterState, action);
  expect(newState.renderTickets[0].segments[0].duration).toBe(1769);
});
