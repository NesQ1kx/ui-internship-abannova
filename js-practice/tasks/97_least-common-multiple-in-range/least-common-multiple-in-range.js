export const leastCommonMultipleInRage = (arr) => {
  const rangeArr = [];
  const min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    rangeArr.push(i);
  }

  while (true) {
    // eslint-disable-next-line no-loop-func
    if (rangeArr.every((num) => max % num === 0)) {
      return max;
    }
    max += 1;
  }
};
