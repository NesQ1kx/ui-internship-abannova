export const carrying = (num1, num2) => {
  const rightType = 'number';
  const num1Type = typeof num1;
  const num2Type = typeof num2;
  const hasNum2 = num2 !== undefined;

  if (num1Type !== rightType || (hasNum2 && num2Type !== rightType)) return undefined;

  if (hasNum2) {
    return num1 + num2;
  }

  return (num3) => {
    const num3Type = typeof num3;

    if (num3Type === rightType) {
      return num1 + num3;
    }
  };
};
