function largestPerimeter(nums: number[]): number {
  let p = 0;
  nums.sort((a, b) => b - a);

  while (p <= nums.length - 3) {
    if (nums[p] >= nums[p + 1] + nums[p + 2]) {
      p += 1;
      continue;
    }
    return nums[p] + nums[p + 1] + nums[p + 2];
  }

  return 0;
}
