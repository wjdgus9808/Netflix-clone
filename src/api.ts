const API_KEY = "febe862b8558cd799158fdb1623686dc";
const BASE_PATH="https://api.themoviedb.org/3";


    export interface Dates {
        maximum: string;
        minimum: string;
    }

    export interface IMovie {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

    export interface IGetMoviesResult {
        dates: Dates;
        page: number;
        results: IMovie[];
        total_pages: number;
        total_results: number;
    }



export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response)=>response.json()
        );
}