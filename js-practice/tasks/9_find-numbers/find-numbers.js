const numberRegExp = /\d+/g;

export const findNumbers = (str) => str.match(numberRegExp).map((num) => Number(num));
