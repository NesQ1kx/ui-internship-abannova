import React from 'react';

import styles from '../Dealer/Dealer.module.scss'
import Button, {buttonColors} from "../Button/Button";

const Dealer = () => {
  return (
    <div className={styles.dealer}>
      <div>
        <div className={styles.title}>FIND A DEALER</div>
        <div className={styles.description}>Our dealers located throughout Ontario, Quebec, and North-East Michigan can help you visualize your stone solution and pair the right tiles for your project to build a customized solution.</div>
      </div>
      <Button backgroundColor={buttonColors.transparent}>Get in touch</Button>
    </div>
  );
};

export default Dealer;
