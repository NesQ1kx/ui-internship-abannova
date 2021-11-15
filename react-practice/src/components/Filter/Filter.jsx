import React from 'react';

import styles from './Filter.module.scss';
import Checkbox from "../Checkbox/Checkbox";
import FilterTitle from "../FilterTitle/FilterTitle";

const Filter = ({ name, options, selectedOptionIds, onChange }) => {
  const toggleAll = (newChecked) => {
    if (newChecked) {
      onChange(options.map(({id}) => id));
    } else {
      onChange([]);
    }
  }

  const handleChange = (id, checked) => {
    if (checked) {
      onChange([...selectedOptionIds, id]);
    } else {
      onChange(selectedOptionIds.filter((optionId) => optionId !== id));
    }
  }

  return (
    <div className={styles.filter}>
      <FilterTitle title={name} />
      <Checkbox
        label="All"
        checked={options.length === selectedOptionIds.length}
        onChange={toggleAll}
      />
      {options.map((option) => (
        <Checkbox
          label={option.name}
          checked={selectedOptionIds.includes(option.id)}
          onChange={(checked) => handleChange(option.id, checked)}
          key={option.id}
        />))}
    </div>
  );
};

export default Filter;
