import { all } from 'redux-saga/effects';

import { idWatcher } from './idSaga';
import { ticketsWatcher } from './ticketsSaga';

export function* rootWatcher() {
  yield all([idWatcher(), ticketsWatcher()]);
}
