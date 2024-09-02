import { useEffect, useState } from "react"
import { IMAGE_PATH, options } from "../Consts.ts"

export function useSeries({ url }) {
  const [series, setSeries] = useState(null)

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results)
      })
      .catch((err) => console.log(err))
  }, [url])

  /* Para controlar la informacion de las peliculas en caso puedan cambiar*/
  const mappedSeries = series?.map((serie) => ({
    id: serie.id,
    title: serie.name || 'Nombre no disponible',
    image: serie.poster_path
      ? `${IMAGE_PATH}${serie.poster_path}`
      : 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png',
    type: 'Serie TV',
    image2: serie.backdrop_path
      ? `${IMAGE_PATH}${serie.backdrop_path}`
      : 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png',
  }));
  return { mappedSeries }
}