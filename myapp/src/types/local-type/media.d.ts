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
