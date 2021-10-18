export const missedLetters = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    const curCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    if (nextCode - curCode !== 1) {
      return String.fromCharCode(curCode + 1);
    }
  }
};
