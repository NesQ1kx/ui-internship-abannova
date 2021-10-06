export const humanizeFormat = (num) => {
  if (num === undefined) return '';
  const numToString = num.toString().slice(-1);
  if (numToString === '1') return `${num}st`;
  if (numToString === '2') return `${num}nd`;
  if (numToString === '3') return `${num}rd`;
  return `${num}th`;
};
