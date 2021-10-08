export const reverseStringInRange = (str, [fromIndex, toIndex]) => {
  const start = str.slice(0, fromIndex);
  const end = str.slice(toIndex + 1);
  const revert = str
    .slice(fromIndex, toIndex + 1)
    .split('')
    .reverse()
    .join('');
  return start + revert + end;
};
