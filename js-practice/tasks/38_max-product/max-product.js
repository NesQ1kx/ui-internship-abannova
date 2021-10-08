export const maxProduct = (arr) => {
  let maxMulti = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    const multi = arr[i] * arr[i + 1];
    if (multi > maxMulti) {
      maxMulti = multi;
    }
  }
  return maxMulti;
};
