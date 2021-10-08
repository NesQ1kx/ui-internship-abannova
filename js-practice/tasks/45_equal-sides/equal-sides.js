export const equalSides = (arr) => {
  const notFoundIndex = -1;
  if (arr.reduce((acc, cur) => acc + cur) === 0 || arr.length === 0) return 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr.slice(0, i).reduce((acc, cur) => acc + cur) === arr.slice(i + 1).reduce((acc, cur) => acc + cur)) {
      return i;
    }
  }
  return notFoundIndex;
};
