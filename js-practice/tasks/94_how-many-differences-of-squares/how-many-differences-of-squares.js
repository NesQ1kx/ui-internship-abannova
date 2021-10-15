export const squares = (n) => {
  const maxN = 45000;
  const normalizedN = n > maxN ? maxN : n;
  return normalizedN - Math.round(normalizedN / 4);
};
