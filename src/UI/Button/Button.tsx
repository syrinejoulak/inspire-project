import React from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Button = ({ children, backgroundColor }: ButtonProps) => {
  return (
    <button className={classes.button} style={{ backgroundColor }}>
      {children}
    </button>
  );
};

export default Button;
