import React, { useEffect } from 'react';

import PagesHeader from '../components/PagesHeader';
import PagesIntro from '../components/PagesIntro';
import PagesReview from '../components/PagesReview';
import PagesVideos from '../components/PagesVideos';

const Buildings = () => {
  useEffect(() => {
    document.title = 'The Newport Group - Buy or Sell a House';
  }, []);

  return (
    <>
      <PagesHeader />
      <main>
        <PagesIntro type="Buildings" />
        <PagesReview type="Buildings" />
        <PagesVideos type="Buildings" />
      </main>
    </>
  );
};

export default Buildings;
