import { IMAGE_PATH } from "../Consts";
import { MovieType } from "../types/api-responses/list-media";
import { MediaCard } from "../types/local-type/media";
import NotFoundImage from "../assets/not-found.png";

export function toMediaCard({ id, title, poster_path }: MovieType): MediaCard {
  return {
    id,
    title,
    image: poster_path !== null ? `${IMAGE_PATH}${poster_path}` : NotFoundImage,
    type: "movie",
  };
}

export function toListMediaCard(media: MovieType[]): MediaCard[] {
  return media.map(toMediaCard);
}
