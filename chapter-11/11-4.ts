const findFirstXInString = (str: string) => {
  if (str === "x") return 0;
  return 1 + findFirstXInString(str.slice(1));
};
