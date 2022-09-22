import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './Hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={style.hero} id={'hero'}>
      <div className={style.container}>
        <h1 className={style.title}>I made this!</h1>
        <p className={style.text}>I make the freshest beats in all the latest styles.</p>
        <Link to={'/beats'} className={style.link}>
          get swag
        </Link>
      </div>
    </section>
  );
};

export default Hero;
