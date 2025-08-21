/*
Given an array nums and an integer k. R﻿eturn true if there exist subsequences such that the sum of all elements in subsequences is equal to
 k else false.
Input : nums = [1, 2, 3, 4, 5] , k = 8 Output : Yes
Explanation : The subsequences like [1, 2, 5] , [1, 3, 4] , [3, 5] sum up to 8.
Input : nums = [4, 3, 9, 2] , k = 10 Output : No
Explanation : No subsequence can sum up to 10.
Constraints:
1 <= nums.length <= 20
1 <= nums[i] <= 100
1 <= k <= 2000
*/

/*
optimal:

*/
class Solution {
  constructor() {
    this.flag = false;
  }

  checkSubsequenceSum(nums, k) {
    //solved on own with powerset sum knowledgge
    let n = nums.length;
    let sum = 0;
    if (n == 1) {
      return nums[0] === k;
    }
    this.generateSubsequences(0, nums, n, k, sum);
    return this.flag;
  }
  generateSubsequences(idx, nums, n, k, sum) {
    if (this.flag) {
      return ;
    }
    if (sum === k) {
      this.flag = true;
      return;
    }
    if (idx === n) {
      return;
    }
    let newSum = sum + nums[idx];
    if (newSum === k) {
      this.flag = true;
      return;
    } //checking this here again reduces recusrsion calls
    this.generateSubsequences(idx + 1, nums, n, k, newSum);
    //checking inclusion branch works better before checking exclusion branch.
    if (!this.flag) {
      this.generateSubsequences(idx + 1, nums, n, k, sum);
    }
  }
}
