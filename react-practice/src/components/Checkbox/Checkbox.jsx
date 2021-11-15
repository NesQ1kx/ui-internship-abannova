import React from 'react';

import styles from './Checkbox.module.scss';
import {ReactComponent as CheckMarkSvg} from '../../images/checkMark.svg';
import classNames from "classnames";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className={styles.checkbox} onClick={() => onChange(!checked)}>
      <div className={ classNames({[styles.box]: true, [styles.greenBox]: checked})}>
        <CheckMarkSvg className={classNames({[styles.checkMark]: !checked})}/>
      </div>
      <div className={styles.label}>{ label }</div>
    </div>
  );
};

export default Checkbox;
