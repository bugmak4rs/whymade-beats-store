import React, { FC } from 'react';

import style from './Beats.module.scss';

interface IBeatsCard {
  image: string;
  price: number;
  bpm: number;
  name: string;
}

const BeatsCard: FC<IBeatsCard> = ({ image, price, bpm, name }) => {
  return (
    <div className={style.card}>
      <img src={image} className={style.image} />
      <div className={style.content}>
        <p>
          <span>{price}$</span> • {bpm} BPM{' '}
        </p>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default BeatsCard;
