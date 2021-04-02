import React from 'react';
import footerContent from '../content/footerContent';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__owner">
        <p>{footerContent.ownerText}</p>
        <img
          src={footerContent.ownerImage}
          alt={footerContent.ownerText}
          className="footer__photo"
          loading="lazy"
        />
      </div>

      <div className="footer__contactmap">
        <div className="footer__contact">
          <p dangerouslySetInnerHTML={{ __html: footerContent.address }}></p>

          <p>
            <i className="las la-envelope"></i>{' '}
            <a href="mailto:#">{footerContent.email}</a>
          </p>

          <p>
            <i className="las la-phone"></i> {footerContent.phone}
          </p>
        </div>

        <img
          src={footerContent.imageSmall}
          srcSet={footerContent.srcset}
          sizes="(min-width: 40em) 50vw, 100vw"
          alt={footerContent.alt}
          className="footer__map"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
