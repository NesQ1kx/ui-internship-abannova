export const validateUSTelephoneNumber = (str) => {
  const regExps = [
    /^(1\s)?\d{3}-\d{3}-\d{4}$/,
    /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/,
    /^(1\s)?\d{3}\s\d{3}\s\d{4}$/,
    /^\d{10}$/,
  ];
  return regExps.some((regExp) => regExp.test(str));
};
