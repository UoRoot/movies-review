import { Link } from "react-router-dom";
import { useListOfMovies } from "../hooks/use-list-of-movies";
import { toListMediaCard } from "../mappers/movie-mapper";
import { TypeOfListMovies } from "../types/api-responses/list-media";
import { MediaCard } from "./ui/cards/media-card";

interface Props {
  type: TypeOfListMovies;
  title: string;
}
export function SectionMovies({ type, title }: Props) {
  const { isLoading, error, movies } = useListOfMovies(type);
  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="section-movies">
      <h3 className="section-movies-title">{title}</h3>

      <div className="st-entertainment-cards-ct">
        {toListMediaCard(movies).map((movie) => (
          <MediaCard key={movie.id} {...movie} />
        ))}
      </div>
      <div className="ct-center">
        <Link to="/peliculas" className="button">
          Ver todo
        </Link>
      </div>
    </div>
  );
}
