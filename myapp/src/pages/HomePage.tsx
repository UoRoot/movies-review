import { SectionLinks } from "../components/sectionLinks.jsx";
import { useGenresBy } from "../hooks/use-genres-by.ts";
import { SwiperAutoplay } from "../components/SliderAutoplay.js";
import { Link } from "react-router-dom";
import { useListOfMovies } from "../hooks/use-list-of-movies.ts";
import { toListMediaCard } from "../mappers/movie-mapper.ts";
import { SectionMovies } from "../components/sectionMovies.tsx";

export function HomePage() {
  const { movies: nowPlaying } = useListOfMovies({ type: "now_playing" });
  const { movies: topRated } = useListOfMovies({ type: "top_rated" });
  const { movies: popularMovies } = useListOfMovies({ type: "popular" });
  const { mappedGenres: genres } = useGenresBy("movie"); // ✔

  return (
    <main className="st-entertainment height-page">
      <section className="st-entertainment-cards">
        <SwiperAutoplay movies={popularMovies} />
        <SectionMovies
          movies={toListMediaCard(nowPlaying)}
          title="Lo más nuevo"
        />
        <div className="ct-center">
          <Link to="/peliculas" className="button">
            Ver todo
          </Link>
        </div>
        <SectionMovies
          movies={toListMediaCard(topRated)}
          title="Lo más recomendado"
        />
        <div className="ct-center">
          <Link to="/peliculas" className="button">
            Ver todo
          </Link>
        </div>
        {/* <SectionSeries series={popularTv} title="Series" /> */}
        {/* <div className="ct-center">
          <Link to="/series" className="button">
            Ver todo
          </Link>
        </div> */}
      </section>
      <section className="st-entertainment-links">
        <SectionLinks genres={genres} title="Generos" />
      </section>
    </main>
  );
}
