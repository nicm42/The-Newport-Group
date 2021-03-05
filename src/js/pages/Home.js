import React from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import Parallax from '../components/Parallax';
import Cards from '../components/Cards';

const Home = () => {
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
