import { useEffect, useState } from "react"
import { IMAGE_PATH, options } from "../Consts"

export function searchSeries({ search }) {
  const [series, setSeries] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=f5283af760ac82370edbc58a2e5fd4a2&query=${search}`, options)
      .then(response => response.json())
      .then(data => setSeries(data.results))
      .catch(err => console.error(err));
  }, [search])

  /* Para controlar la informacion de las series en caso puedan cambiar*/
  const mappedSeries = series?.map(serie => ({
    id: serie.id,
    title: serie.name,
    image: serie.poster_path !== null ? `${IMAGE_PATH}${serie.poster_path}` : 'https://th.bing.com/th/id/R.8694e4ba0f67d601947b3431297fc2e6?rik=U%2fsXad%2foFXnS4g&pid=ImgRaw&r=0',
    type: 'Serie'
  }))

  return { mappedSeries }
}