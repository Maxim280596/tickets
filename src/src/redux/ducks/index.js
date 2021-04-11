import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import mainReducer, { rootSaga } from './ticketsReducer.ts';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  mainReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function* rootWatcher() {
  yield all([ rootSaga()]);
}

sagaMiddleware.run(rootWatcher);

export const getId = (state) => state.idReducer.searchId;
export const getStop = (state) => state.ticketsReducer.tickets.stop;
