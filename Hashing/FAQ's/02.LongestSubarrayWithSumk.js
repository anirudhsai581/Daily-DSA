/*
Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array
exists, return 0. Input: nums = [10, 5, 2, 7, 1, 9],  k=15
Output: 4
Explanation:
The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. This sub-array starts at index 1 and ends at index 4, and 
the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.
Input: nums = [-3, 2, 1], k=6 Output: 0
Constraints:
 1<=n<=105
 -10**5<=nums[i]<=10**5
 -10**9<= k<=10**9


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
//optimal:NOte: this is optimal only when array has only positives and our given qn needs neg also so not valid here generally
//optimal than hashmap approach for positive integers in array T.C is start can travel at most n ,end travels n , so O(2n) i.e O(n),
//S.C is O(1). when there are only positives we can use slidingwindow , we can increase elements in window (i->j)if sum exceeds we
//remove one from left (moving i ) then we imclude j and move right .
/*  longestSubarray(nums, k) {
        let n=nums.length;
       let start=0;let end=0;let maxLen=0;let sum=0;
       //while loop comdition intially wrote end!=n-1 we have to check if end!=n
       while(end!=n){
          sum=sum+nums[end];
          while(sum>k){
            sum=sum-nums[start];
            start++;
          }
          if(sum==k){
            maxLen=Math.max(maxLen,end-start+1);
          }
          end++;
       }
      return maxLen;
    } */
//optimal : for positives and negatives
//the logic is we are checking the max length subarray ending with the current element likwise we check for all elements hence its guaranteed
//we find the subarray if exist. now to check if there is valid subarray ending with current element we use prefix sums.suppose
//prefix sum till current elements is x, we check for any prefix sum before this with value x-k(we use hashmap to check if previously such prefix exist)
//so if such prefix with x-k exist it means ,the subarray sum starting from prefixsum (with value x-k) to current prefixsum(value x) will have sum k,
// if suppose k=6 prefix sum currently is 8 if there exist prefix sum earlier with 2 that means after that element onwards till current element the subarray sum is k.
//T.C is O(n), S.C is O(n).
class Solution {
  longestSubarray(nums, k) {
    let n = nums.length;
    let prefixSum = 0;
    let maxLen = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
      prefixSum += nums[i];
      if (prefixSum == k) {
        //mistake did here is updated max len with i ,but length is i+1.
        maxLen = Math.max(maxLen, i + 1);
      }

      if (map.has(prefixSum - k)) {
        let x = i - map.get(prefixSum - k);
        maxLen = Math.max(maxLen, x);
      }
      //this below if condition is needed before updating the prefixsum into hashmap as with negatives and 0's same prefix sum can
      //be present later and we should not update it as we want max length so we check earliest prefixsum where our current prefix sum -k is present
      if (!map.has(prefixSum)) {
        map.set(prefixSum, i);
      }
    }
    return maxLen;
  }
}
