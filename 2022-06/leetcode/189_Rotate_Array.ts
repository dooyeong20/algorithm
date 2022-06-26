function rotate(nums: number[], _k: number) {
  const getIndex = (n: number) => (n + nums.length) % nums.length;
  const ans:number[] = [];
  const k = _k % nums.length;
  
  for(let i=0; i<nums.length; i++){
    ans.push(nums[getIndex(i - k)]);
  }
  
  for(let i=0; i<nums.length; i++){
    nums[i] = ans[i];
  }
}