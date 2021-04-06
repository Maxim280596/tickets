const initialState = {
  tickets: [],
};

export const SET_TICKETS = 'SET_TICKETS';
export const FETCH_TICKETS = 'FETCH_TICKETS';
export const UPDATE_TICKETS = 'UPDATE_TICKETS';

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload] };
    case UPDATE_TICKETS:
      console.log(action.payload);
      return { ...state, tickets: [...state.tickets, action.payload] };

    default:
      return state;
  }
}

export const setTickets = (payload) => ({ type: SET_TICKETS, payload });
export const updateTickets = (payload) => ({ type: UPDATE_TICKETS, payload });
export const fetchTickets = () => ({ type: FETCH_TICKETS });
