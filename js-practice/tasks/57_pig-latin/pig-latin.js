export const pigLatin = (str) => {
  const vowels = 'aeiouy';
  const consonants = 'bcdfgjklmnpqstvxzhrwy';
  const vowelsEnd = 'way';
  const consonantsEnd = 'ay';
  const firstCh = str[0];
  let consonantsToEndCount = 1;

  if (vowels.includes(firstCh)) return str + vowelsEnd;

  for (let i = 1; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      consonantsToEndCount += 1;
    } else {
      break;
    }
  }

  return str.slice(consonantsToEndCount) + str.slice(0, consonantsToEndCount) + consonantsEnd;
};
