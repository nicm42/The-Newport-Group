import React, { useState, useRef, createRef } from 'react';
import { playVideo, pauseVideo } from '../utilities/videoToggle';

import emptyRoom from '/videos/empty-room.mp4';
import lakeHouseTop from '/videos/lake-house-top.mp4';
import emptyRoomPoster from '/imgs/empty-room.jpg';
import lakeHouseTopPoster from '/imgs/lake-house-top.jpg';

const BuildingsVideos = () => {
  const videos = [
    {
      video: emptyRoom,
      poster: emptyRoomPoster,
      label: 'Moving out from the corner of an empty room',
    },
    {
      video: lakeHouseTop,
      poster: lakeHouseTopPoster,
      label: 'Moving up from the roof of a house by a lake',
    },
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

export default BuildingsVideos;
