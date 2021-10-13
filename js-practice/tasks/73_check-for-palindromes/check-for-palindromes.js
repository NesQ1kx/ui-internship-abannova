export const checkForPalindromes = (str) => {
  const strWithoutSpaces = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverseStr = strWithoutSpaces.split('').reverse().join('');

  return strWithoutSpaces === reverseStr;
};
