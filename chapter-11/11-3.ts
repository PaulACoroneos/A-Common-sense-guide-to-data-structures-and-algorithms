const getTriangleNumbers = (n: number) => {
  if (n <= 1) return 1;
  return n + getTriangleNumbers(n-1);
};
