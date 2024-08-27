import { Card } from "./card"

export function Movies({ movies }) {
  if (!movies) return <p>Loading data...</p>

  return (
    movies.map(movie => (
      <Card key={crypto.randomUUID()} id={movie.id} title={movie.title} image={movie.image} type={movie.type}/>
    ))
  )
}

export function SectionMovies({ movies, title }) {
  return (
    <div className="section-movies">
      <h3 className="section-movies-title">{title}</h3>

      <div className='st-entertainment-cards-ct'>
        <Movies movies={movies} />
      </div>
    </div>
  )
}