import React from 'react';

import Button from '../../UI/Button/Button';

import classes from './IntroSection.module.scss';

interface IntroSectionCardProps {
  title: string;
  subTitle: string;
  paragraph: string;
  buttonText: string;
}

const IntroSectionCard = ({
  title,
  subTitle,
  paragraph,
  buttonText,
}: IntroSectionCardProps) => {
  return (
    <div className={classes.intro__card}>
      <div>
        <h2 className={classes.title}>{title}</h2>
        <h3 className={classes.subTitle}>{subTitle}</h3>
        <p className={classes.paragraph}>{paragraph}</p>
      </div>

      <Button backgroundColor="#E86161">{buttonText}</Button>
    </div>
  );
};

export default IntroSectionCard;
