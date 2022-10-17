const findUniquePath = (row: number, col: number) => {
  if (row === 1 || col === 1) return 1;
  return findUniquePath(row - 1, col) + findUniquePath(row, col - 1);
};