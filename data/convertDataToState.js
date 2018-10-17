import { Movie } from "../presention/reducers/movies";
// convert data api to data view that view use
// => when update api we only update this file and we dont update all view file
export const moviesToState = (reponse) => {
    if(reponse.ok){
        return ({
            ok: true,
            data: reponse.data.map( (movie) => {
                return new Movie(movie.name,movie.url.medium,movie.timestamp);
            })
        })
    }
    return reponse;
}