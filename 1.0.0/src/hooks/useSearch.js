import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export function useSearch() {

  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // const url = window.location.href;
  // const page = url.split('/')[3].substring(0, 6);
  
  // if (page !== 'buscar') {
  //   setError(null)
  // }

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleChange(event) {
    const newSearch = event.target.value
    setSearch(newSearch)
    navigate(`/buscar?busqueda=${newSearch}`)


    if (newSearch === '') {
      setError('debes ingresar una pelicula')
      return
    }

    if (newSearch.match(/^\d+$/)) {
      setError('no puede ingresar un numero')
      return
    }

    if (newSearch.length < 3) {
      setError('la busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }

  return { search, handleSubmit, handleChange, error, setError, setSearch }
}