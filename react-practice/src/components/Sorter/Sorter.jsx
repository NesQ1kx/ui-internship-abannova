import React, {useState} from 'react';

import styles from './Sorter.module.scss';
import { ReactComponent as ChevronSvg } from '../../images/chevron.svg';
import classNames from "classnames";

const Sorter = ({ sortDirection, onToggle }) => {

  return (
    <div className={styles.sorter}>
      <div className={styles.label}>Sort by</div>
      <div className={styles.toggle} onClick={onToggle}>
        {sortDirection === 'desc' ? 'Price High-Low' : 'Price Low-High'}
        <ChevronSvg className={classNames({[styles.chevron]: true, [styles.rotate]: sortDirection === 'desc'})} />
      </div>
    </div>
  );
};

export default Sorter;
