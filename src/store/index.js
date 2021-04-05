import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import idReducer from "./idReducer";
import ticketsReducer from './ticketsReducer'
import createSagaMiddleware from 'redux-saga'
// import {countWatcher} from "../saga/countSaga";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    idReducer,
    ticketsReducer
    
})

export const store = createStore(rootReducer, compose( applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))



sagaMiddleware.run(rootWatcher)

export const getId = (state) => state.idReducer.searchId
export const getStop = (state) => state.ticketsReducer.tickets.stop