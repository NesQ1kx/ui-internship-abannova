export const abbreviatedName = (str) => {
  const splitStr = str.split(' ');
  const splitStrLen = splitStr.length;
  const result = [splitStr[0]];

  if (splitStrLen === 1) return str;

  for (let i = 1; i < splitStrLen; i++) {
    result.push(` ${splitStr[i].slice(0, 1)}.`);
  }

  return result.join('');
};
