import React, { FC } from 'react';

import style from './Beats.module.scss';

const Beats: FC = () => {
  return (
    <section className={style.beats} id={'beats'}>
      <div className={style.container}>
        <div className={style.offset}></div>
      </div>
    </section>
  );
};

export default Beats;
