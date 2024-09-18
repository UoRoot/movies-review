import { useEffect, useRef, useState } from "react";
import {
  MovieType,
  PaginatedMovieResponse,
} from "../types/api-responses/list-media";
import { getUrlDiscoverMovies } from "../Consts";
import { FilterMoviesParams } from "../types/local-type/media";

export default function useDiscoverMovies(params: Partial<FilterMoviesParams>) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const curPage = useRef(params.page ? Number(params.page) : 1);
  const totalPages = useRef(0);

  const fetchMovies = async (params: Partial<FilterMoviesParams>) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        getUrlDiscoverMovies({ ...params, page: curPage.current })
      );
      if (!response.ok) throw new Error("Error when searching for movies");
      const { results, total_pages }: PaginatedMovieResponse =
        await response.json();
      setMovies(results);
      totalPages.current = total_pages;
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

  useEffect(() => {
    fetchMovies({ ...params, page: curPage.current });
  }, [params]);

  const nextPage = () => {
    if (curPage.current < totalPages.current) {
      curPage.current++;
      fetchMovies({ ...params, page: curPage.current });
    }
  };

  const prevPage = () => {
    if (curPage.current > 1) {
      curPage.current--;
      fetchMovies({ ...params, page: curPage.current });
    }
  };

  return {
    movies,
    error,
    isLoading,
    currentPage: curPage.current,
    totalPages: totalPages.current,
    nextPage,
    prevPage,
  };
}
