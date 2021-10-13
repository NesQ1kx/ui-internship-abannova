export const deepObjectClone = (originalObj) => {
  const cloneObj = {};

  Object.entries(originalObj).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      cloneObj[key] = deepObjectClone(value);
    } else {
      cloneObj[key] = value;
    }
  });

  return cloneObj;
};
