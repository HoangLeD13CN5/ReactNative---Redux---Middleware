import { combineEpics } from 'redux-observable';
import {loadDataEpic} from './getListMovies';
export default rootEpic = combineEpics(
  loadDataEpic,
);