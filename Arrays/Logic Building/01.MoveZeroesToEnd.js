/* Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.
This must be done in place, without making a copy of the array.
Example 1
Input: nums = [0, 1, 4, 0, 5, 2]
Output: [1, 4, 5, 2, 0, 0]
Example 2
Input: nums = [0, 0, 0, 1, 3, -2]
Output: [1, 3, -2, 0, 0, 0]
1 <= nums.length <= 10**5
-10**4 <=nums[i] <= 10**4

*/

/*Brute: take another array, iterate over main array and to second arr if ele is non zero , check the length of second array if not equal to original arr push rem ele as 0's.
SC: O(n) T.c O(n)(n for original arr iteration + count of zeroes(<=n))
 Optimal:  like two pointers, one pointer idx and another loop pointer 'i' using i we traverse the array , but idx pointer 
 always keeps track of range till non zero idx, whenever we get non zero at i we swap that with element at idx ,if i has 0 then we just move i, (Observation: at the end idx will be the count of non zero elements)  */

class Solution {
  moveZeroes(nums) {
    let n = nums.length;
    let idx = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] != 0) {
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
        idx++;
      }
    }
    return nums;
  }
}

// Test the code
const nums = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

// Create an instance of Solution class
const sol = new Solution();
sol.moveZeroes(nums);

console.log("Array after moving zeroes:", nums);
