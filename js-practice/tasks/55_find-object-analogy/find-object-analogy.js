export const findObjectAnalogy = (arr, obj) => {
  const entries = Object.entries(obj);
  return arr.filter((item) => entries.every(([key, value]) => item[key] === value));
};
