import React, { FC } from 'react';

import style from './Beats.module.scss';

interface IBeatsCard {
  image: string;
}

const BeatsCard: FC<IBeatsCard> = ({ image }) => {
  return (
    <div className={style.card}>
      <img src={image} className={style.image} />
    </div>
  );
};

export default BeatsCard;
