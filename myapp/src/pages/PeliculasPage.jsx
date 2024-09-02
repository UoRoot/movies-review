
import { useState } from "react";
import { SECTIONS_MOVIES, URL_ENABLES_GENRES } from "../Consts.ts";
import FilterForm from "../components/filterForm";
import { SectionLinksTwo } from "../components/sectionLinksTwo";
import { SectionMovies } from "../components/sectionMovies";
import { useMovies } from "../hooks/useMovies";
import { useFilter } from "../hooks/useFilter";
import { useGenresBy } from "../hooks/useGenresBy";

export function PeliculasPage() {

  const [currentPage, setCurrentPage] = useState(1)
  const { mappedMovies: nowPlaying } = useMovies({ url: `https://api.themoviedb.org/3/movie/now_playing?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es-ES` })
  const { mappedMovies: topRated } = useMovies({ url: `https://api.themoviedb.org/3/movie/top_rated?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es-ES&page=${currentPage}` })
  const { items: filterMovies, handleSubmit } = useFilter('movies')
  const { genres } = useGenresBy(URL_ENABLES_GENRES('movie'))

  function next() {
    setCurrentPage(currentPage + 1);

  }

  function prev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <main className="layout-one" style={{ color: 'white' }} >
      <section className="ly-left">
        <FilterForm handleSubmit={handleSubmit} genres={genres} />
        <SectionLinksTwo content={nowPlaying} title="Peliculas recientes" />
      </section>
      <section className="ly-right">
        {
          filterMovies === null ? (
            <>
              <SectionMovies movies={topRated} title="Series Populares" />
              <div className="ct-center">
                <button onClick={prev} className="button" >Volver</button>
                <button onClick={next} className="button">Siguiente</button>
              </div>
            </>
          ) : <SectionMovies movies={filterMovies} title="Resultados" />
        }
      </section>
    </main>
  )
}