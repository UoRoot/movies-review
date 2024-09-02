import useSeacrhMovie from "../hooks/use-search-movies.js";
import { toListMediaCard } from "../mappers/movie-mapper.js";
import { MediaCard } from "./ui/cards/media-card.js";

export function FindMovies({ query }: { query: string }) {
  const { isLoading, movies } = useSeacrhMovie({ query });
  if (isLoading) return <h1>Cargando...</h1>;

  const mappedMovies = toListMediaCard(movies);
  return (
    <>
      <h2>Resultados de Peliculas para {query}</h2>
      <section className="st-entertainment-search">
        {mappedMovies.map(({ id, image, title, type }) => (
          <MediaCard key={id} id={id} title={title} image={image} type={type} />
        ))}
      </section>
    </>
  );
}
