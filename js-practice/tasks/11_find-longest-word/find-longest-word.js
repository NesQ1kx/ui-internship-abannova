export const findLongestWord = (str) =>
  str.split(' ').reduce((prev, cur) => (cur.length > prev.length ? cur : prev)).length;
