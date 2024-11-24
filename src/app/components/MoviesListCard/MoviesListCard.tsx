"use client";

import React from "react";
import { IMovie } from "@/app/models/IMovie";

interface MoviesListCardProps {
    movie: IMovie;
}

const MoviesListCard: React.FC<MoviesListCardProps> = ({ movie }) => {
    return (
        <div></div>
    );
};

export default MoviesListCard;
