export const findFriend = (arr) => {
  const minLen = 3;
  if (arr.length < minLen) return 0;
  let count = 0;
  const colorBlue = 'blue';
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 'red' &&
      ((arr[i - 1] === colorBlue && arr[i - 2] === colorBlue) ||
        (arr[i + 1] === colorBlue && arr[i + 2] === colorBlue) ||
        (arr[i - 1] === colorBlue && arr[i + 1] === colorBlue))
    ) {
      count += 1;
    }
  }
  return count;
};
