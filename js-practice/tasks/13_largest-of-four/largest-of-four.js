export const largestOfFour = (arr) => arr.map((elem) => elem.reduce((prev, cur) => (cur > prev ? cur : prev)));
