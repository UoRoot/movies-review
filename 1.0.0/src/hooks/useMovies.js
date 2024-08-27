import { useEffect, useState } from "react"
import { IMAGE_PATH } from "../Consts"

export function useMovies({ url }) {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))
  }, [url])

  /* Para controlar la informacion de las peliculas en caso puedan cambiar*/
  const mappedMovies = movies?.map(movie => ({
    id: movie.id,
    title: movie?.title,
    image: movie.poster_path !== null ? `${IMAGE_PATH}${movie.poster_path}` : 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png',
    overview: movie?.overview,
    image2: `${IMAGE_PATH}${movie.backdrop_path}`,
    type: 'Película'
  }))

  return { mappedMovies }
}