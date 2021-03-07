import React from 'react';

import PagesHeader from '../components/PagesHeader';
import BuildingsIntro from '../components/BuildingsIntro';
import BuildingsReview from '../components/BuildingsReview';
import BuildingsVideos from '../components/BuildingsVideos';

const Buildings = () => {
  return (
    <>
      <PagesHeader />
      <main>
        <BuildingsIntro />
        <BuildingsReview />
        <BuildingsVideos />
      </main>
    </>
  );
};

export default Buildings;
