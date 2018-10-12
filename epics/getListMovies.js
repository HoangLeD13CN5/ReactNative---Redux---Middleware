import * as ActionType from '../actions/type';
import { getDataSuccess, getDataFailure } from '../actions';
import { pipe, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { getListMoviesApi } from '../data/movies_api';
import { ofType } from 'redux-observable';

export const loadDataEpic = action$ => {
    return action$.pipe(
        ofType(ActionType.FETCHING_DATA),
        mergeMap((action) => from(getListMoviesApi())),
        map(reponse => reponse.ok ? getDataSuccess(reponse.data) : getDataFailure(reponse.originalError))
    )
}


