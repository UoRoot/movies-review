import useSeacrhSerie from "../hooks/use-search-series";
import { toListMediaCard } from "../mappers/tv-mapper";
import { MediaCard } from "./ui/cards/media-card";

export function FindSeries({ query }: { query: string }) {
  const { isLoading, series, error } = useSeacrhSerie({ query });
  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const mappedMovies = toListMediaCard(series);
  return (
    <>
      <h2>Resultados de Series para {query}</h2>
      <section className="st-entertainment-search">
        {mappedMovies.map(({ id, image, title, type }) => (
          <MediaCard key={id} id={id} title={title} image={image} type={type} />
        ))}
      </section>
    </>
  );
}
