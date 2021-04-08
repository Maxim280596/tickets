import { put, takeEvery, call } from 'redux-saga/effects';

import {fetchIdFromApi} from '../../../api'

export const initialState = {
  searchId: {},
};


export const SET_ID = 'searchId/SET_ID';
export const FETCH_ID = 'fetchId/FETCH_ID';

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




function* fetchIdWorker() {
  const data = yield call(fetchIdFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));

  yield put(setId(json));
}

export function* idWatcher() {
  yield takeEvery(FETCH_ID, fetchIdWorker);
}

