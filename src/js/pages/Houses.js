import React from 'react';
import HousesIntro from '../components/HousesIntro';
import HousesReview from '../components/HousesReview';
import HousesVideos from '../components/HousesVideos';

import '/css/header-height.css';

const Houses = () => {
  return (
    <>
      <HousesIntro />
      <HousesReview />
      <HousesVideos />
    </>
  );
};

export default Houses;
