export const indexToInsert = (arr, val) => {
  const innerArr = [...arr, val];
  return innerArr.sort((a, b) => a - b).indexOf(val);
};
