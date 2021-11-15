import React from 'react';

import styles from './Sale.module.scss';
import classNames from "classnames";

const Sale = ({ green }) => {
  return (
    <div className={classNames({[styles.sale]: true, [styles.sale_green]: green})}>
      SALE
    </div>
  );
};

export default Sale;
