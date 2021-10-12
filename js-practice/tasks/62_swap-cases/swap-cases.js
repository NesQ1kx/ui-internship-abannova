export const swapCases = (str) =>
  str
    .split('')
    .map((item) => {
      if (item === item.toUpperCase()) {
        return item.toLowerCase();
      }
      return item.toUpperCase();
    })
    .join('');
