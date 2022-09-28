import React, { FC } from 'react';

import style from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <section className={style.notfound}>
      <div className={style.container}>
        <h1 className={style.title}>Go back, stranger</h1>
        <p className={style.back}>An error occurred, page not found</p>
      </div>
    </section>
  );
};

export default NotFound;
