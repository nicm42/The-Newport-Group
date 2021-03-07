export const playVideo = (video, button, playPause) => {
  video.current.play();
  playPause.current.classList.remove('la-play');
  playPause.current.classList.add('la-pause');
  button.current.style.opacity = 0;
};

export const pauseVideo = (video, button, playPause) => {
  video.current.play();
  playPause.current.classList.remove('la-play');
  playPause.current.classList.add('la-pause');
  button.current.style.opacity = 0;
};
