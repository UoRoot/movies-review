import { useEffect, useState } from "react";
import { URL_GET_GENRES_FOR, URL_MOVIES_BY_GENRE } from "../Consts.ts";
import { MediaType } from "../types/local-type/media";
import { GenreListResponse, GenreType } from "../types/api-responses/genres";
import { MoviesGenreResponse } from "../types/api-responses/list-media";

interface CountMoviesByGenre {
  id: number;
  name: string;
  count: number;
}

function mapGenresToCounts({
  genres,
  counts,
}: {
  genres: GenreType[];
  counts: number[];
}): CountMoviesByGenre[] {
  return genres.map((genre, index) => ({
    id: genre.id,
    name: genre.name,
    count: counts[index],
  }));
}

export function useGenres(type: MediaType) {
  const [mappedGenres, setMappedGenres] = useState<
    CountMoviesByGenre[] | null
  >();

  useEffect(() => {
    async function fetchGenresAndMovies() {
      const response = await fetch(URL_GET_GENRES_FOR(type)); // get all genres of movies
      const data: GenreListResponse = await response.json();

      /* Get all  the movies by genre */
      const genreFetches = data.genres.map((genre) =>
        fetch(URL_MOVIES_BY_GENRE(genre.id))
      );

      // we wait for all fetches to be solved
      const responses = await Promise.all(genreFetches);
      const moviesGenre: MoviesGenreResponse[] = await Promise.all(
        responses.map((response) => response.json())
      );

      const moviesCount = moviesGenre.map((data) => data.total_results);

      // Map the genres to the movie counts.
      const newMappedGenres = mapGenresToCounts({
        genres: data.genres,
        counts: moviesCount,
      });

      // Set the mapped genres state.
      setMappedGenres(newMappedGenres);
    }

    fetchGenresAndMovies();
  }, [type]);

  return { mappedGenres };
}
