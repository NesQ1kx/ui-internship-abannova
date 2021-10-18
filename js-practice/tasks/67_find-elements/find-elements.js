export const findElements = (arr, callback) => {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    const item = arr[i];
    if (callback(item)) return item;
  }
};
