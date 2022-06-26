function maxScore(cardPoints: number[], k: number): number {
  const totalScore = cardPoints.reduce((p, c) => p + c, 0);
  const subLen = cardPoints.length - k;
  let l = 0;
  let r = -1;
  let subTotal = (() => {
    let total = 0;
    for(let i=0; i<subLen; i++) {
      total += cardPoints[++r];
    }
    return total;
  })();  
  let minSubTotal = subTotal;
  
  while(r + 1 < cardPoints.length) {
    subTotal = subTotal - cardPoints[l++] + cardPoints[++r];
    minSubTotal = Math.min(subTotal, minSubTotal);
  }
  
  return totalScore - minSubTotal;
};