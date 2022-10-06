import React, { FC } from 'react';
import LoopKitCard from '../../components/Cards/LoopKits/LoopKitCard';

import test from '../../assets/img/beats/iayze.png';

import style from './LoopKits.module.scss';

const LoopKits: FC = () => {
  return (
    <section className={style.loopkits} id={'loopkits'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Loop Kits</h2>
          <LoopKitCard
            image={test}
            price={10}
            author={'@whymade'}
            title={'Damage Sound Kit'}
            link={'https://vk.com/wall-194370087_1681'}
          />
        </div>
      </div>
    </section>
  );
};

export default LoopKits;
