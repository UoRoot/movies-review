import { useEffect, useState } from "react";
import {
  PaginatedTvResponse,
  TvSerieType,
  TypeOfListSeries,
} from "../types/api-responses/list-media";
import { getUrlListOfSerie } from "../Consts";

export function useListOfSeries(type: TypeOfListSeries) {
  const [series, setSeries] = useState<TvSerieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(getUrlListOfSerie(type));
        if (!response.ok) throw new Error("Error when searching for tv series");
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

    fetchMovies();
  }, [type]);

  return { series, error, isLoading };
}
