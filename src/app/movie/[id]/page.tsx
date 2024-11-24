import React from "react";
import { fetchFromAPI } from "@/app/services/api";
import styles from "./MovieDetailsPage.module.scss";
import {IMovieDetails} from "@/app/models/IMovieDetails";

interface MovieDetailsPageProps {
    params: { id: string };
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = async ({ params }) => {
    const movieId = params.id;

    const fetchMovieDetails = async (id: string): Promise<IMovieDetails> => {
        const data = await fetchFromAPI(`movie/${id}`, { language: "en-US" });
        return data;
    };

    const movie = await fetchMovieDetails(movieId);

    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div className={styles.details}>
                <h1>{movie.title}</h1>
                <p><b>Release Date:</b> {movie.release_date}</p>
                <p><b>Genres:</b> {movie.genres.map((genre) => genre.name).join(", ")}</p>
                <p><b>Runtime:</b> {movie.runtime} minutes</p>
                <p><b>Rating:</b> {movie.vote_average}/10</p>
                <p><b>Overview:</b> {movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
