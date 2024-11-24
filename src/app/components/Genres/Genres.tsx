"use client";

import React from "react";
import { IGenres } from "@/app/models/IGenres";
import styles from "./genres.module.scss";

interface GenresProps {
    genres: IGenres[];
    onSelectGenre: (genreId: number) => void;
}

const Genres: React.FC<GenresProps> = ({ genres, onSelectGenre }) => (
    <div className={styles.list}>
        {genres.map((genre) => (
            <div
                key={genre.id}
                onClick={() => onSelectGenre(genre.id)}
                className={styles.item}
            >
                {genre.name}
            </div>
        ))}
    </div>
);

export default Genres;
