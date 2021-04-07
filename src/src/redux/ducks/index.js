import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import idReducer, { idWatcher } from './idReducer';
import ticketsReducer, { ticketsWatcher } from './ticketsReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  idReducer,
  ticketsReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function* rootWatcher() {
  yield all([idWatcher(), ticketsWatcher()]);
}

sagaMiddleware.run(rootWatcher);

export const getId = (state) => state.idReducer.searchId;
export const getStop = (state) => state.ticketsReducer.tickets.stop;
