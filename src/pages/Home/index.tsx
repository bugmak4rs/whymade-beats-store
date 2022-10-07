import React, { FC } from 'react';

import Hero from '../../components/Home/Hero';
import Beats from '../../components/Home/Beats';
import Prod from '../../components/Home/Prod';
import Loops from '../../components/Home/Loops';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Beats />
      <Prod />
      <Loops />
    </>
  );
};

export default Home;
