function twoSum(nums: number[], target: number): number[] {
  let l = 0;
  let r = 1;
  
  while(l <= r) {
    const total = nums[l] + nums[r];
    
    if(total === target) {
      break;
    }
    
    if(total < target) {
      if(r === nums.length - 1) {
        l++;
      } else {
        r++;
      }
    } else {
      l++;
      while(nums[l] + nums[r] > target) {
        r--;
      }
    }
  }
  return [l + 1, r + 1];
};