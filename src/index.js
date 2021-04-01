import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
// import reducers from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  reducers  from './reducer';
import logger from 'redux-logger';
import { watchLoadData, watchLoadTickets } from './sagas';



const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchLoadData)
sagaMiddleware.run(watchLoadTickets)



ReactDOM.render(
  <Provider store={store}><React.StrictMode><App/></React.StrictMode></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
