import { MovieType } from "../../types/api-responses/list-media";
import { IMAGE_PATH } from "../../Consts";

export default function CarouselItem({
  title,
  overview,
  backdrop_path,
}: MovieType) {
  return (
    <aside>
      <figure>
        <img
          src={IMAGE_PATH + backdrop_path}
          alt={`Image from the movie ${title}`}
        />
      </figure>
      <footer className="footer-slider">
        <div>
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
        <a href="./" className="a-btn">
          Ver
        </a>
      </footer>
    </aside>
  );
}
