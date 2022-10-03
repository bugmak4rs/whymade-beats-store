import React, { FC } from 'react';

import style from './LoopKits.module.scss';

interface ILoopKitCard {
  image: string;
  title: string;
  author: string;
  price: number;
  link: string;
}

const LoopKitCard: FC<ILoopKitCard> = ({ image, title, author, price, link }) => {
  return (
    <div className={style.card}>
      <img className={style.card__image} src={image} alt="LoopKit" />
      <div className={style.card__content}>
        <h3 className={style.card__title}>{title}</h3>
        <p className={style.card__author}>{author}</p>
        <p className={style.card__price}>{price} $</p>
        <a className={style.card__link} href={link} target={'_blank'}>
          Get
        </a>
      </div>
    </div>
  );
};

export default LoopKitCard;
