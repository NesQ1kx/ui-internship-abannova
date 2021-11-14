import React from 'react';

import styles from './Counter.module.scss';
import classNames from "classnames";

const Counter = ({ count, className }) => {
  return (
    <div className={classNames(styles.counter, className)}>
      { count }
    </div>
  );
};

export default Counter;
