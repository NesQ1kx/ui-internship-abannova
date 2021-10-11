const characters = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&apos;',
  '"': '&quot;',
};

export const convertHTMLEntities = (str) =>
  str
    .split('')
    .map((char) => {
      if (characters.hasOwnProperty(char)) {
        return characters[char];
      }
      return char;
    })
    .join('');
