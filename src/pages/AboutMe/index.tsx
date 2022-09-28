import React, { FC } from 'react';

import Me from '../../assets/img/about-me/whymade.jpg';
import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';
import vk from '../../assets/icons/vk.svg';

import style from './AboutMe.module.scss';

const AboutMe: FC = () => {
  return (
    <section className={style.aboutme} id={'about-me'}>
      <div className={style.container}>
        <div className={style.offset}>
          <div className={style.content}>
            <div className={style.top}>
              <h1 className={style.title}>Yo, I'm WhyMade</h1>
              <p className={style.vocation}>Producer + Loopmaker</p>
              <p className={style.credits}>
                Credits (ww): FANTANA, Key-O, Kid Swan, CHILLCASH, Soulraze, Young Shaba, YUNG NICK,
                163joint, twin.kami, Sunexite, wth_dp, Globrooks, Pluton, Lil Naly & more
              </p>
            </div>
            <div className={style.bottom}>
              <p className={style.offers}>
                All offers -{'>'}{' '}
                <a href="" target={'_blank'}>
                  @whym4de
                </a>{' '}
                inst
              </p>
              <div className={style.socials}>
                <a href={'https://t.me/whymade'} target={'_blank'}>
                  <img src={telegram} alt="Telegram" />
                </a>
                <a href={''} target={'_blank'}>
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href={'https://vk.com/whymade'} target={'_blank'}>
                  <img src={vk} alt="Vk" />
                </a>
              </div>
            </div>
          </div>
          <img src={Me} alt="Me" className={style.image} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
