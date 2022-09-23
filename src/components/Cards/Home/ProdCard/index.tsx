import React, { FC } from 'react';

import style from './Prod.module.scss';

interface IProdCard {
  image: string;
  price: number;
  bpm: number;
  name: string;
}

const ProdCard: FC<IProdCard> = ({ image, price, bpm, name }) => {
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

export default ProdCard;
