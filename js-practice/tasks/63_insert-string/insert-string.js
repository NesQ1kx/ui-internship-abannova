export const insertString = (str1, str2, position = 0) => {
  if (!str2) {
    return str1;
  }
  const strToArr = str1.split('');
  strToArr.splice(position, 0, str2);
  return strToArr.join('');
};
