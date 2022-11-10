import React from 'react';

import FooterSocialMedia from './FooterSocialMedia';
import FooterLinks from './FooterLinks';

import classes from './Footer.module.scss';

const Footer = () => {
  const rateAComponanyLinks = [
    { title: 'A propos de Rate A Company', url: '' },
    { title: 'Articles sur la RSE', url: '' },
    { title: 'Vidéos sur la RSE', url: '' },
    { title: 'Tarifs', url: '' },
    { title: 'Contact', url: '' },
  ];

  const ServicesPROLinks = [
    { title: 'AUDIT RSE', url: '' },
    { title: 'Devenir PRO', url: '' },
  ];

  const LegalLinks = [
    { title: 'Mentions légales', url: '' },
    { title: 'Conditions d’utilisation', url: '' },
    { title: 'Plan du site', url: '' },
  ];

  return (
    <footer>
      <div className={classes.footer__container}>
        <div>
          <img
            src="/assets/logo-footer.png"
            alt="logo-footer"
            className={classes.footer__logo}
          />

          <div className={classes.socialMedial__container}>
            <FooterSocialMedia socialMedia="linkedin" link="" />
            <FooterSocialMedia socialMedia="tweeter" link="" />
            <FooterSocialMedia socialMedia="facebook" link="" />
            <FooterSocialMedia socialMedia="youtube" link="" />
          </div>
        </div>

        <div className={classes.links}>
          <FooterLinks title="Rate A Company" links={rateAComponanyLinks} />
          <FooterLinks title="Services PRO" links={ServicesPROLinks} />
          <FooterLinks title="Legal" links={LegalLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
