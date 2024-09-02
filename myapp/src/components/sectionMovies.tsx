import type { MediaCard as MediaCardType } from "../types/local-type/media";
import { MediaCard } from "./ui/cards/media-card";

export function Movies({ movies }: { movies: MediaCardType[] }) {
  if (!movies) return <p>Loading data...</p>;

  return movies.map(({ id, title, image, type }) => (
    <MediaCard key={id} id={id} title={title} image={image} type={type} />
  ));
}

interface Props {
  title: string;
  movies: MediaCardType[];
}
export function SectionMovies({ movies, title }: Props) {
  return (
    <div className="section-movies">
      <h3 className="section-movies-title">{title}</h3>

      <div className="st-entertainment-cards-ct">
        <Movies movies={movies} />
      </div>
    </div>
  );
}
