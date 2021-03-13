import React, { useState, useRef, createRef } from 'react';
import { houseVideos } from '../content/housesContent';
import { buildingVideos } from '../content/buildingsContent';
import { officeVideos } from '../content/officesContent';

const PagesVideos = (props) => {
  const { type } = props;

  const pageContent = () => {
    switch (type) {
      case 'Houses':
        return houseVideos;
      case 'Buildings':
        return buildingVideos;
      case 'Offices':
        return officeVideos;
      default:
        return '';
    }
  };

  const videos = pageContent();

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
    }
  };

  return (
    <section className="pageVideos container diagonal">
      {videos.map((item, index) => (
        <div key={index} className="pageVideos__container">
          <video
            loop
            muted
            preload="metadata"
            poster={item.poster}
            ref={videoRefs.current[index]}
            className="pageVideos__video"
            aria-label={item.label}
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

export default PagesVideos;