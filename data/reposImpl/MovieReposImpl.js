import MovieRepos from '../../presention/repository/MovieRepos';
import { create } from 'apisauce';
import { moviesToState } from '../convertDataToState';
const api = create({ baseURL: 'https://api.androidhive.info/json', timeout: 30000, headers: {} });
/*
    - Implement interface class 
*/
export default class MovieReposImpl extends MovieRepos {
    
    getMovies() {
        return new Promise((resolve, reject) => {
            api.get(
                '/glide.json',
            ).then((response) => {
                return resolve(moviesToState(response))
            })
        });
    }

}