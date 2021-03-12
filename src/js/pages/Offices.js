import React from 'react';

import PagesHeader from '../components/PagesHeader';
import PagesIntro from '../components/PagesIntro';
import PagesReview from '../components/PagesReview';
import PagesVideos from '../components/PagesVideos';

const Offices = () => {
  return (
    <>
      <PagesHeader />
      <main>
        <PagesIntro type="Offices" />
        <PagesReview type="Offices" />
        <PagesVideos type="Offices" />
      </main>
    </>
  );
};

export default Offices;
