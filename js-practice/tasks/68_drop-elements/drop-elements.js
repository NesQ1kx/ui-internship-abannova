export const dropElements = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item)) {
      return arr;
    }
    arr.shift();
    i--;
  }
  return arr;
};
