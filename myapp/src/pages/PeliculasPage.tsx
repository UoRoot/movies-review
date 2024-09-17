import { useRef } from "react";
import { toListMediaCard } from "../mappers/movie-mapper.js";
import { MediaCard } from "../components/ui/cards/media-card.js";
import { SectionMovies } from "../components/section-movies.js";
import { useMoviesContext } from "../hooks/context/use-movies-context.js";
import FilterForm from "../components/filter-movies-fom.js";
import LoadingMediaSection from "../components/loading-media-sections.js";

function MovieSections() {
  return (
    <>
      <SectionMovies type="now_playing" title="The newest" />
      {/* <SectionMovies type="popular" title="Most viewed" />
      <SectionMovies type="top_rated" title="Most recommended" />
      <SectionMovies type="upcoming" title="Upcomming" /> */}
    </>
  );
}

function LeakedMoviesSection() {
  const { error, isLoading, movies, nextPage, prevPage, totalPages } =
    useMoviesContext();
  const curPage = useRef(1);

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
          disabled={curPage.current < 2}
          className="button"
        >
          Volver
        </button>
        <button
          onClick={nextPage}
          disabled={curPage.current >= totalPages}
          className="button"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export function PeliculasPage() {
  const isFiltering = useRef(false);
  return (
    <main className="layout-one" style={{ color: "white" }}>
      <section className="ly-left">
        <FilterForm isFiltering={isFiltering} />
      </section>
      <section className="ly-right">
        {isFiltering ? <MovieSections /> : <LeakedMoviesSection />}
      </section>
    </main>
  );
}
