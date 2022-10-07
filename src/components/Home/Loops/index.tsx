import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import LoopKitCard from '../../Cards/LoopKits/LoopKitCard';

import iayze from '../../../assets/img/beats/iayze.png';
import slumps from '../../../assets/img/beats/6slumps.png';
import kencarson from '../../../assets/img/beats/ken-carson.png';
import richamiri from '../../../assets/img/beats/rich-amiri.png';

import style from './Loops.module.scss';

const Loops: FC = () => {
  return (
    <section className={style.prod} id={'prod'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Loops</h2>
          <div className={style.cards}>
            <LoopKitCard
              image={iayze}
              price={10}
              author={'@whymade'}
              title={'Damage Sound Kit'}
              link={'https://vk.com/wall-194370087_1681'}
            />
            <LoopKitCard
              image={slumps}
              price={10}
              author={'@whymade'}
              title={'Damage Sound Kit'}
              link={'https://vk.com/wall-194370087_1681'}
            />
            <LoopKitCard
              image={kencarson}
              price={10}
              author={'@whymade'}
              title={'Damage Sound Kit'}
              link={'https://vk.com/wall-194370087_1681'}
            />
            <LoopKitCard
              image={richamiri}
              price={10}
              author={'@whymade'}
              title={'Damage Sound Kit'}
              link={'https://vk.com/wall-194370087_1681'}
            />
          </div>
          <div className={style.more}>
            <Link className={style.more__link} to={'/loops'}>
              <span>Show more</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loops;
