import './PanelImages.scss'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import side from '../../assets/img/citadineSide.png'
import front from '../../assets/img/citadineFront.png'
import back from '../../assets/img/citadineBack.png'

const PanelImages: React.FC = () => {
  return (
    <div className="PanelImages">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        navigation={true}
        loop={true}
      >
        <SwiperSlide>
          <img src={side} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={front} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={back} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PanelImages