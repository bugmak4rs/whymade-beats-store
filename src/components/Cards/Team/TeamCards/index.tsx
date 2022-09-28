import React, { FC } from 'react';

import telegram_logo from '../../../../assets/icons/telegram-black.svg';
import github_logo from '../../../../assets/icons/github.svg';

import style from './Team.module.scss';

interface ITeamCard {
  image: string;
  name: string;
  telegram: string;
  github: string;
  description: string;
}

const TeamCard: FC<ITeamCard> = ({ image, name, telegram, github, description }) => {
  return (
    <div className={style.card}>
      <div className={style.card__main}>
        <img src={image} alt="" className={style.card__image} />
        <div className={style.card__info}>
          <span className={style.card__name}>{name}</span>
          <div className={style.card__social}>
            {telegram ? (
              <a href={telegram} target={'_blank'}>
                <img src={telegram_logo} alt="Telegram" />
              </a>
            ) : (
              <a href="#">
                <img src={telegram_logo} alt="Telegram" />
              </a>
            )}
            {github ? (
              <a href={github} target={'_blank'}>
                <img src={github_logo} alt="GitHub" />
              </a>
            ) : (
              <a href="#">
                <img src={github_logo} alt="GitHub" />
              </a>
            )}
          </div>
        </div>
      </div>
      <p className={style.card__description}>{description}</p>
    </div>
  );
};

export default TeamCard;
