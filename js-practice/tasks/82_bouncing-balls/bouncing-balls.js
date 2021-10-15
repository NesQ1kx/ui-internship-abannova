export const bouncingBalls = (startHeight, stepMultiplier, motherHeight) => {
  if (motherHeight >= startHeight || startHeight < 0 || stepMultiplier <= 0 || stepMultiplier >= 1) return -1;

  let ballHeight = startHeight;
  let count = 0;

  while (ballHeight > motherHeight) {
    count += 1;
    ballHeight *= stepMultiplier;
    if (ballHeight > motherHeight) {
      count += 1;
    }
  }

  return count;
};
