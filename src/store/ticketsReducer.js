const initialState = {
  tickets: [],
  renderTickets: [],
  loadingFinish: false
};

export const SET_TICKETS = 'SET_TICKETS';
export const FETCH_TICKETS = 'FETCH_TICKETS';
export const UPDATE_TICKETS = 'UPDATE_TICKETS';
export const LOADING_FINISH = 'LOADING_FINISH';
export const SMALL_PRICE ='SMALL_PRICE';
export const FAST_TICKET ='FAST_TICKET';


export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, action.payload] };
    case UPDATE_TICKETS:
      console.log(action.payload);
      return { ...state, tickets: [...state.tickets, action.payload] };
      case LOADING_FINISH:
        console.log(action.payload);
        return { ...state, loadingFinish: action.payload };  
        case SMALL_PRICE:
         
          console.log(state.tickets[0].tickets)
          console.log(state.tickets[0].tickets.sort((a,b) => a.price - b.price))
          let data = state;
          const filterTickets = state.tickets[0].tickets.sort((a,b) => a.price - b.price);
          data.tickets[0].tickets = filterTickets
          console.log(data)
          return { ...state, ...data}; 
        case FAST_TICKET: 
              let dataFast = state;
              const filterFastTickets = state.tickets[0].tickets.sort((a,b) => a.segments[0].duration - b.segments[0].duration);
              // state.tickects[0].tickets.sort((a,b) => console.log(a
              dataFast.tickets[0].tickets = filterFastTickets
              console.log(dataFast)
          return { ...state, ...dataFast}
          
    default:
      return state;
  }
}

export const setTickets = (payload) => ({ type: SET_TICKETS, payload });
export const updateTickets = (payload) => ({ type: UPDATE_TICKETS, payload });
export const loadingFinish = (payload) => ({ type: LOADING_FINISH, payload });
export const filteringPrice = (payload) => ({ type: SMALL_PRICE, payload });
export const filteringFast = (payload) => ({ type: FAST_TICKET, payload });
export const fetchTickets = () => ({ type: FETCH_TICKETS });
