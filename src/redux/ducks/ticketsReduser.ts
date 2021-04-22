import { put, takeEvery, call, all } from 'typed-redux-saga';

import { RootState } from './../../types';
import { sortByPrice, sortByDuration, filterByStops } from './../../helpers';
import { getId, getTickets } from '../../api';

const initialState: RootState = {
  data: [],
  isLoaded: false,
  renderTickets: [],
  error: ' ',
};

const FAIL_REQUEST = 'tickets/tickets/FAIL_REQUEST';
const SEND_REQUEST = 'tickets/tickets/SEND_REQUEST';
const SUCCESSFUL_REQUEST = 'tickets/tickets/SUCCESSFUL_REQUEST';
const RENDER_TICKETS = 'tickets/render/RENDER_TICKETS';
const FILTER_TICKETS = 'filter/one/FILTER_TICKETS';
const SMALL_PRICE = 'sort/smallSMALL_PRICE';
const FAST_TICKET = 'sort/fast/FAST_TICKET';

export default function mainReducer(
  state = initialState,
  action: { type: string; data: []; payload: [] }
) {
  switch (action.type) {
    case SUCCESSFUL_REQUEST:
      return { ...state, data: action.data, isLoaded: true };
    case FAIL_REQUEST:
      return { ...state, error: 'NO DATA' };
    case RENDER_TICKETS:
      let renderTicket = state.data;
      return { ...state, renderTickets: [...renderTicket] };
    case FILTER_TICKETS:
      let filteredArrayTickets = state.data;
      let filterTickets: never[] = [];
      let checkedCheckbox = action.payload;
      filterTickets = filterByStops(
        checkedCheckbox,
        filterTickets,
        filteredArrayTickets
      );
      return { ...state, renderTickets: [...filterTickets] };
    case SMALL_PRICE:
      let data = state;
      let sortArrByPrice = state.renderTickets;
      const sortPriceTickets = sortByPrice(sortArrByPrice);
      data.renderTickets = sortPriceTickets;
      return { ...state, ...data };
    case FAST_TICKET:
      let dataFast = state;
      let sortArrByDuration = state.renderTickets;
      const filterFastTickets = sortByDuration(sortArrByDuration);
      dataFast.renderTickets = filterFastTickets;
      return { ...state, ...dataFast };
    default:
      return state;
  }
}

export const renderTicket = () => ({ type: RENDER_TICKETS });
export const filteringPrice = () => ({ type: SMALL_PRICE });
export const filteringFast = () => ({ type: FAST_TICKET });
export const asyncSendRequestAction = () => ({ type: SEND_REQUEST });
export const filterTickets = (payload: {}) => ({
  type: FILTER_TICKETS,
  payload,
});
export const failRequestAction = (error: String) => ({
  type: FAIL_REQUEST,
  error,
});
export const successRequestAction = (data: []) => ({
  type: SUCCESSFUL_REQUEST,
  data,
});
export function* sendRequest() {
  yield takeEvery(SEND_REQUEST, fetchTicketsAsync);
}
export function* rootSaga() {
  yield all([sendRequest()]);
}

export function* fetchTicketsAsync() {
  try {
    const id: ReturnType<typeof getId> = yield call(() => getId());
    const data: [] = yield call(() => getTickets(id));
    yield put(successRequestAction(data));
    if (data) {
      yield put(renderTicket());
    }
  } catch (error) {
    yield put(failRequestAction(error));
  }
}
