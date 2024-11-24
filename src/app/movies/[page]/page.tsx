import { fetchPopularMovies } from '../../services/api';
import MoviesList from "@/app/components/MoviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";
import Pagination from "@/app/components/Pagination/Pagination";
import React from "react";

interface MoviesPageProps {
    params: {
        page: string;
    };
}

const MoviesPage = async ({ params }: MoviesPageProps) => {
    const currentPage = Number(params?.page) || 1;
    try {
        const movies: IMovie[] = await fetchPopularMovies(currentPage);
        if (movies){
            return (
                <div>
                    <MoviesList movies={movies} currentPage={currentPage} title={`Popular movies ${currentPage}`}/>
                    <Pagination currentPage={currentPage}/>
                </div>

            );
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        return <div>Error loading movies. Please try again later.</div>;
    }
};

export default MoviesPage;
