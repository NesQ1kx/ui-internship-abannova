export const uniqueInOrder = (sequence) => {
  if (!sequence.length) return [];
  const result = [sequence[0]];
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] !== sequence[i + 1]) {
      result.push(sequence[i + 1]);
    }
  }
  return result;
};
