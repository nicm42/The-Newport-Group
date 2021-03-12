import React from 'react';
import { housesContent } from '../content/housesContent';

const PagesIntro = (props) => {
  const { type } = props;

  const pageContent = (section) => {
    switch (type) {
      case 'Houses':
        if (section === 'title') return housesContent.title;
        if (section === 'image') return housesContent.image;
        if (section === 'intro') return housesContent.intro;
      case 'Buildings':
        return 'House building';
      case 'Offices':
        return 'Office space';
      default:
        return '';
    }
  };

  return (
    <section className="pageIntro container">
      <h2 className="pageIntro__title">{pageContent('title')}</h2>
      <div className="pageIntro__imagetext">
        <img src={pageContent('image')} alt="" className="pageIntro__image" />
        <div
          className="pageIntro__intro"
          dangerouslySetInnerHTML={{ __html: pageContent('intro') }}
        ></div>
      </div>
    </section>
  );
};

export default PagesIntro;
