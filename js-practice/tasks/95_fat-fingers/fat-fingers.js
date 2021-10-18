export const fatFingers = (str) => {
  let capsLock = false;

  return str.split('').reduce((result, char) => {
    if (char.toLowerCase() === 'a') {
      capsLock = !capsLock;
    } else if (capsLock) {
      // eslint-disable-next-line no-param-reassign
      result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    } else {
      // eslint-disable-next-line no-param-reassign
      result += char;
    }
    return result;
  }, '');
};
