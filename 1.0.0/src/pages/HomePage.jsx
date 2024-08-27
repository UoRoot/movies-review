import { SectionMovies } from '../components/sectionMovies'
import { SECTIONS_MOVIES, URL_GET_GENRES } from '../Consts'
import { SectionLinks } from '../components/sectionLinks.jsx'
import { useMovies } from '../hooks/useMovies.js'
import { useGenres } from '../hooks/useGenres'
import { SwiperAutoplay } from '../components/SliderAutoplay'
import { SectionSeries } from '../components/sectionSeries.jsx'
import { useSeries } from '../hooks/useSeries.js'
import { Link } from 'react-router-dom'

export function HomePage() {

  const { mappedMovies: nowPlaying } = useMovies({ url: SECTIONS_MOVIES.nowPlaying.urlApi })
  const { mappedMovies: topRated } = useMovies({ url: SECTIONS_MOVIES.topRated.urlApi })
  const { mappedMovies: popularMovies } = useMovies({ url: SECTIONS_MOVIES.popularMovies.urlApi })
  const { mappedGenres: genres } = useGenres({ url: URL_GET_GENRES })
  const { mappedSeries: popularTv} = useSeries({url: 'https://api.themoviedb.org/3/tv/popular?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es-MX' })
  
  return (
    <main className='st-entertainment height-page'>
      <section className='st-entertainment-cards' >
        <SwiperAutoplay movies={popularMovies} />
        <SectionMovies movies={nowPlaying} title={SECTIONS_MOVIES.nowPlaying.title} />
        <div className='ct-center'><Link to='/peliculas' className='button'>Ver todo</Link></div>
        <SectionMovies movies={topRated} title={SECTIONS_MOVIES.topRated.title} />
        <div className='ct-center'><Link to='/peliculas' className='button'>Ver todo</Link></div>
        <SectionSeries series={popularTv} title="Series"/>
        <div className='ct-center'><Link to='/series' className='button'>Ver todo</Link></div>
      </section>
      <section className='st-entertainment-links'>
          <SectionLinks genres={genres} title="Generos" />
      </section>
    </main>
  )

}