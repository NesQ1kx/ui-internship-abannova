export const factorialize = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorialize(n - 1);
};
