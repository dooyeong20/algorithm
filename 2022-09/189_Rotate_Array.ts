/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const tmpNums = [...nums];
  let index = nums.length - k % nums.length;

  for(let i=0; i<nums.length; i++) {
    nums[i] = tmpNums[index++ % nums.length];
  }
};