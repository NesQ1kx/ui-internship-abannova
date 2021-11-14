import React from 'react';

import styles from './ColorFilter.module.scss';
import classNames from "classnames";
import FilterTitle from "../FilterTitle/FilterTitle";

const ColorFilter = ({ options, selectedOptionsIds, onChange }) => {
  const handleChange = (colorId) => {
    if (selectedOptionsIds.includes(colorId)) {
      onChange(selectedOptionsIds.filter((id) => colorId !== id));
    } else {
      onChange([...selectedOptionsIds, colorId]);
    }
  }

  return (
    <div className={styles.filter}>
      <FilterTitle title="Colors" />
      <div className={styles.options}>
        {options.map((option) =>
          <img
            src={option.img}
            alt="img"
            key={option.id}
            onClick={() => handleChange(option.id)}
            className={classNames({
              [styles.option]: true,
              [styles.checked]: selectedOptionsIds.includes(option.id)
            })}
          />
        )}
      </div>
    </div>
  );
};

export default ColorFilter;
