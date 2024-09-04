import { IMAGE_PATH } from "../Consts";

import NotFoundImage from "../assets/not-found.png";
import { TvSerieType } from "../types/api-responses/list-media";
import { MediaCard } from "../types/local-type/media";

export function toMediaCard({ id, name, poster_path }: TvSerieType): MediaCard {
  return {
    id,
    title: name,
    image: poster_path !== null ? `${IMAGE_PATH}${poster_path}` : NotFoundImage,
    type: "movie",
  };
}

export function toListMediaCard(media: TvSerieType[]): MediaCard[] {
  return media.map(toMediaCard);
}
