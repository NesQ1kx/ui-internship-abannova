export const randomFraction = () => {
  const num = Math.random();
  if (num === 0 || num === 1) return randomFraction();
  return num;
};
