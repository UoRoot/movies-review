import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/swiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IMAGE_PATH } from "../Consts";
import { useListOfMovies } from "../hooks/use-list-of-movies";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SwiperSkeleton() {
  return (
    <SkeletonTheme baseColor="#383e48" highlightColor="#424750">
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#202737",
        }}
      >
        <Skeleton height={270} />
        <div
          style={{
            height: "80px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "10px 16px",
          }}
        >
          <Skeleton style={{ width: "60%" }} />
          <div>
            <Skeleton count={2} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function SwiperAutoplay() {
  const { movies, isLoading, error } = useListOfMovies("popular");
  if (isLoading) return <SwiperSkeleton />;
  if (error) return null;
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
