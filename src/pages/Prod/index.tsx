import React, { FC } from 'react';

import ProdCard from '../../components/Cards/Home/ProdCard';

import iayze from '../../assets/img/beats/iayze.png';
import slumps from '../../assets/img/beats/6slumps.png';
import kencarson from '../../assets/img/beats/ken-carson.png';
import richamiri from '../../assets/img/beats/rich-amiri.png';

import style from './Prod.module.scss';

const Prod: FC = () => {
  return (
    <section className={style.prod} id={'prod'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h1 className={style.title}>Prod.</h1>
          <p className={style.description}>Works in which I participated as a producer</p>
          <div className={style.cards}>
            <ProdCard image={iayze} name={'FrankSouth'} track={'UP!'} />
            <ProdCard image={slumps} name={'Lil Down'} track={'hood&friends'} />
            <ProdCard image={kencarson} name={'Young Nigga'} track={'planets'} />
            <ProdCard image={richamiri} name={'Dudkid'} track={'Love off'} />
          </div>
          <div className={style.cards}>
            <ProdCard image={iayze} name={'FrankSouth'} track={'UP!'} />
            <ProdCard image={slumps} name={'Lil Down'} track={'hood&friends'} />
            <ProdCard image={kencarson} name={'Young Nigga'} track={'planets'} />
            <ProdCard image={richamiri} name={'Dudkid'} track={'Love off'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prod;
