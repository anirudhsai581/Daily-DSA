/*
Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.
Input: nums = [10, 5, 2, 7, 1, 9],  k=15
Output: 4
Explanation:
The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. This sub-array starts at index 1 and ends at index 4, and 
the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.
Input: nums = [-3, 2, 1], k=6 Output: 0
Constraints:
 1<=n<=105
 -105<=nums[i]<=105
 -109<= k<=109


Brute force: nested loops finding every subsequence and in any of them if sum matches update maxlength
T.C is O(n**2),S.C is O(1)
 class Solution {
  longestSubarray(nums, k) {
    //edge cased missed in brute: did not check when sum only has nums[i] then if its matching
    //count when single element directly matches k then count=1 is also possibility.
    let n = nums.length;
    let sum = 0;
    let maxCount = 0;
    for (let i = 0; i < n; i++) {
      sum = nums[i];
      if (sum == k) {
        maxCount = Math.max(maxCount, 1);
      }
      for (let j = i + 1; j < n; j++) {
        sum = sum + nums[j];
        if (sum == k) {
          maxCount = Math.max(maxCount, j - i + 1);
        }
      }
    }
    return maxCount;
  }
}
*/
//optimal: