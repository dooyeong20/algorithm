function twoSum(nums: number[], target: number): number[] {
  let [l, r] = [0, nums.length - 1];
  
  while(l < r) {
    const tmp = nums[l] + nums[r];
    
    if(tmp === target) {
      return [l+1, r+1];
    }
    
    if(tmp < target) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  
  return [l+1, r+1];
};