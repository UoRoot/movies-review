import { useEffect, useState } from "react";
import { getUrlSearchByMedia } from "../Consts";
import {
  MovieType,
  PaginatedMovieResponse,
} from "../types/api-responses/list-media";

export default function useSeacrhMovie({ query }: { query: string }) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          getUrlSearchByMedia({ type: "movie", query })
        );
        if (!response.ok) throw new Error("Error when searching for series");
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

    searchMovies();
  }, [query]);

  return {
    movies,
    isLoading,
    error,
  };
}
