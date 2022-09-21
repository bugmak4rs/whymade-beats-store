import React, { FC } from 'react';

import style from './Prod.module.scss';

interface IProdCard {
  image: string;
}

const ProdCard: FC<IProdCard> = ({ image }) => {
  return (
    <div className={style.card}>
      <img src={image} className={style.image} />
    </div>
  );
};

export default ProdCard;
