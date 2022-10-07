import React, { FC } from 'react';

import style from './Prod.module.scss';

const Prod: FC = () => {
  return (
    <section className={style.prod} id={'prod'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h1 className={style.title}>Prod.</h1>
        </div>
      </div>
    </section>
  );
};

export default Prod;
