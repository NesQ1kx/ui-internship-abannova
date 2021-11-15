import React from 'react';

import styles from './Quotes.module.scss';
import { ReactComponent as LeftArrow } from '../../images/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../../images/RightArrow.svg';

const Quotes = () => {
  return (
    <div className={styles.quotes}>
      <div className={styles.quote_wrapper}>
          <div className={styles.quote}>We have been a customer of BWS for 10 years and we are very happy with their services. Our property always looks bright, colourful, and clean. BWS has great customer service and pricing. It has been a pleasure working with them over the years!</div>
          <div className={styles.author}>Alex Regelman <br />Co-founder, Colabrio</div>
        <div className={styles.arrows}>
          <LeftArrow />
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
