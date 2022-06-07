import './PanelImages.scss'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { OfferInterface } from '../Hero/Hero'

interface Props {
  imgs: OfferInterface["offer_image"]
}

const PanelImages: React.FC<Props> = ({ imgs }) => {

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
          <img src={imgs.side.image_kit_url} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgs.back.image_kit_url} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgs.front.image_kit_url} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PanelImages