export const bracketsIndexes = (str, index) => {
  const stack = [];
  if (str[index] !== '(') return -1;
  for (let i = index; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      stack.pop();
      if (!stack.length) return i;
    }
  }
  return -1;
};
