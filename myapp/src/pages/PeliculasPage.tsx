import { toListMediaCard } from "../mappers/movie-mapper.js";
import { MediaCard } from "../components/ui/cards/media-card.js";
import { SectionMovies } from "../components/section-movies.js";
import LoadingMediaSection from "../components/loading-media-sections.js";
import { FilterForm } from "../components/media-filters/movies/filter-fom.js";
import { FilterMoviesParams } from "../types/local-type/media.js";
import useDiscoverMovies from "../hooks/use-discover-movies.js";
import { getMoviesQueryParams } from "../utils/get-movies-query-params.js";
import { useLocation } from "react-router-dom";

function MovieSections() {
  return (
    <>
      <SectionMovies type="now_playing" title="The newest" />
      <SectionMovies type="popular" title="Most viewed" />
      <SectionMovies type="top_rated" title="Most recommended" />
      <SectionMovies type="upcoming" title="Upcomming" />
    </>
  );
}

function LeakedMoviesSection({
  params,
}: {
  params: Partial<FilterMoviesParams>;
}) {
  const {
    movies,
    isLoading,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    error,
  } = useDiscoverMovies(params);

  if (error !== "") return <div>{error}</div>;

  return (
    <div className="section-movies">
      <div className="st-entertainment-cards-ct">
        {isLoading ? (
          <LoadingMediaSection />
        ) : (
          toListMediaCard(movies).map((movie) => (
            <MediaCard key={movie.id} {...movie} />
          ))
        )}
      </div>
      <div className="ct-center">
        <button
          onClick={prevPage}
          disabled={currentPage < 2}
          className="button"
        >
          Volver
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages}
          className="button"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export function PeliculasPage() {
  const location = useLocation();
  const params = getMoviesQueryParams(new URLSearchParams(location.search));
  const hasParameters = location.search.length >= 1;

  return (
    <main className="layout-one" style={{ color: "white" }}>
      <section className="ly-left">
        <FilterForm />
      </section>
      <section className="ly-right">
        {hasParameters ? (
          <LeakedMoviesSection params={params} />
        ) : (
          <MovieSections />
        )}
      </section>
    </main>
  );
}
