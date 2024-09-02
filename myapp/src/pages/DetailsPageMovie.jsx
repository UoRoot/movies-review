import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import '../styles/DetailsPage.css';
import { NavigationDetails } from '../components/navigationDetails';
import { filterDetailsMovie } from '../services/filterDetailsMovie';
import { options } from '../Consts.ts';

function WhitResults({ details, trailer }) {
  const { infoDetails } = filterDetailsMovie({ details: details })

  return (
    <main className='height-page'>
      <section className='movie'>
        <aside className='movie-image' >
          <img src={infoDetails.image} alt={`Poster de ${infoDetails.title}`} />
        </aside>
        <aside className='movie-details'>
          <h1>{infoDetails.title}{` (${infoDetails.year})`}</h1>
          <p><strong>Lanzamiento: </strong>{infoDetails.date}</p>
          <p><strong>Generos: </strong>{infoDetails.genres}</p>
          <p><strong>Duración: </strong>{infoDetails.duration} min</p>
          <p className='p-space-between'><span><strong>Calificación: </strong>{infoDetails.redoundedVoteAverage} / 10</span><span><strong>Votos: </strong>{infoDetails.voteCount}</span></p>

          <h3>Sinopsis:</h3>
          <p>{infoDetails.overview}</p>
        </aside>
      </section>

      <NavigationDetails trailer={trailer} />
    </main>
  )
}

function WithoutResulst() {
  return <h1>Cargando detalles</h1>
}

export function DetailsPageMovie() {
  const { id } = useParams();
  // console.log(id)
  const [details, setDetails] = useState(null)
  const [keyTrailer, setKeyTrailer] = useState(null)


  useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es`, options),
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f5283af760ac82370edbc58a2e5fd4a2&language=es`, options)
    ])
      .then(responses => {
        const response1 = responses[0]
        const response2 = responses[1]

        if (!response1.ok || !response2.ok) {
          throw new Error('Error en la solicitud');
        }

        return Promise.all([response1.json(), response2.json()]);
      })
      .then(datas => {
        setDetails(datas[0])

        if (datas[1].results.length >= 1) {
          const trailerObject = datas[1].results.find(item => item.type === "Trailer");
          const trailerKey = trailerObject ? trailerObject.key : null;
          setKeyTrailer(trailerKey)
        } else {
          setKeyTrailer(false)
        }
      })
      .catch(err => console.log(err))

  }, [id])

  return (
    (details ? <WhitResults details={details} trailer={keyTrailer} /> : <WithoutResulst />)
  )
}