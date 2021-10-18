export const greatestCommonDivisor = (...nums) => {
  let gcd = Math.min(...nums);

  while (gcd >= 1) {
    // eslint-disable-next-line no-loop-func
    if (nums.every((num) => num % gcd === 0)) {
      return gcd;
    }
    gcd -= 1;
  }
};
