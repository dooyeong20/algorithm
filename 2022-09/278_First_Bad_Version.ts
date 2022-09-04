function solution(isBadVersion: any) {
  return function (n: number): number {
    let [l, r] = [0, n];

    while (l <= r) {
      const m = Math.floor((l + r) / 2);

      if (isBadVersion(m)) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return r + 1;
  };
}
