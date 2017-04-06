/* eslint-disable no-underscore-dangle */

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // const store = createStore(
  //   reducer,
  //   initialState,
  //   applyMiddleware(sagaMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // );

  sagaMiddleware.run(saga);

  return store;
}
