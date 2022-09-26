import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Beats from '../../pages/Beats';
import AboutMe from '../../pages/AboutMe';
import Home from '../../pages/Home';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/beats'} element={<Beats />} />
        <Route path={'/about-me'} element={<AboutMe />} />
        {/* <Route path={'*'} element={<NotFound />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
