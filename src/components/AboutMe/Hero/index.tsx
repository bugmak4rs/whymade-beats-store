import React, { FC } from 'react';

import Me from '../../../assets/img/about-me/whymade.jpg';

import style from './AboutMe.module.scss';

const Hero: FC = () => {
  return (
    <section className={style.hero} id={'hero'}>
      <div className={style.container}>
        <div className={style.offset}>
          <div className={style.content}>
            <div>
              <h1 className={style.title}>Yo, I'm WhyMade</h1>
              <p className={style.vocation}>Producer + Loopmaker</p>
              <p className={style.credits}>
                Credits (ww): FANTANA, Key-O, Kid Swan, CHILLCASH, Soulraze, Young Shaba, YUNG NICK,
                163joint, twin.kami, Sunexite, wth_dp, Globrooks, Pluton, Lil Naly & more
              </p>
            </div>
            <div>
              <p className={style.offers}>
                All offers -{'>'}{' '}
                <a href="" target={'_blank'}>
                  @whym4de
                </a>{' '}
                inst
              </p>
            </div>
          </div>
          <img src={Me} alt="Me" className={style.image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
