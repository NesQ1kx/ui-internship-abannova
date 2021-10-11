export const followTheSpy = (arr) => {
  const firstWay = arr[0];
  let lastWay = firstWay[1];
  const result = [...firstWay];

  for (let i = 1; i < arr.length; i++) {
    // eslint-disable-next-line no-loop-func
    const nextWay = arr.find((way) => way[0] === lastWay)[1];
    result.push(nextWay);
    lastWay = nextWay;
  }
  return result.join(', ');
};
