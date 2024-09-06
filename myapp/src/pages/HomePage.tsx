import { SwiperAutoplay } from "../components/SliderAutoplay.js";
import { SectionMovies } from "../components/section-movies.tsx";
import { SectionSeries } from "../components/section-series.tsx";
import { SectionMediaByGenres } from "../components/section-media-by-genres.tsx";
import "react-loading-skeleton/dist/skeleton.css";

export function HomePage() {
  return (
    <main className="st-entertainment height-page">
      <section className="st-entertainment-cards">
        <SwiperAutoplay />
        <SectionMovies title="Lo más nuevo" type="now_playing" />
        <SectionMovies type="top_rated" title="Lo más recomendado" />
        <SectionSeries type="top_rated" title="Series recomendadas" />
      </section>
      <section className="st-entertainment-links">
        <SectionMediaByGenres type="movie" title="Peliculas por género" />
      </section>
    </main>
  );
}
