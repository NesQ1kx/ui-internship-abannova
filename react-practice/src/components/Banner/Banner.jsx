import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Banner.module.scss'
import Header from "../Header/Header";
import Button from "../Button/Button";

const Banner = () => {
  const history = useHistory();

  function openShop() {
    history.push("/shop");
  }

  return (
    <div className={styles.banner}>
      <Header transparent />
      <div className={styles.content}>
        <div className={styles.title}>
          Upscale Your Home With Natural Stone
        </div>
        <div className={styles.description}>
          We help you to choose suitable pavers for your home and invite you to shop in our store.
        </div>
        <Button onClick={openShop}>Shop Now</Button>
      </div>
    </div>
  );
};

export default Banner;
