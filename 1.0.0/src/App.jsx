import './App.css'
import './styles/layout-one.css'
import { Header } from './components/header'
import { useSearch } from './hooks/useSearch'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import { PremieresPage } from './pages/PremieresPage'
import { AboutPage } from './pages/AboutPage'
import { NotFound } from './components/NotFound'
import { SeriesPage } from './pages/SeriesPage'
import { DetailsPageMovie } from './pages/DetailsPageMovie'
import { PeliculasPage } from './pages/PeliculasPage'
import { DetailsPageSerie } from './pages/DetailsPageSerie'

function App() {
  const { search, handleSubmit, handleChange, error, setError, setSearch } = useSearch()

  return (
    <main className="App">
      <Header search={search} handleChange={handleChange} handleSubmit={handleSubmit} error={error} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/buscar' element={<SearchPage search={search} setError={setError} setSearch={setSearch} />} />
        <Route path='/peliculas' element={<PeliculasPage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/estrenos' element={<PremieresPage />} />
        <Route path='/sobre-nosotros' element={<AboutPage />} />
        <Route path='/pelicula/:id/:title' element={<DetailsPageMovie/>} />
        <Route path='/tv/:id/:title' element={<DetailsPageSerie />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App;
