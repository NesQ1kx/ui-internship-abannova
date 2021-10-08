const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

export const minNumberToPrime = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur);
  let num = 0;
  while (true) {
    if (isPrime(sum + num)) {
      return num;
    }
    num += 1;
  }
};
