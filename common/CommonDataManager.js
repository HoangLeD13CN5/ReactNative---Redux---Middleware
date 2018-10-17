import MovieRepos from '../presention/repository/MovieRepos';
import MovieReposImpl from '../data/reposImpl/MovieReposImpl';
import {Container} from 'constitute';
// DI: repository with class implements this repository
export class CommonDataManager {
    static myInstance = null;
    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }
    
    constructor(){
        this.container = new Container();
        this.container.bindAlias(MovieRepos, MovieReposImpl);
    }
    
    getContainer(){
        return this.container;
    }
}

export const getMovieRepos:MovieRepos = () => {
    return CommonDataManager.getInstance().getContainer().constitute(MovieRepos);
}