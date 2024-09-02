import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { MovieType } from "../types/api-responses/list-media";
import { IMAGE_PATH } from "../Consts";

export function SwiperAutoplay({ movies }: { movies: MovieType[] }) {
  if (movies.length === 0) return <h1>Loading...</h1>;
  const firstMovies = movies.slice(0, 10);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {firstMovies.map(({ id, title, overview, backdrop_path }) => (
        <SwiperSlide key={id}>
          <aside
            style={{ backgroundImage: `url("${IMAGE_PATH}${backdrop_path}")` }}
          >
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
