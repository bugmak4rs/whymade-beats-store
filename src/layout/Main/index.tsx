import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Beats from '../../pages/Beats';
import Prod from '../../pages/Prod';
import LoopKits from '../../pages/LoopKits';
import AboutMe from '../../pages/AboutMe';
import Team from '../../pages/Team';
import NotFound from '../../pages/NotFound';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/beats'} element={<Beats />} />
        <Route path={'/prod'} element={<Prod />} />
        <Route path={'/loops'} element={<LoopKits />} />
        <Route path={'/about'} element={<AboutMe />} />
        <Route path={'/team'} element={<Team />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
