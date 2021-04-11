import { put, takeEvery, call, all } from 'redux-saga/effects';

import { SEARCH_ID_URL, SEARCH_TICKETS } from '../../../api';

const initialState = {
  data: [],
  isLoaded: false,
  renderTickets: [],
  error: ' ',
};

const FAIL_REQUEST = 'tickets/tickets/FAIL_REQUEST';
const SEND_REQUEST = 'tickets/tickets/SEND_REQUEST';
const SUCCESSFUL_REQUEST = 'tickets/tickets/SUCCESSFUL_REQUEST';
export const RENDER_TICKETS = 'tickets/render/RENDER_TICKETS';
export const FILTER_TICKETS = 'filter/one/FILTER_TICKETS';
export const SMALL_PRICE = 'sort/smallSMALL_PRICE';
export const FAST_TICKET = 'sort/fast/FAST_TICKET';

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESSFUL_REQUEST:
      return { ...state, data: action.data, isLoaded: true };
    case FAIL_REQUEST:
      return { ...state, error: 'NO DATA' };
    case RENDER_TICKETS:
      let renderTicket = state.data;
      console.log(state, 9999);
      return { ...state, renderTickets: [...renderTicket] };
    case FILTER_TICKETS:
      console.log(action.payload);
      let filteredArr = state.data;
      let arr = [];
      action.payload.map((item) => {
        if (item.checked) {
          arr = filteredArr.filter(
            (a) =>
              a.segments[0].stops.length === item.length &&
              a.segments[1].stops.length === item.length
          );
          console.log(arr);
        }
        if (item.checked && item.length === 10) {
          arr = state.data;
        }

        return arr;
      });
      filteredArr = arr;
      return { ...state, renderTickets: [...arr] };

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

    default:
      return state;
  }
}

export const filterTickets = (payload) => ({ type: FILTER_TICKETS, payload });
export const renderTickets = (payload) => ({ type: RENDER_TICKETS, payload });
export const filteringPrice = (payload) => ({ type: SMALL_PRICE, payload });
export const filteringFast = (payload) => ({ type: FAST_TICKET, payload });

export function failRequestAction(error) {
  return { type: FAIL_REQUEST, error };
}

export function successRequestAction(data) {
  return { type: SUCCESSFUL_REQUEST, data };
}

export function asyncSendRequestAction(pathname) {
  return { type: SEND_REQUEST, pathname };
}

export function* sendRequest() {
  yield takeEvery(SEND_REQUEST, fetchTicketsAsync);
}

export function* rootSaga() {
  yield all([sendRequest()]);
}

export function* fetchTicketsAsync() {
  try {
    const id = yield call(() =>
      fetch(SEARCH_ID_URL).then((data) => data.json())
    );
    const data = yield call(() =>
      fetch(SEARCH_TICKETS + id.searchId)
        .then((data) => data.json())
        .then((response) => response.tickets)
    );

    yield put(successRequestAction(data));

    if (data) {
      yield put(renderTickets());
    }
  } catch (error) {
    yield put(failRequestAction(error));
  }
}
