import React from 'react';
import PropTypes from 'prop-types';
import { houseIntro } from '../content/housesContent';
import { buildingIntro } from '../content/buildingsContent';
import { officeIntro } from '../content/officesContent';

const PagesIntro = (props) => {
  const { type } = props;

  const pageContent = (section) => {
    switch (type) {
      case 'Houses':
        if (section === 'title') return houseIntro.title;
        if (section === 'image') return houseIntro.imageSmall;
        if (section === 'imageSmall') return houseIntro.imageSmall;
        if (section === 'imageMedium') return houseIntro.imageMedium;
        if (section === 'imageBig') return houseIntro.imageBig;
        if (section === 'intro') return houseIntro.intro;
      case 'Buildings':
        if (section === 'title') return buildingIntro.title;
        if (section === 'image') return buildingIntro.imageSmall;
        if (section === 'imageSmall') return buildingIntro.imageSmall;
        if (section === 'imageMedium') return buildingIntro.imageMedium;
        if (section === 'imageBig') return buildingIntro.imageBig;
        if (section === 'intro') return buildingIntro.intro;
      case 'Offices':
        if (section === 'title') return officeIntro.title;
        if (section === 'image') return officeIntro.imageSmall;
        if (section === 'imageSmall') return officeIntro.imageSmall;
        if (section === 'imageMedium') return officeIntro.imageMedium;
        if (section === 'imageBig') return officeIntro.imageBig;
        if (section === 'intro') return officeIntro.intro;
      default:
        return '';
    }
  };

  return (
    <section className="pageIntro container">
      <h2 className="pageIntro__title">{pageContent('title')}</h2>
      <div className="pageIntro__imagetext">
        <img
          src={pageContent('image')}
          srcSet={`${pageContent('imageSmall')} 450w,
                  ${pageContent('imageMedium')} 750w,
                  ${pageContent('imageBig')} 1500w,`}
          sizes="(min-width: 40em) 50vw, 100vw"
          alt=""
          className="pageIntro__image"
        />
        <div
          className="pageIntro__intro"
          dangerouslySetInnerHTML={{ __html: pageContent('intro') }}
          data-testid="intro"
        ></div>
      </div>
    </section>
  );
};

PagesIntro.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PagesIntro;
