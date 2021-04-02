import React, { useEffect } from 'react';

import PagesHeader from '../components/PagesHeader';
import PagesIntro from '../components/PagesIntro';
import PagesReview from '../components/PagesReview';
import PagesVideos from '../components/PagesVideos';

const Offices = () => {
  useEffect(() => {
    document.title = 'The Newport Group - Office Space';
  }, []);

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
