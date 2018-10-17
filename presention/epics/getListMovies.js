import * as ActionType from '../actions/type';
import { getDataSuccess, getDataFailure } from '../actions';
import { pipe, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {getMovieRepos} from '../../common/CommonDataManager';

export const loadDataEpic = action$ => {
    return action$.pipe(
        ofType(ActionType.FETCHING_DATA),
        mergeMap((action) => from(getMovieRepos().getMovies())),
        map(reponse => reponse.ok ? getDataSuccess(reponse.data) : getDataFailure(reponse.originalError))
    );
}


