import React from 'react';
import classNames from "classnames";

import styles from './ArrowLink.module.scss';
import { ReactComponent as Arrow } from '../../images/Arrow.svg';

const ArrowLink = ({url, gray}) => {
  return (
    <a href={url} className={classNames({[styles.arrowLink]: true, [styles.arrowLink_gray]: gray})}>
      <Arrow />
    </a>
  );
};

export default ArrowLink;
