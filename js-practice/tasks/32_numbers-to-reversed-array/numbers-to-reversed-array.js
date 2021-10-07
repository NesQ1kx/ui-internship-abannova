export const numbersToReversedArray = (num) =>
  num
    .toString()
    .split('')
    .reverse()
    .map((i) => Number(i));
