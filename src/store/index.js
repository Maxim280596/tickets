import {applyMiddleware, combineReducers, createStore} from "redux";
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

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)