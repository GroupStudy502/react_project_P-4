import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';


const SwiperComponent = ( { children }) => {
    return (
        <Swiper 
            spaceBetween={260}
            sliderPerView={3}
            scrollbar={{ draggable: true }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    slidesPerView: 6,
                },
            }}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;