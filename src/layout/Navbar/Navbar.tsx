import React from 'react';

import { GrLanguage } from 'react-icons/gr';
import Button from '../../UI/Button/Button';

import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <div className={`${classes.navbar} flex-jcsb`}>
        <img src="/assets/logo.png" alt="logo" className={classes.logo} />

        <ul className={`${classes.navbar__heading} flex-jcsb`}>
          <li>Noter</li>
          <li>
            <Button backgroundColor="rgb(232, 97, 97, 0.2)" color="#E86161">
              Audit RSE
            </Button>
          </li>
          <li>Devenir pro</li>
          <li>Contact</li>
        </ul>

        <ul className={`${classes.navbar__auth} flex-jcsb`}>
          <li className={`${classes.language} flex-jcsb`}>
            <GrLanguage className={classes.icon} />
            <span>FR</span>
          </li>
          <li>Connexion</li>
          <li>
            <Button backgroundColor="#153754">Insciption</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
