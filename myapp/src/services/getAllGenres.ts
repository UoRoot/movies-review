import { URL_GET_GENRES_FOR } from "../Consts";
import { GenreListResponse } from "../types/api-responses/genres";
import { MediaType } from "../types/local-type/media";

export async function getAllGenres(type: MediaType) {
  const response = await fetch(URL_GET_GENRES_FOR(type));
  const { genres }: GenreListResponse = await response.json();
  return genres;
}
