import { fetchMoviesByGenre, getGenres } from "@/app/services/api";
import GenresClientPage from "@/app/components/GenresClientPage/GenresClientPage";

export default async function Home({ searchParams }: { searchParams: { genreId?: string; page?: string } }) {
    const genres = await getGenres();
    const genreId = Number(searchParams.genreId || genres[0].id); // По умолчанию первый жанр
    const page = Number(searchParams.page || 1); // По умолчанию первая страница

    const movies = await fetchMoviesByGenre(genreId, page);

    return <GenresClientPage genres={genres} movies={movies} initialGenreId={genreId} initialPage={page} />;
}
