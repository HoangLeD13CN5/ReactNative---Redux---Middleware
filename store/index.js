import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic  from '../epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
  epicMiddleware.run(rootEpic);
  return store;
}
