"use client";

import React from 'react';
import styles from "./MoviesList.module.scss";
import { IMovie } from "@/app/models/IMovie";
import { useRouter } from "next/navigation";

interface MoviesListProps {
    movies: IMovie[];
    currentPage: number;
    title: string;
}

const MoviesList: React.FC<MoviesListProps> = ({ movies, currentPage, title }) => {
    const router = useRouter();

    const handleMovieClick = (movieId: number) => {
        router.push(`/movie/${movieId}`);
    };

    return (
        <div className={styles.page}>
            <h1>{title}</h1>
            <div className={styles.list}>
                {movies.map((movie) => (
                    <div
                        className={styles.item}
                        key={movie.id}
                        onClick={() => handleMovieClick(movie.id)} // Обработчик клика на карточке
                    >
                        <img
                            className={styles.img}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className={styles.info}>
                            <h3>{movie.title}</h3>
                            <span>Release Date: {movie.release_date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
