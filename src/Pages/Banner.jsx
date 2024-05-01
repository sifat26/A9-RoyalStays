import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  A11y,
} from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        // centeredSlides={false}
        spaceBetween={50}
         slidesPerGroupSkip={1}
        loop={true}
        autoplay={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={{ draggable: true }}
         navigation={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Keyboard, Scrollbar, Navigation, Pagination, A11y]}
        
      >
        <SwiperSlide>
          <img className="h-[340px] md:h-[600px] w-full  rounded-lg" src="https://cdn.luxe.digital/media/20230830105642/most-expensive-hotels-luxe-digital-1560x780.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[340px] md:h-[600px] w-full  rounded-lg" src="https://i.guim.co.uk/img/media/b30b9e6d6783aeb0f4979c4bfabe5067912d4b17/208_593_6325_3795/master/6325.jpg?width=1900&dpr=2&s=none" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[340px] md:h-[600px] w-full  rounded-lg" src="https://366e203a.rocketcdn.me/wp-content/uploads/2021/05/Soneva-Fushi.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[340px] md:h-[600px] w-full  rounded-lg" src="https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/master/w_1920%2Cc_limit/luxury-vacation-rental-sites-03.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[340px] md:h-[600px] w-full  rounded-lg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/d8/78/84/the-guesthouses-at-southernmos.jpg?w=1200&h=-1&s=1" />
        </SwiperSlide>
     
      </Swiper>
    </>
  );
}
