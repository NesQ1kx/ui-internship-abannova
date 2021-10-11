export const sortByBits = (arr) =>
  arr
    .map((num) => ({ num, bitsNumber: num.toString(2).replace(/0/g, '').length }))
    .sort((a, b) => (a.bitsNumber === b.bitsNumber ? a.num - b.num : a.bitsNumber - b.bitsNumber))
    .reduce((acc, cur, index) => {
      acc[index] = cur.num;
      return acc;
    }, arr);
