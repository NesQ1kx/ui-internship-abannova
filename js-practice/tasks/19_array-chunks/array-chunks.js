export const arrayChunks = (arr, len) =>
  arr.reduce((acc, cur, i) => {
    const chunkIndex = Math.floor(i / len);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);

    return acc;
  }, []);
