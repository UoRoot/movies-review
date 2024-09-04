import { useEffect, useState } from "react";
import { URL_GET_GENRES_FOR, URL_MOVIES_BY_GENRE } from "../Consts.ts";
import { MediaType } from "../types/local-type/media";
import {
  GenreListResponse,
  MediaByGenreResponse,
} from "../types/api-responses/genres";

interface CountMediaByGenre {
  id: number;
  name: string;
  count: number;
}

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
