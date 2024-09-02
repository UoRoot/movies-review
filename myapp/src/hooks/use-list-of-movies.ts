import { useEffect, useState } from "react";
import { getUrlListOfMovie } from "../Consts.ts";
import {
  ListMoviesType,
  MovieType,
  PaginatedMovieResponse,
} from "../types/api-responses/list-media";

export function useListOfMovies({ type }: { type: ListMoviesType }) {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(getUrlListOfMovie(type));
        const { results }: PaginatedMovieResponse = await response.json();
        setMovies(results);
      } catch (error) {
        throw new Error("Error when searching for movies: " + error);
      }
    };

    searchMovies();
  }, [type]);

  return { movies };
}
