import { Carousel } from "../components/carousel/carousel.tsx";
import { SectionMovies } from "../components/section-movies.tsx";
import { SectionSeries } from "../components/section-series.tsx";
import { SectionMediaByGenres } from "../components/section-media-by-genres.tsx";
import "react-loading-skeleton/dist/skeleton.css";

export function HomePage() {
  return (
    <main className="st-entertainment height-page">
      <section className="st-entertainment-cards">
        <Carousel />
        <SectionMovies title="Lo más nuevo" type="now_playing" />
        <SectionMovies title="Lo más recomendado" type="top_rated" />
        <SectionSeries title="Series recomendadas" type="top_rated" />
      </section>
      <section className="st-entertainment-links">
        <SectionMediaByGenres type="movie" title="Peliculas por género" />
      </section>
    </main>
  );
}
