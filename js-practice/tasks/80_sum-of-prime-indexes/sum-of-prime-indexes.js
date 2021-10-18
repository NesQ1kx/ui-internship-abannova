const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

export const sumOfPrimeIndexes = (arr) =>
  arr.reduce((sum, item, i) => {
    if (isPrime(i)) {
      return sum + item;
    }
    return sum;
  }, 0);
