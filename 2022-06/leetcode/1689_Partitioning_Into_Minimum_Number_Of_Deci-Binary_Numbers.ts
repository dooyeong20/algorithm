function minPartitions(n: string): number {
  return +Array.from(n).reduce((p,c) => Math.max(p,+c), 0);
};