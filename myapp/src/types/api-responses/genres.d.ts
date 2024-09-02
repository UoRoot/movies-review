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
