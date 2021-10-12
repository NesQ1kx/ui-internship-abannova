export const swapCases = (str) =>
  str
    .split('')
    .map((item) => (item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()))
    .join('');
