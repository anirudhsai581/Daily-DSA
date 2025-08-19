/*
Given an array nums of n integers, return reverse of the array.
Input : nums = [1, 2, 3, 4, 5]
Output : [5, 4, 3, 2, 1]
Constraints:
1 <= n <= 100
1 <= nums[i] <= 100


T.C is O(n) ,S.C is O(n)-> recursive call stack
 actually approx O(n/2) for both T.C and S.C which is O(n)
*/
class Solution {
  reverseArray(nums) {
    //solved on own in revision
    let n = nums.length;
    let start = 0;
    let end = n - 1;
    return this.reverse(nums, start, end);
  }

  reverse(nums, start, end) {
    if (start >= end) {
      return nums;
    }
    [nums[start], nums[end]] = [nums[end], nums[start]];
    return this.reverse(nums, start + 1, end - 1);
  }
}
const solution = new Solution();
const nums = [1, 2, 3, 4, 5]; 
const result = solution.reverseArray(nums);  
console.log(result);  //[ 5, 4, 3, 2, 1 ]