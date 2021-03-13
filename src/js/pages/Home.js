import React, { useEffect } from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import Parallax from '../components/Parallax';
import Cards from '../components/Cards';

const Home = () => {
  useEffect(() => {
    document.title = 'The Newport Group - Home';
  }, []);

  return (
    <>
      <Header />
      <main>
        <Info />
        <Parallax />
        <Cards />
      </main>
    </>
  );
};

export default Home;
