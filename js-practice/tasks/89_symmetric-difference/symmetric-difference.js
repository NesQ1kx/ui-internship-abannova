const getArraysDiff = (arr1, arr2) =>
  arr1.reduce((result, cur) => {
    if (!arr2.includes(cur)) {
      result.push(cur);
    }
    return result;
  }, []);

export const symmetricDifference = (...args) =>
  Array.from(new Set(args.reduce((prev, cur) => [...getArraysDiff(prev, cur), ...getArraysDiff(cur, prev)]))).sort(
    (a, b) => a - b
  );
