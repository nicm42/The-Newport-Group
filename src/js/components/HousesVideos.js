import React from 'react';

import lakeHouse from '/videos/lake-house.mp4';
import villa from '/videos/villa.mp4';
import lakeHousePoster from '/imgs/lake-house.jpg';
import villaPoster from '/imgs/villa.jpg';

const HousesVideos = () => {
  const videos = [
    { video: lakeHouse, poster: lakeHousePoster },
    { video: villa, poster: villaPoster },
  ];

  return (
    <section className="pageVideos container">
      {videos.map((item, index) => (
        <video
          key={index}
          controls
          loop
          preload="metadata"
          poster={item.poster}
          className="pageVideos__video"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      ))}
    </section>
  );
};

export default HousesVideos;
