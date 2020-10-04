import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducer from "./reducers";
import { watchServerRequests } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  sagaMiddleware.run(watchServerRequests);

  return store;
}
