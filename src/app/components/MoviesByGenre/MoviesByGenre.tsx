import {IMovie} from "@/app/models/IMovie";
import {fetchMoviesByGenre} from "@/app/services/api";

export const MoviesByGenre = async (genreId: number, page: number): Promise<IMovie[]> => {
    return await fetchMoviesByGenre(genreId, page);
};
