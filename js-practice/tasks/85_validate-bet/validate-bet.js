export const validateBet = ([count, max], str) => {
  if (!/^(\d|,|\s)+$/.test(str)) return null;

  const min = 1;
  const numbers = str.match(/\d+/g);
  const numbersLen = numbers.length;
  const result = [];

  for (let i = 0; i < numbersLen; i++) {
    const number = Number(numbers[i]);
    if (number < min || number > max) return null;
    result.push(number);
  }

  if (result.length !== count) return null;

  return result.sort((a, b) => a - b);
};
