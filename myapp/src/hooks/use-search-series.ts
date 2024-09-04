import { useEffect, useState } from "react";
import {
  PaginatedTvResponse,
  TvSerieType,
} from "../types/api-responses/list-media";
import { getUrlSearchByMedia } from "../Consts";

/**
 * This custom hook retrieves a list of series based on the search query provided.
 *
 * @param {string} query - The search query to be used to fetch the series.
 * @returns - An object containing the fetched series, the loading status and any errors.
 */
export default function useSeacrhSerie({ query }: { query: string }) {
  const [series, setSeries] = useState<TvSerieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchSeries = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          getUrlSearchByMedia({ type: "tv", query })
        );
        if (!response.ok) throw new Error("Error when searching for series");
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

    searchSeries();
  }, [query]);

  return {
    series,
    isLoading,
    error,
  };
}
