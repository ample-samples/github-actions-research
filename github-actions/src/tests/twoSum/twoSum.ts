const twoSum = (nums: number[], target: number) => {
  const map = new Map();
  //value:index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 5, 7, 10], 9));
