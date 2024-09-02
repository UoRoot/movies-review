import { useEffect, useState } from "react";
import { getUrlSearchByMedia } from "../Consts";
import {
  MovieType,
  PaginatedMovieResponse,
} from "../types/api-responses/list-media";

interface ReturnCustomHook {
  movies: MovieType[];
  isLoading: boolean;
}

export default function useSeacrhMovie({
  query,
}: {
  query: string;
}): ReturnCustomHook {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          getUrlSearchByMedia({ type: "movie", query })
        );
        const { results }: PaginatedMovieResponse = await response.json();
        setMovies(results);
      } catch (error) {
        throw new Error("Error when searching for movies: " + error);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  return {
    movies,
    isLoading,
  };
}
