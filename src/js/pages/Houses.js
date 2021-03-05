import React from 'react';

import PagesHeader from '../components/PagesHeader';
import HousesIntro from '../components/HousesIntro';
import HousesReview from '../components/HousesReview';
import HousesVideos from '../components/HousesVideos';

const Houses = () => {
  return (
    <>
      <PagesHeader />
      <main>
        <HousesIntro />
        <HousesReview />
        <HousesVideos />
      </main>
    </>
  );
};

export default Houses;
