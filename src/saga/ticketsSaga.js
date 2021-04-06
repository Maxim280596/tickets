import { put, takeEvery, call, select } from 'redux-saga/effects';

import {
  FETCH_TICKETS,
  setTickets,
  updateTickets,
} from '../store/ticketsReducer';
import { getId, getStop } from '../store/index';

async function fetchTicketsFromApi(id) {
  let response = await fetch(
    `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
  );
  try {
    if (response.status === 500) {
      return (response = fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
      ));
    } else if (response.status === 404) {
    }
    return await response.json();
  } catch (e) {
    if (e === SyntaxError) {
      response = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
      );
      return await response.json();
    } else throw e;
  }
}

function* fetchTicketsWorker() {
  let id = yield select(getId);
  let stop = yield select(getStop);

  let data = yield call(fetchTicketsFromApi, id.searchId);
  yield put(setTickets(data));

  while (!stop) {
    const data = yield call(fetchTicketsFromApi, id.searchId);
    yield put(updateTickets(data));
  }
}

export function* ticketsWatcher() {
  yield takeEvery(FETCH_TICKETS, fetchTicketsWorker);
}
