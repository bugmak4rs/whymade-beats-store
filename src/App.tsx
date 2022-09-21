import React, { FC } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import './scss/global.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
