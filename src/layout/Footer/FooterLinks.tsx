import React from 'react';

import classes from './Footer.module.scss';

interface FooterLinksProps {
  title: string;
  links: { title: string; url: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className={classes.footer__link}>
      <h4 className={classes.title}>{title}</h4>

      <ul>
        {links.map((link, key) => (
          <li className={classes.url} key={key}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
