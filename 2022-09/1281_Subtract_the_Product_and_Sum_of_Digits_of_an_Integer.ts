function calculateDigit(n: number, fn: (p, c) => number, initVal: number) {
  let res = initVal;
  let tmp = n;
  
  while(tmp > 0) {
    const num = tmp % 10;
    tmp = Math.floor(tmp / 10);
    res = fn(res, num);
  }
  
  return res;
}

function subtractProductAndSum(n: number): number {
  return calculateDigit(n, (p, c) => p * c, 1) - calculateDigit(n, (p, c) => p +c, 0);
};
