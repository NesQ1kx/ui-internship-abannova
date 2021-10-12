export const binaryDecode = (binary = '') =>
  binary
    .split(' ')
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join('');
