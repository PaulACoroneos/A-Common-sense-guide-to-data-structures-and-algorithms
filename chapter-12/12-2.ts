const golomb = (n:number, cache = {}) => {
  if (n === 1) return 1;
  if(!cache[n]) {
    cache[n] = 1 + golomb(n- golomb(golomb(n-1,)));
  }
  return cache[n];
}