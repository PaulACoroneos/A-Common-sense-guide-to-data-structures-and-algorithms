const addUntilOneHundred = (nums:number[]) => {
  if (nums.length === 0) return 0;
  const sumSoFar = addUntilOneHundred(nums.slice(1));
  if(nums[0] + sumSoFar > 100) {
    return sumSoFar;
  }
  return nums[0] + sumSoFar;
}