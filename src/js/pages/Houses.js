import React, { useEffect } from 'react';

import PagesHeader from '../components/PagesHeader';
import PagesIntro from '../components/PagesIntro';
import PagesReview from '../components/PagesReview';
import PagesVideos from '../components/PagesVideos';

const Houses = () => {
  useEffect(() => {
    document.title = 'The Newport Group - Buy or Sell a House';
  }, []);

  return (
    <>
      <PagesHeader />
      <main>
        <PagesIntro type="Houses" />
        <PagesReview type="Houses" />
        <PagesVideos type="Houses" />
      </main>
    </>
  );
};

export default Houses;
