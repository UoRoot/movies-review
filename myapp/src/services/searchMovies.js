import { useEffect, useState } from "react"
import { getUrlSearchByMedia, IMAGE_PATH, options } from "../Consts.ts"

export async function searchMovies({ search }) {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch(getUrlSearchByMedia({ type: 'movie' }, search), options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))
  }, [search])

  /* Para controlar la informacion de las peliculas en caso puedan cambiar*/
  const mappedMovies = movies?.map(movie => ({
    id: movie.id,
    title: movie.title,
    image: movie.poster_path !== null ? `${IMAGE_PATH}${movie.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
    type: 'Película'
  }))

  return { mappedMovies }
}