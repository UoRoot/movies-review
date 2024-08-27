import { useState } from "react"

export function useDetailsMovie() {
  const [details, setDetails] = useState(null)

  function clickCardMovie(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es-Mx`)
      .then(res => res.json())
      .then(data => setDetails(data.results))
      .catch(err => console.log(err))
  }


  return { details, clickCardMovie }
}