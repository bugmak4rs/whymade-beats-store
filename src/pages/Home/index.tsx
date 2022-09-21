import React, { FC } from 'react';

import Beats from '../../components/Home/Beats';
import Contacts from '../../components/Home/Contacts';
import Hero from '../../components/Home/Hero';
import Prod from '../../components/Home/Prod';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Beats />
      <Prod />
      <Contacts />
    </>
  );
};

export default Home;
