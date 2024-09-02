import { useEffect, useState } from "react";
import {
  PaginatedTvResponse,
  TvSerieType,
} from "../types/api-responses/list-media";
import { getUrlSearchByMedia } from "../Consts";

interface ReturnCustomHook {
  series: TvSerieType[];
  isLoading: boolean;
  error: string;
}

export default function useSeacrhSerie({
  query,
}: {
  query: string;
}): ReturnCustomHook {
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
        const { results }: PaginatedTvResponse = await response.json();
        setSeries(results);
      } finally {
        setError("Error when searching for movies");
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
