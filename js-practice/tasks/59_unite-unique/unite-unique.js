export const uniteUnique = (...args) => {
  const arr = [];

  args.forEach((item) => arr.push(...item));

  return Array.from(new Set(arr));
};

// second variant
// export const uniteUnique = (...args) => Array.from(new Set(args.flat()));
