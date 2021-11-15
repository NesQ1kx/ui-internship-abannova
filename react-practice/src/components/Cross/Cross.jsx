import React from 'react';

import styles from './Cross.module.scss';
import classNames from "classnames";

const Cross = ({className}) => {
  return (
    <div className={classNames(styles.cross, className)}>
      &#215;
    </div>
  );
};

export default Cross;
