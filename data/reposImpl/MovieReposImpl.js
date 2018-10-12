import MovieRepos from '../repository/MovieRepos';
import { create } from 'apisauce';
const api = create({ baseURL: 'https://api.androidhive.info/json', timeout: 30000, headers: {} });

export default class MovieReposImpl extends MovieRepos {
    
    getMovies() {
        return new Promise((resolve, reject) => {
            api.get(
                '/glide.json',
            ).then((response) => {
                return resolve(response)
            })
        });
    }

}