const getEvenArr = (numbers: number[], evenArr: number[] = []) => {
  if (!numbers.length) return evenArr;
  const isEven = numbers[0] % 2 === 0;
  if (isEven) {
    evenArr.push(numbers[0]);
  }
  return getEvenArr(numbers.slice(1), evenArr);
};
