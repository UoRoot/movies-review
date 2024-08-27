import { SectionSeries } from "../components/sectionSeries.jsx"
import { useSeries } from "../hooks/useSeries.js"
import FilterForm from "../components/filterForm.jsx"
import { SectionLinksTwo } from "../components/sectionLinksTwo.jsx"
import { useState } from "react"
import { useFilter } from "../hooks/useFilter.js"
import { useGenresBy } from "../hooks/useGenresBy.js"
import { URL_ENABLES_GENRES } from "../Consts.js"

export function SeriesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { mappedSeries: onTheAir} = useSeries({url: `https://api.themoviedb.org/3/tv/on_the_air?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es-ES` })
  const { mappedSeries: topRated } = useSeries({url: `https://api.themoviedb.org/3/tv/top_rated?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es-ES&page=${currentPage}`})
  const { items: filterSeries, handleSubmit } = useFilter('tv')
  const { genres } = useGenresBy(URL_ENABLES_GENRES('tv'))

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
        <SectionLinksTwo content={onTheAir} title="Series al aire" />
      </section>
      <section className="ly-right">
        {
          filterSeries === null ? (
            <>
              <SectionSeries series={topRated} title="Series Populares" />
              <div className="ct-center">
                <button onClick={prev} className="button" >Volver</button>
                <button onClick={next} className="button">Siguiente</button>
              </div>
            </>
          ) : <SectionSeries series={filterSeries} title="Resultados" />
        }
      </section>
    </main>
   
  )
}