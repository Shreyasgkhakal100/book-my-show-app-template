import { IMovie } from '../types';
export type MoviesTableProps = {
    movies: IMovie[];
};

export type AddMovieProps = {
    getMovies: any;
};
export interface Movie {
    title: string;
    duration: number;
}
