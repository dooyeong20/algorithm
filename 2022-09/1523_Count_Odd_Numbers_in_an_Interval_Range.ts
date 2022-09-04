function countOdds(low: number, high: number): number {
  const totalCount = high - low + 1;

  if (totalCount % 2 === 0) {
    return Math.floor(totalCount / 2);
  }

  return Math.floor(totalCount / 2) + (low % 2);
}
