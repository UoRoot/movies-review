import { FilterMoviesParams } from "../types/local-type/media";

export function useMoviesQueryParams(): Partial<FilterMoviesParams> {
  const params = new URLSearchParams(window.location.search);
  return {
    language: params.get("language") ?? undefined,
    page: params.get("page") ? Number(params.get("page")) : undefined,
    sortBy: params.get("sort_by") ?? undefined,
    order: (params.get("order") as "desc" | "asc") ?? undefined,
    withGenres: params.get("with_genres") ?? undefined,
    rating: params.get("rating") ?? undefined,
    year: params.get("year") ? Number(params.get("year")) : undefined,
  };
}
