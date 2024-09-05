import { useGenresBy } from "../hooks/use-genres-by";
import { MediaType } from "../types/local-type/media";

interface Props {
  type: MediaType;
  title: string;
}

export function SectionMediaByGenres({ type, title }: Props) {
  const { mappedGenres } = useGenresBy(type);
  if (mappedGenres.length === 0) return <p>Loading data...</p>;

  return (
    <>
      <h3 className="st-entertainment-links-title">{title}</h3>
      <aside className="content-list">
        {mappedGenres.map(({ id, name, count }) => (
          <a href="./" key={id}>
            <span>{name}</span>
            <span>{count}</span>
          </a>
        ))}
      </aside>
    </>
  );
}
