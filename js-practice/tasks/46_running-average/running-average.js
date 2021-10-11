export const runningAverage = () => {
  let argsSum = 0;
  let argsCount = 0;
  return (num) => {
    argsSum += num;
    argsCount += 1;
    return argsSum / argsCount;
  };
};
