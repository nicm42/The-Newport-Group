import React from 'react';

import PagesHeader from '../components/PagesHeader';
import OfficesIntro from '../components/OfficesIntro';
import OfficesReview from '../components/OfficesReview';
import OfficesVideos from '../components/OfficesVideos';

const Offices = () => {
  return (
    <>
      <PagesHeader />
      <main>
        <OfficesIntro />
        <OfficesReview />
        <OfficesVideos />
      </main>
    </>
  );
};
export default Offices;
