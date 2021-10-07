export const peopleInBus = (arr) => arr.reduce((acc, cur) => acc + cur[0] - cur[1], 0);
