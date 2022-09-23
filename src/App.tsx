import React, { FC } from 'react';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

import './scss/global.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
