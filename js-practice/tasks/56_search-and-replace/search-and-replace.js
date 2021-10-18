export const searchAndReplace = (str, replaceable, replacement) =>
  str.replace(replaceable, () => {
    const firstCh = replaceable[0];
    if (firstCh === firstCh.toUpperCase()) {
      return replacement.slice(0, 1).toUpperCase() + replacement.slice(1);
    }
    return replacement;
  });
