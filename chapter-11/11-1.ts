const totalCharacters = (charArr: string[], count = 0) => {
  if (!charArr.length) return count;
  const newCount = count + charArr[0].length;
  return totalCharacters(charArr.slice(1), newCount);
};
