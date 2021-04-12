import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import mainReducer, { rootSaga } from './ticketsReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  mainReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

function* rootWatcher() {
  yield all([rootSaga()]);
}

sagaMiddleware.run(rootWatcher);
