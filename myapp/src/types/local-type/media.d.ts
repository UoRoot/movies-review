export type MediaType = "movie" | "tv";

export interface MediaCard {
  id: number;
  title: string;
  image: string;
  type: string;
}

interface CountMediaByGenre {
  id: number;
  name: string;
  count: number;
}
// Doc.
export type DiscoverMediaParams = {
  include_video: boolean;
  language: Language;
  page: number;
  sort_by: string;
  with_genres: number[];
  rating: number;
  year: string;
};

export interface FilterMoviesParams {
  language: Language;
  page: number;
  sortBy: string;
  order: "desc" | "asc";
  withGenres: string;
  rating: string;
  year: number;
}
