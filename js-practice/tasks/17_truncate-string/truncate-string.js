export const truncateString = (str, len) => {
  const end = '...';
  const endLength = end.length;
  if (str.length > len) {
    if (len <= endLength) {
      return str.slice(0, len) + end;
    }
    return str.slice(0, len - endLength) + end;
  }
  return str;
};
