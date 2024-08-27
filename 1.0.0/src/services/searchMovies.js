import { useEffect, useState } from "react"
import { IMAGE_PATH, options } from "../Consts"

export function searchMovies({ search }) {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f5283af760ac82370edbc58a2e5fd4a2&query=${search}`, options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))
  }, [search])

  /* Para controlar la informacion de las peliculas en caso puedan cambiar*/
  const mappedMovies = movies?.map(movie => ({
    id: movie.id,
    title: movie.title,
    image: movie.poster_path !== null ? `${IMAGE_PATH}${movie.poster_path}` : 'https://th.bing.com/th/id/R.8694e4ba0f67d601947b3431297fc2e6?rik=U%2fsXad%2foFXnS4g&pid=ImgRaw&r=0',
    type: 'Película'
  }))

  return { mappedMovies }
}