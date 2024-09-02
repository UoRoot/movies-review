/**
 * RESPONSES FOR MOVIE
 */

import { GenreType } from "./genres";

export type ListMoviesType =
  | "popular"
  | "top_rated"
  | "now_playing"
  | "upcoming";

/**
 * Represents the base structure for a paginated response from the TMDB API.
 * This structure includes metadata such as the current page, total pages, and total results.
 *
 * Used for:
 * - Popular Movies
 * - Most Voted Movies (Top Rated)
 */
export interface PaginatedMovieResponse {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

/**
 * Extends the base paginated response structure to include a date range.
 *
 * Used for:
 * - Now Playing Movies
 * - Upcoming Movies
 */
export interface DatedMovieResponse extends PaginatedMovieResponse {
  dates: DateRange;
}

/**
 * Represents a date range with a maximum and minimum date.
 */
export type DateRange = {
  maximum: Date;
  minimum: Date;
};

/**
 * Represents a movie result returned in the TMDB API responses.
 */
export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

/**
 * Represents the response structure of a search for movies and tv series by genre.
 * Extends the base paginated response structure to include the genre id.
 */
export type MoviesGenreResponse = {
  id: number;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

/**
 * Represents the response structure of the details of a movie.
 */
export type MovieDetailsResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

/**
 * RESPONSES FOR TV
 */

/**
 * Represents the base structure for a paginated response from the TMDB API
 * for TV series. This structure includes metadata such as the current page,
 * total pages, and total results.
 *
 * Used for TV series categories:
 * - On The Air
 * - Popular
 * - Top Rated
 * - Airing Today
 */
export type PaginatedTvResponse = {
  page: number;
  results: TvSerieType[];
  total_pages: number;
  total_results: number;
};

/**
 * Represents a TV series result returned in the TMDB API responses.
 */
export type TvSerieType = {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
};

/**
 * Represents the response structure of the details of a tv serie.
 */
export type TvSerieDetailsResponse = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: Date;
  genres: GenreType[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: Date;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
};

export type LastEpisodeToAir = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: Date;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

export type Network = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type Season = {
  air_date: Date;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
