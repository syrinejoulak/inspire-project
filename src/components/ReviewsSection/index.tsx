import React from 'react';

import ReviewsSwiper from './ReviewsSwiper';

import classes from './ReviewsSection.module.scss';

const ReviewsSection = () => {
  return (
    <section className={classes.reviews_section}>
      <h2 className={classes.title}>Derniers avis déposés</h2>
      <p className={classes.description}>
        Derniers avis déposés par des utilisateurs inscrits sur la plateforme ou
        publiés en ligne suite à un audit RSE
      </p>

      <ReviewsSwiper />
    </section>
  );
};

export default ReviewsSection;
