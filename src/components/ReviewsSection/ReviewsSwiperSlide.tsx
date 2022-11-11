import React from 'react';

import { Review } from '../../util/types';

import classes from './ReviewsSection.module.scss';

const ReviewsSwiperSlide = ({ company, review, user }: Review) => {
  return (
    <div className={classes.card}>
      <div className={`${classes.company} flex`}>
        <img src={company.logoUrl} alt="company-logo" />
        <div className={classes.details}>
          <h4>{company.name}</h4>
          <p>{company.address}</p>
        </div>
      </div>

      <div className={classes.review}>
        <div className={classes.rate}>
          <div></div>
          <h4>{review.rate}</h4>
        </div>
        <h4>Contributed in the lorem ipsum</h4>
        <p>{review.comment} </p>
      </div>

      <div className={`${classes.user} flex`}>
        <img src={user.profileImgUrl} alt="user-profile-image" />
        <span>User#{user.id}</span>
      </div>
    </div>
  );
};

export default ReviewsSwiperSlide;
