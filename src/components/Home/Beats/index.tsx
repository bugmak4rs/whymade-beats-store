import React, { FC } from 'react';
import BeatsCard from '../../Cards/Home/BeatsCard';

import iayze from '../../../assets/img/beats/iayze.png';
import slumps from '../../../assets/img/beats/6slumps.png';
import kencarson from '../../../assets/img/beats/ken-carson.png';
import richamiri from '../../../assets/img/beats/rich-amiri.png';

import style from './Beats.module.scss';

const Beats: FC = () => {
  return (
    <section className={style.beats} id={'beats'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Beats</h2>
          <div className={style.cards}>
            <BeatsCard image={iayze} price={20} bpm={133} name={'UP!'} />
            <BeatsCard image={slumps} price={50} bpm={142} name={'hood&friends'} />
            <BeatsCard image={kencarson} price={30} bpm={148} name={'planets'} />
            <BeatsCard image={richamiri} price={20} bpm={147} name={'Love off'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beats;
