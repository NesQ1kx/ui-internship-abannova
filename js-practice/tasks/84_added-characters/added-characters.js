export const addedCharacters = (str1, str2) => {
  const str1toArr = str1.split('');

  return str1toArr.reduce((str, cur) => str.replace(cur, ''), str2)[0];
};
