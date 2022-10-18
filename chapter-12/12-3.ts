const uniquePaths = (rows: number, cols: number, cache = {}) => {
  if (rows === 1 || cols === 1) {
    return 1;
  }
  if (cache[rows][cols]) {
    cache =
      uniquePaths(rows - 1, cols, cache) + uniquePaths(rows, cols - 1, cache);
  }
  return cache[rows][cols];
};
