const basePairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

export const complementaryDNA = (dnaStr) =>
  dnaStr
    .split('')
    .map((item) => basePairs[item])
    .join('');
