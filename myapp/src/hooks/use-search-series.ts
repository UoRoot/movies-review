import { useEffect, useState } from "react";
import {
  PaginatedTvResponse,
  TvSerieType,
} from "../types/api-responses/list-media";
import { getUrlSearchByMedia } from "../Consts";

export default function useSeacrhSerie({ query }: { query: string }) {
  const [series, setSeries] = useState<TvSerieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          getUrlSearchByMedia({ type: "tv", query })
        );
        if (!response.ok) throw new Error("Error when searching for movies");
        const { results }: PaginatedTvResponse = await response.json();
        setSeries(results);
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
    series,
    isLoading,
    error,
  };
}
