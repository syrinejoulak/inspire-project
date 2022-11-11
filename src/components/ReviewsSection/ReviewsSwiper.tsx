import React from 'react';

import ReviewsSwiperSlide from './ReviewsSwiperSlide';
import { Review } from '../../util/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { DUMMY_REVIEWS } from '../../util/DUMMY_DATA';

import 'swiper/css';
import 'swiper/css/pagination';

const ReviewsSwiper = () => {
  const Reviews = DUMMY_REVIEWS.map((review: Review, key) => (
    <SwiperSlide key={key}>
      <ReviewsSwiperSlide
        company={review.company}
        review={review.review}
        user={review.user}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {Reviews}
    </Swiper>
  );
};

export default ReviewsSwiper;
