export const randomFraction = () => {
  const num = Math.random();
  if (num === 0) return randomFraction();
  return num;
};
