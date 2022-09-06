function hammingWeight(n: number): number {
  return Array.from(n.toString(2)).reduce((p, c) => p + Number(c), 0);
}
