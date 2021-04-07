const initialState = {
  tickets: [],
  loadingFinish: false,
  renderTickets: [],
};

export const SET_TICKETS = 'SET_TICKETS';
export const FETCH_TICKETS = 'FETCH_TICKETS';
export const UPDATE_TICKETS = 'UPDATE_TICKETS';
export const LOADING_FINISH = 'LOADING_FINISH';
export const RENDER_TICKETS = 'RENDER_TICKETS';

export const SMALL_PRICE = 'SMALL_PRICE';
export const FAST_TICKET = 'FAST_TICKET';
export const ONE_STOP = 'ONE_STOP';
export const ONE_STOP_FALSE = 'ONE_STOP_FALSE';
export const TWO_STOP = 'TWO_STOP';
export const THREE_STOP = 'THREE_STOP';
export const NO_STOP = 'NO_STOP';
export const ALL_STOP = 'ALL_STOP';

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload] };
    case RENDER_TICKETS:
      let renderTickets = state.tickets[0].tickets;
      return { ...state, renderTickets: [...renderTickets] };
    case UPDATE_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload] };
    case LOADING_FINISH:
      return { ...state, loadingFinish: action.payload };
    case SMALL_PRICE:
      let data = state;
      const filterTickets = state.renderTickets.sort(
        (a, b) => a.price - b.price
      );
      data.renderTickets = filterTickets;
      console.log(data);
      return { ...state, ...data };

    case FAST_TICKET:
      let dataFast = state;
      const filterFastTickets = state.renderTickets.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration
      );
      dataFast.renderTickets = filterFastTickets;
      console.log(dataFast);
      return { ...state, ...dataFast };

    case ALL_STOP:
      let allStop = state;
      const allStopsArr = state.tickets[0].tickets;
      allStop.renderTickets = allStopsArr;
      return { ...state, ...allStop };

    case ONE_STOP:
      let oneStop = state;
      const stopsArr = state.tickets[0].tickets.filter(
        (a) =>
          a.segments[0].stops.length === 1 && a.segments[1].stops.length === 1
      );

      oneStop.renderTickets = stopsArr;
      console.log(state, 99999);
      return { ...state, oneStop };

    case NO_STOP:
      let noStop = state;
      const noStopsArr = state.tickets[0].tickets.filter(
        (a) =>
          a.segments[0].stops.length === 0 && a.segments[1].stops.length === 0
      );

      noStop.renderTickets = noStopsArr;
      return { ...state, noStop };
    case TWO_STOP:
      let twoStop = state;
      const twoStopsArr = state.tickets[0].tickets.filter(
        (a) =>
          a.segments[0].stops.length === 2 && a.segments[1].stops.length === 2
      );

      twoStop.renderTickets = twoStopsArr;
      return { ...state, twoStop };
    case THREE_STOP:
      let threeStop = state;
      const threeStopsArr = state.tickets[0].tickets.filter(
        (a) =>
          a.segments[0].stops.length === 3 && a.segments[1].stops.length === 3
      );

      threeStop.renderTickets = threeStopsArr;
      return { ...state, threeStop };

    default:
      return state;
  }
}

export const setTickets = (payload) => ({ type: SET_TICKETS, payload });
export const renderTickets = (payload) => ({ type: RENDER_TICKETS, payload });
export const updateTickets = (payload) => ({ type: UPDATE_TICKETS, payload });
export const loadingFinish = (payload) => ({ type: LOADING_FINISH, payload });

export const filteringPrice = (payload) => ({ type: SMALL_PRICE, payload });
export const filteringFast = (payload) => ({ type: FAST_TICKET, payload });

export const filteringOneStop = (payload) => ({ type: ONE_STOP, payload });
export const filteringOneStopFalse = (payload) => ({
  type: ONE_STOP_FALSE,
  payload,
});

export const filteringTwoStop = (payload) => ({ type: TWO_STOP, payload });
export const filteringThreeStop = (payload) => ({ type: THREE_STOP, payload });
export const filteringNoStop = (payload) => ({ type: NO_STOP, payload });
export const filteringAllStop = (payload) => ({ type: ALL_STOP, payload });

export const fetchTickets = () => ({ type: FETCH_TICKETS });
