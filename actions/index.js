import * as ActionType from './type';

export const getData = () => {
  return {
    type: ActionType.FETCHING_DATA
  }
}

export const getDataSuccess = data => {
  return {
    type: ActionType.FETCHING_DATA_SUCCESS,
    data,
  }
}

export const getDataFailure = error => {
  return {
    type: ActionType.FETCHING_DATA_FAILURE,
    errorMessage: error
  }
}