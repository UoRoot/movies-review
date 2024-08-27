import { useEffect } from "react"
import { FindMovies } from "../components/FindMovies"
import { searchMovies } from "../services/searchMovies"
import { searchSeries } from "../services/searchSeries"
import '../styles/SearchPage.css'


export function SearchPage({ search, setError, setSearch }) {
  if (!search) return (<h1>Ingresa una película o serie </h1>)

  useEffect(() => {
    return () => {
      setError(null)
      setSearch('')
    }
  } , [])

  const { mappedMovies } = searchMovies({ search: search })
  const { mappedSeries  } = searchSeries({ search: search })

  return (
    <main className="st-search">
      <FindMovies items={mappedMovies} type='Películas' search={search} />
      <FindMovies items={mappedSeries} type='Series' search={search} />
    </main>
  )
}