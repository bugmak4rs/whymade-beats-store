import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={style.header} id={'header'}>
      <div className={style.container}>
        <Link to={'/'} className={style.logo}>
          WHYMADE
        </Link>
        <nav className={style.nav}>
          <Link to={'/'}>Home</Link>
          <Link to={'/beats'}>Beats</Link>
          <Link to={'/about-me'}>About me</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
