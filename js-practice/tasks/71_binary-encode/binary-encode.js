export const binaryEncode = (str = '') => {
  const bitsCount = 8;

  return str
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(bitsCount, '0'))
    .join(' ');
};
