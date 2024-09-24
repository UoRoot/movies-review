import { FilterMoviesParams } from "../src/types/local-type/media";

export function getMoviesQueryParams(
  params: URLSearchParams
): Partial<FilterMoviesParams> {
  if (params.size === 0) return {};

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
