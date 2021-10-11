export const nextInLine = (arr, num) => {
  arr.push(num);
  return arr.shift();
};
