function sortedSquares(nums: number[]): number[] {
  const ans = new Array(nums.length);
  let [l, r] = [0, nums.length - 1];
  let idx = r;

  while (l <= r) {
    if (nums[l] ** 2 >= nums[r] ** 2) {
      ans[idx--] = nums[l++] ** 2;
    } else {
      ans[idx--] = nums[r--] ** 2;
    }
  }

  return ans;
}
