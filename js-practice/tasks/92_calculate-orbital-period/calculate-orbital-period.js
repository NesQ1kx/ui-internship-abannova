export const calculateOrbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(earth ** 3 / GM));

    return { name, orbitalPeriod };
  });
};
