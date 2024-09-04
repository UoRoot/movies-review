import { SectionLinks } from "../components/sectionLinks.jsx";
import { useGenresBy } from "../hooks/use-genres-by.ts";
import { SwiperAutoplay } from "../components/SliderAutoplay.js";
import { useListOfMovies } from "../hooks/use-list-of-movies.ts";
import { SectionMovies } from "../components/section-movies.tsx";
import { SectionSeries } from "../components/section-series.tsx";

export function HomePage() {
  const { movies: popularMovies } = useListOfMovies("popular");
  const { mappedGenres: genres } = useGenresBy("movie"); // ✔

  return (
    <main className="st-entertainment height-page">
      <section className="st-entertainment-cards">
        <SwiperAutoplay movies={popularMovies} />
        <SectionMovies title="Lo más nuevo" type="now_playing" />
        <SectionMovies type="top_rated" title="Lo más recomendado" />
        <SectionSeries type="top_rated" title="Series recomendadas" />
      </section>
      <section className="st-entertainment-links">
        <SectionLinks genres={genres} title="Generos" />
      </section>
    </main>
  );
}
