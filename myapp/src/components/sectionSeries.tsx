import { MediaCard } from "./ui/cards/media-card";

export function Series({ series }) {
  if (!series) return <p>Loading data...</p>;

  return series.map((serie) => (
    <MediaCard
      key={crypto.randomUUID()}
      id={serie.id}
      title={serie.title}
      image={serie.image}
      type={serie.type}
    />
  ));
}

export function SectionSeries({ series, title }) {
  return (
    <div className="st-entertaiment-cards">
      {title && <h3 className="section-movies-title">{title}</h3>}

      <div className="st-entertainment-cards-ct">
        <Series series={series} />
      </div>
    </div>
  );
}
