/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let idx = 0;
  
  nums.filter(num => num).forEach(num => {
    nums[idx++] = num;
  })
  

  while(idx < nums.length) {
    nums[idx++] = 0;
  }
};