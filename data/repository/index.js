import MovieRepos from './MovieRepos';
import MovieReposImpl from '../reposImpl/MovieReposImpl';
import {Container} from 'constitute';

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