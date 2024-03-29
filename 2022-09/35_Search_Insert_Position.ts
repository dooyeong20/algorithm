function searchInsert(nums: number[], target: number): number {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return r + 1;
}
