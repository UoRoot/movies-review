import { useEffect, useState } from "react";
import { getUrlListOfMovie } from "../Consts.ts";
import {
  MovieType,
  PaginatedMovieResponse,
  TypeOfListMovies,
} from "../types/api-responses/list-media";

/**
 * Custom Hook: useListOfMovies
 *
 * This custom hook gets a list of movies, from an API, based on the provided type.
 *
 * @param {TypeOfListMovies} type - The type of movie list.
 * @returns - An object containing the fetched movies or an error message.
 */
export function useListOfMovies(type: TypeOfListMovies) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(getUrlListOfMovie(type));
        if (!response.ok) throw new Error("Error when searching for movies");
        const { results }: PaginatedMovieResponse = await response.json();
        setMovies(results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [type]);

  return { movies, error, isLoading };
}
