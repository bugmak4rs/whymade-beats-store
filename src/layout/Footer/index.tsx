import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';
import vk from '../../assets/icons/vk.svg';

import style from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={style.footer} id={'footer'}>
      <div className={style.container}>
        <Link to={'/team'} className={style.team}>
          BUGMAKERS! <span>made this</span>
        </Link>
        <nav className={style.nav}>
          <a href={'https://t.me/whymade'} target={'_blank'}>
            <img src={telegram} alt="Telegram" />
          </a>
          <a href={''} target={'_blank'}>
            <img src={instagram} alt="Instagram" />
          </a>
          <a href={'https://vk.com/whymade'} target={'_blank'}>
            <img src={vk} alt="Vk" />
          </a>
        </nav>
        <span className={style.right}>© 2022 WHYMADE, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
