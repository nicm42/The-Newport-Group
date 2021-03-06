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
  const playPauseRefs = useRef([]);
  playPauseRefs.current = videos.map(
    (video, i) => playPauseRefs.current[i] ?? createRef()
  );

  const toggle = (video, button, playPause, index) => {
    console.log(isPlaying);
    if (isPlaying[index] === true) {
      setIsPlaying({ ...isPlaying, [index]: false });
      video.current.pause();
      playPause.current.classList.remove('la-pause');
      playPause.current.classList.add('la-play');
      button.current.style.opacity = 1;
    } else {
      setIsPlaying({ ...isPlaying, [index]: true });
      video.current.play();
      playPause.current.classList.remove('la-play');
      playPause.current.classList.add('la-pause');
      button.current.style.opacity = 0;
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
              toggle(
                videoRefs.current[index],
                buttonRefs.current[index],
                playPauseRefs.current[index]
              )
            }
          >
            <source src={item.video} type="video/mp4" />
          </video>
          <button
            className="pageVideos__control"
            ref={buttonRefs.current[index]}
            onClick={() =>
              toggle(
                videoRefs.current[index],
                buttonRefs.current[index],
                playPauseRefs.current[index]
              )
            }
          >
            <i ref={playPauseRefs.current[index]} className="las la-play"></i>
          </button>
        </div>
      ))}
    </section>
  );
};

export default HousesVideos;
