import { ReactNode, useEffect } from "react";
import { useState } from "react";
import {
  MovieType,
  PaginatedMovieResponse,
} from "../../types/api-responses/list-media";
import { DiscoverMediaParams } from "../../types/local-type/media";
import { getUrlDiscoverMovies } from "../../Consts";
import { MoviesContext } from "./movies-context";

interface Props {
  children: ReactNode | ReactNode[];
}

const PARAMS_STATE = {
  include_video: true,
  language: "en-US",
  page: 1,
  sort_by: "popularity.desc",
  with_genres: [],
  rating: 0,
  year: "",
};

export function MoviesProvider({ children }: Props) {
  const [params, setParams] = useState<DiscoverMediaParams>(PARAMS_STATE);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const searchMovies = async () => {
      const url = getUrlDiscoverMovies(params);

      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error when searching for series");
        const { results, total_pages }: PaginatedMovieResponse =
          await response.json();
        setTotalPages(total_pages);
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
  }, [params]);

  function nextPage() {
    if (params.page < totalPages) {
      setParams((prev) => ({
        ...prev,
        page: prev.page++,
      }));
    }
  }

  function prevPage() {
    if (params.page > 1) {
      setParams((prev) => ({
        ...prev,
        page: prev.page--,
      }));
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        setFilters: setParams,
        movies,
        error,
        isLoading,
        nextPage,
        prevPage,
        totalPages,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
