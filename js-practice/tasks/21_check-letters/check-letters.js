export const checkLetters = (arr) => {
  const lowerStr = arr[0].toLowerCase();
  return arr[1]
    .toLowerCase()
    .split('')
    .every((elem) => lowerStr.includes(elem));
};
