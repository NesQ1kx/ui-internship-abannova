export const rot13Encoder = (str) => {
  const aCode = 'A'.charCodeAt(0);
  const zCode = 'Z'.charCodeAt(0);
  const shift = 13;
  return str
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode < aCode || charCode > zCode) return char;
      return String.fromCharCode(charCode + shift > zCode ? charCode - shift : charCode + shift);
    })
    .join('');
};
