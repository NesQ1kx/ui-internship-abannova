export const pairwise = (arr, num) => {
  const indexes = [];
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[i] + arr[j] === num) {
        indexes.push(i, j);
        i += 1;
        j += 1;
      }
    }
  }

  return indexes.reduce((sum, cur) => sum + cur, 0);
};
