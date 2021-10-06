export const truncateString = (str, len) => {
  const end = '...';
  if (str.length > len) {
    if (len <= 3) {
      return str.slice(0, len) + end;
    }
    return str.slice(0, len - 3) + end;
  }
  return str;
};
