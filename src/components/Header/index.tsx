import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={classes.header__container}>
        <h1 className={classes.title}>
          Chercher les entreprises les plus responsable
        </h1>
        <p className={classes.slogan}>
          Sautons le pas pour que chaque voix compte quand il s’agit de sauver
          ce que nous avons de plus précieux
        </p>

        <button className={classes.button}>
          <img src="/assets/play.png" alt="play-icon" />
          <span>LANCER LA VIDÉO</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
