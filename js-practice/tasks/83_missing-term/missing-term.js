export const missingTerm = (arr) => {
  const arrLen = arr.length;
  const firstDiff = arr[1] - arr[0];
  const lastDiff = arr[arrLen - 1] - arr[arrLen - 2];
  const rightDiff = firstDiff === lastDiff ? firstDiff : Math.min(firstDiff, lastDiff);

  for (let i = 0; i < arrLen; i++) {
    const currentItem = arr[i];
    const currentDiff = arr[i + 1] - currentItem;

    if (currentDiff !== rightDiff) {
      return rightDiff + currentItem;
    }
  }
};
