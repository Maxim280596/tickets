import { put, takeEvery, call } from 'redux-saga/effects';

import { FETCH_ID, setId } from '../store/idReducer';

const fetchIdFromApi = () =>
  fetch('https://front-test.beta.aviasales.ru/search');

function* fetchIdWorker() {
  const data = yield call(fetchIdFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));

  yield put(setId(json));
}

export function* idWatcher() {
  yield takeEvery(FETCH_ID, fetchIdWorker);
}
