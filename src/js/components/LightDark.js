import React, { useState } from 'react';

const LightDark = () => {
  const [isDark, setIsDark] = useState(checkMode);
  let mode = localStorage.getItem('mode');

  function checkMode() {
    if (localStorage.getItem('mode') === 'dark') {
      //if the last time they were on the site it was dark mode then make it dark
      //It's light by default, so don't need to worry about that
      document.body.classList.add('dark');
      return true;
    } else {
      return false;
    }
  }

  const setTheme = () => {
    if (mode === 'dark') {
      //console.log('making light');
      document.body.classList.remove('dark');
      localStorage.setItem('mode', 'light');
      setIsDark(false);
    } else {
      //console.log('making dark');
      document.body.classList.add('dark');
      localStorage.setItem('mode', 'dark');
      setIsDark(true);
    }
    mode = localStorage.getItem('mode');
    //console.log('mode now = ' + mode);
  };

  return (
    <button className="header__lightdark" onClick={setTheme}>
      <i
        className={isDark ? 'las la-sun' : 'las la-sun none'}
        title="Light mode"
      ></i>
      <i
        className={isDark ? 'las la-moon none' : 'las la-moon'}
        title="Dark mode"
      ></i>
    </button>
  );
};

export default LightDark;
