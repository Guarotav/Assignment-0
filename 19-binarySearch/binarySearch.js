class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if (nums.length === 0) return false;

    const mid = Math.floor(nums.length / 2);

    if (nums[mid] === target) return true;
    
   
    if (target < nums[mid]) {
      
      return this.binarySearch(nums.slice(0, mid), target);
    } else {
    
      return this.binarySearch(nums.slice(mid + 1), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;