const getArraysDiff = (arr1, arr2) =>
  arr1.reduce((result, cur) => {
    if (!arr2.includes(cur)) {
      result.push(cur);
    }
    return result;
  }, []);

export const diffArray = (arr1, arr2) => [...getArraysDiff(arr1, arr2), ...getArraysDiff(arr2, arr1)];
