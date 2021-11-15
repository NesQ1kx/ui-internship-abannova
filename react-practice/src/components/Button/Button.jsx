import React from 'react';
import classNames from "classnames";

import styles from './Button.module.scss';

export const buttonColors = {
  green: 'button_green',
  transparent: 'button_transparent',
  transparent_green: 'button_transparent_green',
  white: 'button_white'
}

const Button = ({backgroundColor = buttonColors.green, children, full, onClick}) => {
  return (
    <div
      className={classNames(styles.button, styles[backgroundColor], {[styles.button_full]: full})}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
};

export default Button;
