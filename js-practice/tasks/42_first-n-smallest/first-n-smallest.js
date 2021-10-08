export const firstNSmallest = (arr, num) =>
  arr
    .map((number, index) => ({ number, index }))
    .sort((a, b) => a.number - b.number)
    .slice(0, num)
    .sort((a, b) => a.index - b.index)
    .map((elem) => elem.number);
