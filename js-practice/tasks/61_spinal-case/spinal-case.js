export const spinalCase = (str) =>
  str
    .replace(/[^a-z]/gi, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
