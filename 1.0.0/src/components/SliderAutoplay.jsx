import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/swiper.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function SwiperAutoplay({ movies }) {
  if (!movies) return null

  const listMovies = movies.slice(10, 20)

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
      {
        listMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <aside style={{ backgroundImage: `url("${movie.image2}")` }}>
              <footer className="footer-slider">
                <div>
                  <h3>{movie.title}</h3>
                  <p>
                    {movie.overview}
                  </p>
                </div>
                <a href="./" className="a-btn">Ver</a>
              </footer>
            </aside>


          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
