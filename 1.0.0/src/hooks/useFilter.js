import { useState } from "react"
import { IMAGE_PATH, URL_FILTER_MOVIES, URL_FILTER_SERIES, options } from "../Consts"

export function useFilter(type) {
  const [items, setItems] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    try {
      if (type === 'tv') {
        const URL_API = URL_FILTER_SERIES(data)
        const response = await fetch(URL_API, options)
        const {results} = await response.json()
  
        const mappedSeries = results?.map((serie) => ({
          id: serie.id,
          name: serie.name || 'Nombre no disponible',
          image: serie.poster_path
            ? `${IMAGE_PATH}${serie.poster_path}`
            : serie.poster_path,
          type: 'Serie TV',
          image2: serie.backdrop_path
            ? `${IMAGE_PATH}${serie.backdrop_path}`
            : 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png',
        }));
        
        setItems(mappedSeries)

      } else {
        const URL_API = URL_FILTER_MOVIES(data)
        const response = await fetch(URL_API, options)
        const {results} = await response.json()
  
        const mappedMovies = results?.map(movie => ({
          id: movie.id,
          title: movie?.title,
          image: movie.poster_path !== null ? `${IMAGE_PATH}${movie.poster_path}` : 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png',
          overview: movie?.overview,
          image2: `${IMAGE_PATH}${movie.backdrop_path}`,
          type: 'Película'
        }))
        
        setItems(mappedMovies)
      }

    } catch (error) {
      console.error(error)
    }
  }


 
  return { items, handleSubmit}
}