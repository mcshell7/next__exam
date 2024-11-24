export interface IMovieDetails {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    genres: { id: number; name: string }[];
    poster_path: string;
    vote_average: number;
    runtime: number;
}