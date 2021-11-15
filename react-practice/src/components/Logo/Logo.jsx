import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Logo.module.scss';

const Logo = ({dark, big}) => {
  const history = useHistory();

  function openHomePage() {
    history.push("/home");
  }

  return (
    <div
      className={classNames({[styles.logo]: true, [styles.logo_dark]: dark})}
      onClick={openHomePage}
    >
      {big ? 'B W S' : 'BWS'}
    </div>
  );
};

export default Logo;
