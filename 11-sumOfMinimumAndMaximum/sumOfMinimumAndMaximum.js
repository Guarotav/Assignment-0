function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  sum = 0
  min = nums[0]
  for (let i = 0; i < nums.length; i++){
    if (nums [i] < min )
    min = nums[i]
  }
  max = nums[0]
  for (let i = 0; i < nums.length; i++){
    if (nums [i] > max)
    max = nums[i]
  }
  sum = min + max
  return sum;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;