import React, { FC } from 'react';
import TeamCard from '../../components/Cards/Team/TeamCards';

import aleksey from '../../assets/img/team/aleksey.jpg';
import slava from '../../assets/img/team/slava.jpg';

import style from './Team.module.scss';

const Team: FC = () => {
  return (
    <section className={style.team} id={'team'}>
      <div className={style.container}>
        <h1 className={style.title}>Development team</h1>
        <div className={style.collums}>
          <div className={style.frontend}>
            <div className={style.direction}>
              <span className={style.direction__name}>{'<Frontend />'}</span>
            </div>
            <div className={style.cards}>
              <TeamCard
                image={aleksey}
                name={'Aleksey Popov'}
                telegram={'https://t.me/AlekseyPopovDev'}
                github={'https://github.com/1PopovAleksey'}
                description={
                  'MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS'
                }
              />
              <TeamCard
                image={slava}
                name={'Slava Kagarlitskiy'}
                telegram={'https://t.me/StelsP'}
                github={'https://github.com/StelsP'}
                description={
                  'MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS'
                }
              />
            </div>
          </div>
          <div className={style.frontend}>
            <div className={style.direction}>
              <span className={style.direction__name}>{'Backend;'}</span>
            </div>
            <div className={style.cards}>
              <TeamCard
                image={slava}
                name={'Slava Kagarlitskiy'}
                telegram={'https://t.me/StelsP'}
                github={'https://github.com/StelsP'}
                description={
                  'MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS'
                }
              />
            </div>
          </div>
          <div className={style.frontend}>
            <div className={style.direction}>
              <span className={style.direction__name}>{'Design'}</span>
            </div>
            <div className={style.cards}>
              <TeamCard
                image={aleksey}
                name={'Aleksey Popov'}
                telegram={'https://t.me/AlekseyPopovDev'}
                github={'https://github.com/1PopovAleksey'}
                description={
                  'MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS MADE THIS'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
