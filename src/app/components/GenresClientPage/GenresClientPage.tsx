"use client";

import React, { useState } from "react";
import { IGenres } from "@/app/models/IGenres";
import { IMovie } from "@/app/models/IMovie";
import { useRouter, useSearchParams } from "next/navigation";
import Genres from "@/app/components/Genres/Genres";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import styles from "./GenreClientPage.module.scss";
import clsx from "clsx";

interface GenresClientPageProps {
    genres: IGenres[];
    movies: IMovie[];
    initialGenreId: number;
    initialPage: number;
}

const GenresClientPage: React.FC<GenresClientPageProps> = ({ genres, movies, initialGenreId, initialPage }) => {
    const [currentGenre, setCurrentGenre] = useState<number>(initialGenreId);
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const router = useRouter();

    const handleGenreSelection = (genreId: number) => {
        setCurrentGenre(genreId);
        setCurrentPage(1); // Сбрасываем на первую страницу
        router.push(`/genres?genreId=${genreId}&page=1`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.push(`/genres?genreId=${currentGenre}&page=${page}`);
    };

    return (
        <div className={styles.flex}>
            <div className={styles.genres}>
                <Genres genres={genres} onSelectGenre={handleGenreSelection} />
            </div>
            <div className={styles.movies}>
                <MoviesList movies={movies} currentPage={currentPage} title={"Movies by genre"} />
                <div className={styles.pagination}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage <= 1}
                        className={clsx(styles.link,currentPage === 1 ? styles.disabled : styles.active)}
                    >
                        Previous
                    </button>
                    <button   onClick={() => handlePageChange(currentPage + 1)} className={styles.link}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenresClientPage;
