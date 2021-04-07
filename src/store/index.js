import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import idReducer from './idReducer';
import ticketsReducer from './ticketsReducer';
import { rootWatcher } from '../saga';

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

sagaMiddleware.run(rootWatcher);



export const getId = (state) => state.idReducer.searchId;
export const getStop = (state) => state.ticketsReducer.tickets.stop;

