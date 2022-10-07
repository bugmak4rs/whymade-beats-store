import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Burger } from './icon';

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
          <Link to={'/loopkits'}>Loops</Link>
          <Link to={'/about'}>About</Link>
        </nav>
        <button className={style.burger} arial-label={'всплывающие меню'}>
          <Burger />
        </button>
      </div>
    </header>
  );
};

export default Header;
