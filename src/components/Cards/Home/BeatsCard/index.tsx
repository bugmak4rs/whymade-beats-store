import React, { FC } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="">
        <img src={image} className={style.image} />
      </Link>
      <Link to="">
        <div className={style.content}>
          <p>
            <span>{price}$</span> • {bpm} BPM
          </p>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default BeatsCard;
