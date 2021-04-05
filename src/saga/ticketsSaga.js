import {put, takeEvery, call,select} from "redux-saga/effects"
import {FETCH_TICKETS, setTickets} from "../store/ticketsReducer";


function fetchTicketsFromApi () {
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=`)
 
} 


function* fetchTicketsWorker() {
  
  
    const data = yield call(fetchTicketsFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setTickets(json))
  
}

export function* ticketsWatcher() {
    yield takeEvery(FETCH_TICKETS,  fetchTicketsWorker)
}