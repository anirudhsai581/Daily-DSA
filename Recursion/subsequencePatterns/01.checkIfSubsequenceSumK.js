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
same as powerset instead of pushing all to ans array,we check sum if atleast one sum found we just return the remaining calls directly with help of
boolean.
*/
class Solution {
  constructor() {
    this.flag = false;
  }
  checkSubsequenceSum(nums, k) {
    //inclusion-exclusion method
    this.helper(nums, k, 0, 0);
    return this.flag;
  }
  helper(nums, k, sum, idx) {
    if (sum == k) {
      this.flag = true;
      return;
    }
    if (idx == nums.length || this.flag == true) {
      return;
    }
    this.helper(nums, k, sum, idx + 1); //exclusion
    this.helper(nums, k, sum + nums[idx], idx + 1); //inclusion
  }
}
const sol = new Solution();
const nums = [1, 2, 3, 4];
const target = 5;
console.log(sol.checkSubsequenceSum(nums, target)); // Expected output: true
/* 
using for loop backtracking(dfs like algo)
like following but we track sum instead of curr, (also remember we need to remove nums[i] from sum in  backtrack if we are doing explicit add like before recursion 
if we do sum+=nums[i] as for remaining iterations of the loop sum will not be correct )if we directly modfiy and pass in recursion its not need(as pass by value)
//we generate suppose nums=[a,b,c]  ans array will be : [[],[a],[a,b],[a,b,c],[a,c],[b],[b,c],[c]]
  //we go with index full depth pushing the curr each time , once we reach end, we pop and backtrack , then we push next index and along with it 
  //all its next ones once we reach end of this we backtrack and start with next index go full again
  // this is kind of including everything with curr index as start with nested loops ensuring we move (excluding the next one) 
  // Time Complexity: O(n*2**n) S.C is    mix of output size which is O(n*2**n) + extra space which is O(n) (call stack depth O(n)+temporrary curr uses O(n))
overall space complexity is O(n*2**n).
class Solution {
    found=false;
    checkSubsequenceSum(nums, k) {
         //iterative backtack approach (dfs like)
         this.found=false;
         this.dfs(nums,k,0,0);
         return this.found;
         
    }
    dfs(nums,k,sum,start){
        if(this.found){return}
        if(sum===k){this.found=true;return;}
        for(let i=start;i<nums.length;i++){
            
        this.dfs(nums,k,sum+nums[i],i+1);
            
        }
    }
}


*/
