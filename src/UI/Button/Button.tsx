import React from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  color?: string;
}

const Button = ({ children, backgroundColor, color }: ButtonProps) => {
  return (
    <button
      className={classes.button}
      style={{ backgroundColor, color }}
    >
      {children}
    </button>
  );
};

export default Button;
