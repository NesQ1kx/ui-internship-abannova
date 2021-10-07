export const arrayPlusArray = (arr1, arr2) => {
  const maxLen = Math.max(arr1.length, arr2.length);
  const result = [];
  for (let i = 0; i < maxLen; i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return result;
};
