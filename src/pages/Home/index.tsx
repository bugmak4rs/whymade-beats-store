import React, { FC } from 'react';

import Beats from '../../components/Home/Beats';
import Hero from '../../components/Home/Hero';
import Prod from '../../components/Home/Prod';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Beats />
      <Prod />
    </>
  );
};

export default Home;
