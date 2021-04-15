import {successRequestAction, mainReducer} from '../redux/ducks/ticketsReduser';
import React from 'react'
it('good', () => {
  
 
  
  let action = successRequestAction([{1:1}])
  const state = {
    data: [],
  }


  let newState = mainReducer(state, action)
  expect(newState.data.length).toBe(1)

})
