import { IMovie } from "@/app/models/IMovie";
import { IGenres } from "@/app/models/IGenres";

const API_KEY = process.env.TMDB_API_KEY!;
const BASE_URL = "https://api.themoviedb.org/3";
const HEADERS = {
    accept: "application/json",
};

// Универсальная функция для работы с API
export const fetchFromAPI = async (endpoint: string, params: Record<string, string> = {}): Promise<any> => {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    url.search = new URLSearchParams({ api_key: API_KEY, ...params }).toString();

    try {
        const response = await fetch(url.toString(), { method: "GET", headers: HEADERS });

        if (!response.ok) {
            throw new Error(`Failed to fetch from ${endpoint}: ${response.status} ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error in fetching data from ${endpoint}:`, error);
        throw error; // Перебрасываем ошибку дальше для обработки на уровне компонента
    }
};

// Функция для получения популярных фильмов
export const fetchPopularMovies = async (page: number = 1): Promise<IMovie[]> => {
    const data = await fetchFromAPI("discover/movie", {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: page.toString(),
        sort_by: "popularity.desc",
    });

    return data.results as IMovie[];
};

// Функция для получения списка жанров
export const getGenres = async (): Promise<IGenres[]> => {
    const data = await fetchFromAPI("genre/movie/list", {
        language: "en-US"
    });

    console.log("Fetched genres:", data); // Лог для отладки

    return data.genres as IGenres[];
};

// Функция для получения фильмов по жанру
export const fetchMoviesByGenre = async (genreId: number, page: number = 1): Promise<IMovie[]> => {
    const data = await fetchFromAPI("discover/movie", {
        with_genres: genreId.toString(),
        page: page.toString(),
        language: "en-US",
        include_adult: "false",
        include_video: "false",
        sort_by: "popularity.desc",
    });

    return data.results as IMovie[];
};

export const fetchMovieDetails = async (movieId: number) => {
    return fetchFromAPI(`movie/${movieId}`, {
        language: "en-US",
    });
};

export const searchMovies = async (query: string, page: number = 1): Promise<IMovie[]> => {
    const data = await fetchFromAPI("search/movie", {
        query,
        page: page.toString(),
        language: "en-US",
        include_adult: "false",
    });

    return data.results as IMovie[];
};