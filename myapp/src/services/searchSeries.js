import { useEffect, useState } from "react"
import { getUrlSearchByMedia, IMAGE_PATH, options } from "../Consts.ts"

export function searchSeries({ search }) {
  const [series, setSeries] = useState(null)

  useEffect(() => {
    fetch(getUrlSearchByMedia({ type: 'tv' }, search), options)
      .then(response => response.json())
      .then(data => setSeries(data.results))
      .catch(err => console.error(err));
  }, [search])

  /* Para controlar la informacion de las series en caso puedan cambiar*/
  const mappedSeries = series?.map(serie => ({
    id: serie.id,
    title: serie.name,
    image: serie.poster_path !== null ? `${IMAGE_PATH}${serie.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
    type: 'Serie'
  }))

  return { mappedSeries }
}