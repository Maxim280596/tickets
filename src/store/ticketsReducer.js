const defaultState = {
  tickets: {}
}

export const SET_TICKETS = "SET_TICKETS"
export const FETCH_TICKETS = "FETCH_TICKETS"

export default function ticketsReducer(state = defaultState, action) {
  switch(action.type) {
      case SET_TICKETS:
          return {...state, tickets: action.payload}

          default:
            return state    
  }
  
}

export const setTickets = payload => ({type: SET_TICKETS, payload})
export const fetchTickets = () => ({type: FETCH_TICKETS})