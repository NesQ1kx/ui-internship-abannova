import React from 'react';

import styles from './FilterTitle.module.scss';

const FilterTitle = ({ title }) => {
  return (
    <div className={styles.title}>
      { title }
    </div>
  );
};

export default FilterTitle;
