import React, { useState, useRef, createRef } from 'react';

import lakeHouse from '/videos/lake-house.mp4';
import villa from '/videos/villa.mp4';
import lakeHousePoster from '/imgs/lake-house.jpg';
import villaPoster from '/imgs/villa.jpg';

const HousesVideos = () => {
  const videos = [
    { video: lakeHouse, poster: lakeHousePoster },
    { video: villa, poster: villaPoster },
  ];

  const [isPlaying, setIsPlaying] = useState({});

  const videoRefs = useRef([]);
  videoRefs.current = videos.map(
    (video, i) => videoRefs.current[i] ?? createRef()
  );
  const buttonRefs = useRef([]);
  buttonRefs.current = videos.map(
    (video, i) => buttonRefs.current[i] ?? createRef()
  );

  const toggle = (video, button, index) => {
    console.log(isPlaying);
    if (isPlaying[index] === true) {
      setIsPlaying({ ...isPlaying, [index]: false });
      video.current.pause();
      button.current.classList.remove('la-pause');
      button.current.classList.add('la-play');
    } else {
      setIsPlaying({ ...isPlaying, [index]: true });
      video.current.play();
      button.current.classList.remove('la-play');
      button.current.classList.add('la-pause');
    }
  };

  return (
    <section className="pageVideos container">
      {videos.map((item, index) => (
        <div key={index} className="pageVideos__container">
          <video
            loop
            preload="metadata"
            poster={item.poster}
            ref={videoRefs.current[index]}
            className="pageVideos__video"
            onClick={() =>
              toggle(videoRefs.current[index], buttonRefs.current[index])
            }
          >
            <source src={item.video} type="video/mp4" />
          </video>
          <button
            className="pageVideos__control"
            onClick={() =>
              toggle(videoRefs.current[index], buttonRefs.current[index])
            }
          >
            <i ref={buttonRefs.current[index]} className="las la-play"></i>
          </button>
        </div>
      ))}
    </section>
  );
};

export default HousesVideos;
