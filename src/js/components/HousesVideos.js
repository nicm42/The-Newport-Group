import React, { useState, useRef, createRef } from 'react';
import { playVideo, pauseVideo } from '../utilities/videoToggle';

import lakeHouse from '/videos/lake-house.mp4';
import villa from '/videos/villa.mp4';
import lakeHousePoster from '/imgs/lake-house.jpg';
import villaPoster from '/imgs/villa.jpg';

const HousesVideos = () => {
  const videos = [
    {
      video: lakeHouse,
      poster: lakeHousePoster,
      label: 'Arial view from a lake going towards a house',
    },
    { video: villa, poster: villaPoster, label: 'Coming up close on a house' },
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
    if (event.code === 'Space' || !event.code) {
      if (isPlaying[index] === true) {
        setIsPlaying({ ...isPlaying, [index]: false });
        video.current.pause();
        pauseVideo(video, button, playPause);
      } else {
        setIsPlaying({ ...isPlaying, [index]: true });
        playVideo(video, button, playPause);
      }
    }
  };

  return (
    <section className="pageVideos container diagonal">
      {videos.map((item, index) => (
        <div key={index} className="pageVideos__container">
          <video
            loop
            preload="metadata"
            poster={item.poster}
            ref={videoRefs.current[index]}
            className="pageVideos__video"
            arial-label={item.label}
            onClick={() =>
              toggle(
                videoRefs.current[index],
                buttonRefs.current[index],
                playPauseRefs.current[index]
              )
            }
            onKeyPress={() =>
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
            aria-label="Play/Pause"
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
