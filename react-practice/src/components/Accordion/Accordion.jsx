import React, {useState} from 'react';

import styles from './Accordion.module.scss';
import {ReactComponent as ChevronSvg} from '../../images/chevron.svg';
import classNames from "classnames";

const Accordion = ({ name, content }) => {
  const [opened, toggleState] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_header} onClick={() => toggleState(!opened)}>
        <div className={styles.name}>{ name }</div>
        <ChevronSvg className={classNames({[styles.chevron]: true, [styles.rotate]: opened})} />
      </div>
      {opened && <div className={styles.accordion_content}>
        { content }
      </div>}
    </div>
  );
};

export default Accordion;
