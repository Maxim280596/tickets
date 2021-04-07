export const initialState = {
  searchId: {},
};

export const SET_ID = 'SET_ID';
export const FETCH_ID = 'FETCH_ID';

export default function idReducer(state = { initialState }, action) {
  switch (action.type) {
    case SET_ID:
      return { ...state, searchId: action.payload };

    default:
      return state;
  }
}

export const setId = (payload) => ({ type: SET_ID, payload });
export const fetchId = () => ({ type: FETCH_ID });
