import { Link } from "react-router-dom";
import type { MediaCard } from "../../../types/local-type/media";
import Style from "./media-card.module.css";

export function MediaCard({ title, image, id, type }: MediaCard) {
  return (
    <Link
      to={
        type === "Película"
          ? `/pelicula/${id}/${encodeURIComponent(title)}`
          : `/tv/${id}/${encodeURIComponent(title)}`
      }
    >
      <div className={Style.card} title={title}>
        <figure className={Style.cardFig}>
          <div>
            <img src={image} alt={`Poster de ${title}`} />
            <span>{type}</span>
          </div>
          <figcaption>{title}</figcaption>
        </figure>
      </div>
    </Link>
  );
}
