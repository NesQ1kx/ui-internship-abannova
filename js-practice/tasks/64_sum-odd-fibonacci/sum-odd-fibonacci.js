export const sumOddFibonacci = (num) => {
  const fibArr = [1, 1];
  const oddFibArr = [1];
  let i = 1;

  while (fibArr[i] <= num) {
    fibArr.push(fibArr[i - 1] + fibArr[i]);
    if (fibArr[i] % 2 !== 0) oddFibArr.push(fibArr[i]);
    i += 1;
  }

  return oddFibArr.reduce((acc, cur) => acc + cur);
};
