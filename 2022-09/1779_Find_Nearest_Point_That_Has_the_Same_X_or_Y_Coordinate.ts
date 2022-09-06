function nearestValidPoint(x: number, y: number, points: number[][]): number {
  return points.reduce<{distance: number; index: number}>(
    (p, c, idx) => {
      if (c[0] !== x && c[1] !== y) {
        return p;
      }
      const {distance} = p;
      const dist = Math.abs(x - c[0]) + Math.abs(y - c[1]);

      if (dist >= distance) {
        return p;
      }

      return {distance: dist, index: idx};
    },
    {distance: Infinity, index: -1}
  ).index;
}
