const basePairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

export const DNAPairing = (dnaStr) => dnaStr.split('').map((item) => [item, basePairs[item]]);
