const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

export const calculatePrimorialOfANumber = (num) => {
  let result = 1;
  let i = 2;
  let simpleNumbersCount = 0;

  while (true) {
    if (isPrime(i)) {
      result *= i;
      simpleNumbersCount += 1;

      if (simpleNumbersCount === num) {
        return result;
      }
    }
    i += 1;
  }
};
