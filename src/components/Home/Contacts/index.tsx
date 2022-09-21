import React, { FC } from 'react';

import style from './Contacts.module.scss';

const Contacts: FC = () => {
  return (
    <section className={style.Contacts} id={'Contacts'}>
      <div className={style.container}>
        <div className={style.offset}>
          <h2 className={style.title}>Title</h2>
          <div>
            <a href="" target={'_blank'}>
              Telegram: <span>@mademad3</span>
            </a>
            <a href="" target={'_blank'}>
              Instagram: <span>@whymade</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
