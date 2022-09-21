import React, { FC } from 'react';
import ProdCard from '../../Cards/Home/ProdCard';

import style from './Prod.module.scss';

const Prod: FC = () => {
  return (
    <section className={style.prod} id={'prod'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Title</h2>
          <div className={style.cards}>
            <ProdCard image={''} />
            <ProdCard image={''} />
            <ProdCard image={''} />
            <ProdCard image={''} />
            <ProdCard image={''} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prod;
