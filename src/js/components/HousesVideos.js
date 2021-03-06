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
        <div key={index} className="pageVideos__container">
          <video
            controls
            loop
            preload="metadata"
            poster={item.poster}
            className="pageVideos__video"
          >
            <source src={item.video} type="video/mp4" />
          </video>
          <button className="pageVideos__play">
            <i class="las la-play"></i>
          </button>
          <button className="pageVideos__pause">
            <i class="las la-pause"></i>
          </button>
        </div>
      ))}
    </section>
  );
};

export default HousesVideos;
