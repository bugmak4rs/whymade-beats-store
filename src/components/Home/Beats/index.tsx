import React, { FC } from 'react';
import BeatsCard from '../../Cards/Home/BeatsCard';

import style from './Beats.module.scss';

const Beats: FC = () => {
  return (
    <section className={style.beats} id={'beats'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Title</h2>
          <div className={style.cards}>
            <BeatsCard image={''} />
            <BeatsCard image={''} />
            <BeatsCard image={''} />
            <BeatsCard image={''} />
            <BeatsCard image={''} />
          </div>
          <a href="https://t.me/whymade" target={'_blank'} className={style.more}>
            All beats can be found in telegram.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beats;
