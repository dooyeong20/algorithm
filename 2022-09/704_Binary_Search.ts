function search(nums: number[], target: number): number {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] <= target) {
      l = m + 1;
    }
  }

  return nums[l - 1] === target ? l - 1 : -1;
}
