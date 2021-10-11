const regExp = /\s+/g;

export const removeWhitespaces = (str) => str.replace(regExp, '');

// second variant
// export const removeWhitespaces = (str) => str.split('').filter(elem => elem !== ' ').join('');
