import { sortByPrice, sortByDuration, filterByStops } from './../../helpers';
import { put, takeEvery, call, all } from 'typed-redux-saga';

import { getId, getTickets} from '../../api';

const initialState: {
  data: [];
  isLoaded: boolean;
  renderTickets: [];
  error: string;
} = {
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
      let filterTickets:never[] = [];
      let checkedCheckbox = action.payload;
      filterTickets = filterByStops(checkedCheckbox, filterTickets, filteredArrayTickets)
      // checkedCheckbox.map((item: { checked: Boolean; length: Number }) => {
      //   if (item.checked) {
      //     filterTickets = filteredArrayTickets.filter(
      //       (a: any) =>
      //         a.segments[0].stops.length === item.length &&
      //         a.segments[1].stops.length === item.length
      //     );
      //   }
      //   if (item.checked && item.length === 10) {
      //     filterTickets = filteredArrayTickets;
      //   }
      //   return filterTickets;
      // });
      return { ...state, renderTickets: [...filterTickets] };
    case SMALL_PRICE:
      let data = state;
      let sortArrByPrice = state.renderTickets
      const sortPriceTickets = sortByPrice(sortArrByPrice);
      data.renderTickets = sortPriceTickets;
      return { ...state, ...data };

    case FAST_TICKET:
      let dataFast = state;
      let sortArrByDuration = state.renderTickets
      const filterFastTickets = sortByDuration(sortArrByDuration)
      dataFast.renderTickets = filterFastTickets;
      return { ...state, ...dataFast };

    default:
      return state;
  }
}

export const filterTickets = (payload: {}) => ({
  type: FILTER_TICKETS,
  payload,
});
export const renderTickets = () => ({ type: RENDER_TICKETS });
export const filteringPrice = () => ({ type: SMALL_PRICE });
export const filteringFast = () => ({ type: FAST_TICKET });

export function failRequestAction(error: String) {
  return { type: FAIL_REQUEST, error };
}

export function successRequestAction(data: []) {
  return { type: SUCCESSFUL_REQUEST, data };
}

export function asyncSendRequestAction() {
  return { type: SEND_REQUEST };
}

export function* sendRequest() {
  yield takeEvery(SEND_REQUEST, fetchTicketsAsync);
}

export function* rootSaga() {
  yield all([sendRequest()]);
}

type id = any;
type data = any;

export function* fetchTicketsAsync(): Generator<id, data> {
  try {
    const id:any = yield call(() => getId());
    const data: any = yield call(() => getTickets(id));
    yield put(successRequestAction(data));
    if (data) {
      yield put(renderTickets());
    }
  } catch (error) {
    yield put(failRequestAction(error));
  }
}
