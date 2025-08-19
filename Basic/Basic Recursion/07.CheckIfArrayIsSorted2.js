/*
Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.
Input : nums = [1, 2, 3, 4, 5]
Output : true
Constraints:
1 <= n <= 100
1 <= nums[i] <= 100
T.C is O(n),S.C is O(n) -> ~~ ncalls in call stack
*/
class Solution {
  isSorted(nums, i = 0) {
    //solve on own in revision
    if (i === nums.length - 1) {
      return true;
    }
    if (nums[i + 1] < nums[i]) {
      return false;
    }

    return this.isSorted(nums, i + 1);
  }
}
