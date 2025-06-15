function pairSum(nums, target) {
  //Insert code here;
  if (nums.length < 2)
    throw new Error("The length of the array must be at least 2");

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) 
        return true;
    }
  }
  
  return false;
}

// Do not edit this line;
module.exports = pairSum;