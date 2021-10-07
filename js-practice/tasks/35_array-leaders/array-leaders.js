export const arrayLeaders = (arr) =>
  arr.reduce((leaders, cur, i) => {
    const sum = i + 1 < arr.length ? arr.slice(i + 1).reduce((acc, elem) => acc + elem) : undefined;
    if ((sum === undefined && cur > 0) || cur > sum) leaders.push(cur);
    return leaders;
  }, []);
