import * as ActionType from '../actions/type';

const initialMovies = {
    movies: [],
    isFetching: false,
    error: false
  }

export class Movie {
    constructor(name,url,timestamp){
        this.name = name;
        this.url = url;
        this.timestamp = timestamp;
    }
}

const moviesReducer = (state = initialMovies, action) => {
    switch (action.type) {
        case ActionType.FETCHING_DATA:
            return {
                ...state,
                movies: [],
                isFetching: true
            };
        case ActionType.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movies: action.data
            }
        case ActionType.FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state;
    }
};

export default moviesReducer;