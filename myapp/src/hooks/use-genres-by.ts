import { useEffect, useState } from "react";
import { URL_GET_GENRES_FOR, URL_MOVIES_BY_GENRE } from "../Consts.ts";
import { CountMediaByGenre, MediaType } from "../types/local-type/media";
import {
  GenreListResponse,
  MediaByGenreResponse,
} from "../types/api-responses/genres";

/**
 * Custom Hook: useGenresBy
 *
 * This custom hook is used to get all genres of movies or TV series,
 * along with the total count of results for each genre.
 *
 * @param {MediaType} type - Type of media for which you want to get the genres. Can be 'movie' or 'tv'.
 * @returns - An object containing an array of objects with the genres and the total number of results per genre.
 *
 * @example
 * // Ejemplo de uso en un componente:
 * const { mappedGenres } = useGenresBy('movie');
 *
 * useEffect(() => {
 *   console.log(mappedGenres);
 *   // Output: [{ id: 28, name: 'Action', count: 3421 }, { id: 35, name: 'Comedy', count: 2841 }, ...]
 * }, [mappedGenres]);
 */
export function useGenresBy(type: MediaType) {
  const [mappedGenres, setMappedGenres] = useState<CountMediaByGenre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(URL_GET_GENRES_FOR(type));
      const { genres }: GenreListResponse = await response.json();

      const genrePromises = genres.map(async (genre) => {
        const mediaResponse = await fetch(URL_MOVIES_BY_GENRE(genre.id));
        const { total_results }: MediaByGenreResponse =
          await mediaResponse.json();
        return { id: genre.id, name: genre.name, count: total_results };
      });

      const mappedGenres = await Promise.all(genrePromises);
      setMappedGenres(mappedGenres);
    };

    fetchGenres();
  }, [type]);

  return { mappedGenres };
}
