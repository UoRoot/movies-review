import { useListOfSeries } from "../hooks/use-list-of-tv-series";
import { toListMediaCard } from "../mappers/tv-mapper";
import { TypeOfListSeries } from "../types/api-responses/list-media";
import { MediaCard, MediaCardSkeleton } from "./ui/cards/media-card";

interface Props {
  type: TypeOfListSeries;
  title: string;
}
export function SectionSeries({ type, title }: Props) {
  const { isLoading, error, series } = useListOfSeries(type);
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="st-entertaiment-cards">
      {title && <h3 className="section-movies-title">{title}</h3>}

      <div className="st-entertainment-cards-ct">
        {isLoading
          ? Array(20)
              .fill(null)
              .map((_, index) => <MediaCardSkeleton key={index} />)
          : toListMediaCard(series).map((serie) => (
              <MediaCard key={serie.id} {...serie} />
            ))}
      </div>
    </div>
  );
}
