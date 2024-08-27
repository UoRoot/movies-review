import { useEffect, useState } from "react"
import { options } from "../Consts"

export function useGenresBy(url) {
  const [genres, setGenres] = useState(null)
  
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres)
      })
      .catch((err) => console.log(err))
  }, [url])


   return { genres }
}