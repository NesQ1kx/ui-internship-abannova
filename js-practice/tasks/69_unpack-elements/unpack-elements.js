export const unpackElements = (arr) =>
  arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...unpackElements(item));
    } else {
      result.push(item);
    }
    return result;
  }, []);
