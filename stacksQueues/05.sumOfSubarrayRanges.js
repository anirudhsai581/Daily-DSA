/* Given an integer array nums, determine the range of a subarray, defined as the difference between the largest and
/* smallest elements within the subarray. Calculate and return the sum of all subarray ranges of nums.
A subarray is defined as a contiguous, non-empty sequence of elements within the array.
Examples:
Input: nums = [1, 2, 3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0 
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
Input: nums = [1, 3, 3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[3], range = 3 - 3 = 0
[3], range = 3 - 3 = 0
[1,3], range = 3 - 1 = 2
[3,3], range = 3 - 3 = 0
[1,3,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.
Input: nums = [4, -2, -3, 4, 1]
Output:

*/
/* Bruteforce:
    subArrayRanges(nums) {
      let total=0;let n=nums.length;
      for(let i=0;i<n;i++){
        let max=nums[i];let min=nums[i];
        for(let j=i;j<n;j++){
          max=Math.max(max,nums[j]);
          min=Math.min(min,nums[j]);
          let range=max-min;
          total+=range;
        }
      }
      return total;
    } */
