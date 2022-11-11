import React from 'react';
import useWindowSize from '../../util/useWindowSize';

import classes from './NotFound.module.scss';

const NotFound = () => {
  const { width } = useWindowSize();

  let dimension;

  if (width > 540) {
    dimension = 'Tablet';
  } else {
    dimension = 'Mobile';
  }

  return (
    <div className={classes.container}>
      <div className={classes.number}>404</div>
      <div className={classes.text}>
        <span>Ooops...</span>
        <br />
        {dimension} not available
      </div>
    </div>
  );
};

export default NotFound;
