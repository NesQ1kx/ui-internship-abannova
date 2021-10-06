export const vowelCount = (str) => {
  const alphabet = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((char) => alphabet.includes(char)).length;
};
