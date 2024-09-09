import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useListOfMovies } from "../../hooks/use-list-of-movies";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CarouselItem from "./carousel-item";

function SwiperSkeleton() {
  return (
    <SkeletonTheme baseColor="#383e48" highlightColor="#424750">
      <div
        style={{
          borderRadius: "8px",
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

export function Carousel() {
  const { movies, isLoading, error } = useListOfMovies("popular");
  if (isLoading) return <SwiperSkeleton />;
  if (error) return null;
  const firstMovies = movies.slice(0, 10);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {firstMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <CarouselItem {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
