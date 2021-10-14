export const buyingCar = (_startUpCapital, _goal, save, _lossesPercent) => {
  const increaseLossesPercentEachTwoMonths = 0.5;
  const countMothsToIncreaseLossesPercent = 2;
  let lossesPercent = _lossesPercent;
  let startUpCapital = _startUpCapital;
  let goal = _goal;
  let months = 0;
  let savedMoney = 0;
  let allSavedMoney = _startUpCapital;

  while (allSavedMoney < goal) {
    months += 1;
    savedMoney += save;

    if (months % countMothsToIncreaseLossesPercent === 0) {
      lossesPercent += increaseLossesPercentEachTwoMonths;
    }
    const lossesMultiplier = lossesPercent / 100;

    startUpCapital -= startUpCapital * lossesMultiplier;
    goal -= goal * lossesMultiplier;
    allSavedMoney = startUpCapital + savedMoney;
  }

  return [months, Math.floor(allSavedMoney - goal)];
};
