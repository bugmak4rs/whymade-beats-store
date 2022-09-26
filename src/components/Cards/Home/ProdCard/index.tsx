import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './Prod.module.scss';

interface IProdCard {
  image: string;
  name: string;
  track: string;
}

const ProdCard: FC<IProdCard> = ({ image, name, track }) => {
  return (
    <div className={style.card}>
      <Link to="">
        <img src={image} className={style.image} />
      </Link>
      <Link to="">
        <div className={style.content}>
          <p>
            <span>{name}</span>
          </p>
          <span>{track}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProdCard;
