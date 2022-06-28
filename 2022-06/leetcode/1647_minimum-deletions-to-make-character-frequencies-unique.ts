function minDeletions(s: string): number {
  const cMap = {};
  const usedCount: number[] = [];
  let ans = 0;

  Array.from(s).forEach(c => {
    cMap[c] = (cMap[c] || 0) + 1;
  });

  Object.keys(cMap)
    .reduce<{alphabet: string; count: number}[]>((p, c) => [...p, {alphabet: c, count: cMap[c]}], [])
    .sort((a, b) => b.count - a.count)
    .forEach(({count}) => {
      const lastCount = usedCount[usedCount.length - 1];
      if (count >= lastCount) {
        ans += count - lastCount + 1;
        usedCount.push(lastCount - 1 || 1);
      } else {
        usedCount.push(count);
      }
    });

  return ans;
}
