import { API_ENV } from "./env-config";
import { MediaType } from "./types/local-type/media";

const API_URL = API_ENV.apiUrl;
const API_KEY = "api_key=" + API_ENV.apiKey;
const LANGUAGE = "language=es";

/* LIST OF MOVIES */
export const getUrlListOfMovie = (type: string) =>
  `${API_URL}/movie/${type}?${API_KEY}&${LANGUAGE}`;
export const getUrlListOfSerie = (type: string) =>
  `${API_URL}/tv/${type}?${API_KEY}&${LANGUAGE}`;

/* URL PATH TO GET AN IMAGE */
export const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";

/* GET AUDIOVISUAL MEDIA BY GENRE */

//
export const URL_GET_GENRES_FOR = (type: MediaType) =>
  `${API_URL}/genre/${type}/list?${API_KEY}&${LANGUAGE}`;

// TV
export const URL_ENABLES_GENRES = (genreId: string) =>
  `${API_URL}/Id/${genreId}/list?${API_KEY}&es-ES`;

export const URL_MOVIES_BY_GENRE = (genreId: number) =>
  `${API_URL}/genre/${genreId}/movies?${API_KEY}&${LANGUAGE}`;

/* OPTIONS FOR EACH 'GET' REQUEST */
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_ENV.headerAuthentication}`,
  },
};

/* FILTERING AUDIOVISUAL MEDIA */

export function URL_FILTER_SERIES({ year, genre, rating }) {
  if (year === "todos" && genre !== "todos" && rating !== "10") {
    return `https://api.themoviedb.org/3/discover/tv?${API_KEY}&es-ES&sort_by=popularity.desc&with_genres=${genre}&vote_average.gte=${rating}`;
  }
  if (year !== "todos" && genre === "todos" && rating !== "10") {
    return `https://api.themoviedb.org/3/discover/tv?${API_KEY}&es-ES&sort_by=popularity.desc&first_air_date_year=${year}&vote_average.gte=${rating}`;
  }
  if (year !== "todos" && genre !== "todos" && rating === "10") {
    return `https://api.themoviedb.org/3/discover/tv?${API_KEY}&es-ES&sort_by=popularity.desc&with_genres=${genre}&first_air_date_year=${year}`;
  }
  if (year !== "todos" && genre !== "todos" && rating !== "10") {
    return `https://api.themoviedb.org/3/discover/tv?${API_KEY}&es-ES&sort_by=popularity.desc&with_genres=${genre}&first_air_date_year=${year}&vote_average.gte=${rating}`;
  }
}

export function URL_FILTER_MOVIES({ year, genre, rating }) {
  if (year === "todos" && genre !== "todos" && rating !== "10") {
    return `https://api.themoviedb.org/3/discover/movie?${API_KEY}&es-ES&sort_by=popularity.desc&with_genres=${genre}&vote_average.gte=${rating}`;
  }
  if (year !== "todos" && genre === "todos" && rating !== "10") {
    return `https://api.themoviedb.org/3/discover/movie?${API_KEY}&es-ES&sort_by=popularity.desc&primary_release_year=${year}&vote_average.gte=${rating}`;
  }
  if (year !== "todos" && genre !== "todos" && rating === "10") {
    return `https://api.themoviedb.org/3/discover/movie?${API_KEY}&es-ES&sort_by=popularity.desc&with_genres=${genre}&primary_release_year=${year}`;
  }
  if (year !== "todos" && genre !== "todos" && rating !== "10") {
    return `https://api.themoviedb.org/3/discover/movie?${API_KEY}&es-ES&sort_by=popularity.desc&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${rating}`;
  }
}

export type FilteringParameters = {
  genre: string;
  year: string;
  rating: string;
  type: MediaType;
};

export function URL_FILTER_MEDIA({
  type,
  genre,
  year,
  rating,
}: FilteringParameters) {
  let finalUrl = `${API_URL}/discover/${type}?${API_KEY}${LANGUAGE}&sort_by=popularity.desc`;

  if (genre !== "all") {
    finalUrl += `&with_genres=${genre}`;
  }

  if (rating !== "10") {
    finalUrl += `&vote_average.gte=${rating}`;
  }

  if (year === "all") {
    finalUrl += `&first_air_date_year=${year}`;
  }

  return finalUrl;
}

/* SEARCH AUDIOVISUAL MEDIA */

export function getUrlSearchByMedia({
  type,
  query,
}: {
  type: MediaType;
  query: string;
}) {
  return `${API_URL}/search/${type}?${API_KEY}&query=${query}`;
}
