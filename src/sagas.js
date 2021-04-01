import {takeEvery, put, call} from 'redux-saga/effects';
import { LOAD_DATA, LOAD_TICKETS, putData, putTickets } from './actions';

function fetchData() {
  return fetch('https://front-test.beta.aviasales.ru/search')
  .then(response => response.json())
  
}

function* workerLoadData() {
   const data = yield call(fetchData)
    yield put(putData(data))
}


export function* watchLoadData () {
  yield takeEvery(LOAD_DATA, workerLoadData )
}

function fetchTickets(id) {
  
  return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
  .then(response => response.json())
  
}

function* workerLoadTickets() {
  const tickets = yield call(fetchTickets)
   yield put(putTickets(tickets))
}


export function* watchLoadTickets () {
 yield takeEvery(LOAD_TICKETS, workerLoadTickets )
}