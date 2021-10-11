export const maxTripletSum = (arr) => {
  const uniqueArr = Array.from(new Set(arr)).sort((a, b) => b - a);
  return uniqueArr[0] + uniqueArr[1] + uniqueArr[2];
};
