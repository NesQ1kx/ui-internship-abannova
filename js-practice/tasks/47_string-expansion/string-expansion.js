export const stringExpansion = (str) => {
  let result = '';
  let num = 1;

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    const newNum = Number(symbol);
    if (Number.isNaN(newNum)) {
      result += symbol.repeat(num);
    } else {
      num = newNum;
    }
  }
  return result;
};
