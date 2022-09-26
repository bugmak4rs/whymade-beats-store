import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import AboutMe from '../../pages/AboutMe';
import Beats from '../../pages/Beats';
import Team from '../../pages/Team';
import NotFound from '../../pages/NotFound';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about-me'} element={<AboutMe />} />
        <Route path={'/beats'} element={<Beats />} />
        <Route path={'/team'} element={<Team />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
