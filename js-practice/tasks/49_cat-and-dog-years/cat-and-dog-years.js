export const catAndDogYears = (humanYears) => {
  const dogAndCatFirstYears = 15;
  const dogAndCatSecondYears = 9;
  const dogNextYears = 5;
  const catNextYears = 4;

  switch (humanYears) {
    case 0:
      return [0, 0, 0];
    case 1:
      return [humanYears, dogAndCatFirstYears, dogAndCatFirstYears];
    case 2:
      return [humanYears, dogAndCatFirstYears + dogAndCatSecondYears, dogAndCatFirstYears + dogAndCatSecondYears];
    default:
      return [
        humanYears,
        (humanYears - 2) * catNextYears + dogAndCatFirstYears + dogAndCatSecondYears,
        (humanYears - 2) * dogNextYears + dogAndCatFirstYears + dogAndCatSecondYears,
      ];
  }
};
