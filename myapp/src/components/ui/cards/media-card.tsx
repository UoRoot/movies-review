import { Link } from "react-router-dom";
import type { MediaCard } from "../../../types/local-type/media";
import Style from "./media-card.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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

export function MediaCardSkeleton() {
  return (
    <SkeletonTheme baseColor="#383e48" highlightColor="#424750">
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#202737",
          height: "245px",
        }}
      >
        <Skeleton style={{ height: "200px" }} />
        <div
          style={{
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ display: "block", width: "70%" }}>
            <Skeleton />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
}
