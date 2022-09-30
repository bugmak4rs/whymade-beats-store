import React, { FC } from 'react';

import style from './LoopKits.module.scss';

const LoopKits: FC = () => {
  return (
    <section className={style.loopkits} id={'loopkits'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Loop Kits</h2>
        </div>
      </div>
    </section>
  );
};

export default LoopKits;
