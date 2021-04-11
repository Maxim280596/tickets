import { put, takeEvery, call, all } from 'typed-redux-saga';

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

export default function mainReducer(state = initialState, action:any) {
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
      let arr:any[] = [];
      action.payload.map((item:any) => {
        if (item.checked) {
          arr = filteredArr.filter(
            (a:any) =>
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
      
      return { ...state, renderTickets: [...arr] };

    case SMALL_PRICE:
      let data = state;
      const filterTickets = state.renderTickets.sort(
        (a:any, b:any) => a.price - b.price
      );
      data.renderTickets = filterTickets;
      console.log(data);
      return { ...state, ...data };

    case FAST_TICKET:
      let dataFast = state;
      const filterFastTickets = state.renderTickets.sort(
        (a:any, b:any) => a.segments[0].duration - b.segments[0].duration
      );
      dataFast.renderTickets = filterFastTickets;
      console.log(dataFast);
      return { ...state, ...dataFast };

    default:
      return state;
  }
}

export const filterTickets = (payload:any) => ({ type: FILTER_TICKETS, payload});
// const renderTickets: (payload: any) => {
//   type: string;
//   payload: any;
// }
export const renderTickets = () => ({ type: RENDER_TICKETS });
export const filteringPrice = (payload:any) => ({ type: SMALL_PRICE, payload });
export const filteringFast = (payload:any) => ({ type: FAST_TICKET, payload });

export function failRequestAction(error:any) {
  return { type: FAIL_REQUEST, error };
}

export function successRequestAction(data:any[]) {
  return { type: SUCCESSFUL_REQUEST, data };
}

export function asyncSendRequestAction() {
  return { type: SEND_REQUEST, };
}

export function* sendRequest() {
  yield takeEvery(SEND_REQUEST, fetchTicketsAsync);
}

export function* rootSaga() {
  yield all([sendRequest()]);
}

type id = any
      

type data = any
export function* fetchTicketsAsync (): Generator<
id,
data
>  {
  try {
    const id: any = yield call(() => 
      fetch(SEARCH_ID_URL).then((data) => data.json())
    );
    const data: any = yield call(() =>
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
