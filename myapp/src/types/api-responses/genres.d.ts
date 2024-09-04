/**
 * Represents the response structure for fetching available genres for movies or TV series.
 */
export interface GenreListResponse {
  genres: GenreType[];
}

/**
 * Represents a single genre with its unique ID and name.
 */
export interface GenreType {
  id: number;
  name: string;
}

/**
 * Represents the response structure of a search for movies and tv series by genre.
 */
export type MediaByGenreResponse = {
  id: number;
  page: number;
  results: MovieType[] | TvSerieType;
  total_pages: number;
  total_results: number;
};
