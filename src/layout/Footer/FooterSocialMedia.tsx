import React from 'react';

interface FooterSocialMediaProps {
  socialMedia: string;
  link: string;
}

const FooterSocialMedia = ({ socialMedia, link }: FooterSocialMediaProps) => {
  return (
    <a href={link} target="_blank">
      <img src={`/assets/${socialMedia}.png`} />
    </a>
  );
};

export default FooterSocialMedia;
