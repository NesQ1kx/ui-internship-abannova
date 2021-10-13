export const validBraces = (str) => {
  const openBrackets = '([{';
  const closedBrackets = ')]}';
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    } else {
      const closedBracketIndex = closedBrackets.indexOf(bracket);
      const openBracketIndex = openBrackets.indexOf(stack[stack.length - 1]);

      if (closedBracketIndex === openBracketIndex) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
