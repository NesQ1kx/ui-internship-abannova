export const leastCommonMultiple = (...nums) => {
  let lcm = Math.max(...nums);

  while (true) {
    // eslint-disable-next-line no-loop-func
    if (nums.every((num) => lcm % num === 0)) {
      return lcm;
    }
    lcm += 1;
  }
};
