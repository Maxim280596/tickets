import {combineReducers} from 'redux'
import {PUT_DATA, LOAD_TICKETS} from './actions';


const initialState = {
  searchId: {},
  
}

 const reducer = (state = initialState, action) => {
  if (action.type === PUT_DATA) {
    return {
      ...state,
      searchId: action.payload
    }
  } 
  
  return state
}

export const ticketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return ([...state, ...action.payload.tickets])
        
         
      
      default:
        return state; 
}

}

export default combineReducers({
  reducer, ticketsReducer
});