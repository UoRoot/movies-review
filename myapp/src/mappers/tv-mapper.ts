import { IMAGE_PATH } from "../Consts";
import { TypeTv } from "../types/audiovisual-media.type";

export function tvMapper(media: TypeTv[]) {
  return media?.map(({ id, name, poster_path }) => ({
    id,
    title: name,
    image:
      poster_path !== null
        ? `${IMAGE_PATH}${poster_path}`
        : "https://th.bing.com/th/id/R.8694e4ba0f67d601947b3431297fc2e6?rik=U%2fsXad%2foFXnS4g&pid=ImgRaw&r=0",
    type: "movie",
  }));
}
