import { Link } from "react-router-dom"

export function Card({ title, image, id, type }) {
  return (
    <Link to={type === 'Película' ? `/pelicula/${id}/${encodeURIComponent(title)}` : `/tv/${id}/${encodeURIComponent(title)}` }>
      <div className="card" title={title}>
        <figure className="card-fig">
          <div>
            <img src={image} alt={`Poster de ${title}`} />
            <span>{type}</span>
          </div>
          <figcaption>{title}</figcaption>
        </figure>
      </div>
    </Link>
  )
}