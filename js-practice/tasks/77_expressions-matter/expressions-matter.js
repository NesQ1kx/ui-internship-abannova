const operationVariants = [
  (a, b, c) => a * (b + c),
  (a, b, c) => a * b * c,
  (a, b, c) => a * b + c,
  (a, b, c) => a + b * c,
  (a, b, c) => (a + b) * c,
  (a, b, c) => a + b + c,
];

export const expressionsMatter = (a, b, c) => {
  const results = operationVariants.map((func) => func(a, b, c));
  return Math.max(...results);
};
