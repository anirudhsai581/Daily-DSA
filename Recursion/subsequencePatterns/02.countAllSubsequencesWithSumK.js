/* Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all
elements in the subsequence is equal to k.
Input : nums = [4, 9, 2, 5, 1] , k = 10
Output : 2 
Input : nums = [4, 2, 10, 5, 1, 3] , k = 5
Output : 3
Input : nums = [1, 10, 4, 5] , k = 16
Output:1
Constraints:
1 <= nums.length <= 20
1 <= nums[i] <= 100
1 <= k <= 2000
*/
//optimal for recursion:
//T.C is O(2**n) just to generate these many recursive calls (ideally at max of (2**(n+1)-1) calls will happen,leaf will have 2**n,which is major, which is of complexity O(2**n).
// S.C is O(n) (recursion call stack depth)
class Solution {
  count = 0;
  countSubsequenceWithTargetSum(nums, k) {
    //Revision solving
    let n = nums.length;
    this.helper(nums, n, k, 0, 0);
    return this.count;
  }
  helper(nums, n, k, sum, idx) {
    if (idx === n) {
      if (sum == k) {
        this.count++;
      }
      return;
    }
    this.helper(nums, n, k, sum, idx + 1);
    this.helper(nums, n, k, sum + nums[idx], idx + 1);
  }
}
/* same as above interms of time and space complexity,just a diff type using iteration +backtracking

class Solution {
    constructor(){
        this.count=0;
    }
    countSubsequenceWithTargetSum(nums, k) {
        //iteration +backtracking:
        this.dfs(nums,k,0,0);
        return this.count;
    }
    dfs(nums,k,sum,start){
        if(sum===k){this.count++;return}
        if(sum>k){return}
        for(let i=start;i<nums.length;i++){
            this.dfs(nums,k,sum+nums[i],i+1);
        }
    }
} */

//timecomplexity:recursion explores all possible subsets in the worst case. For each element you can either include it in a subset or not
// — that gives up to 2**n possible subsets.Each call does O(1) .so total T.C is O(2**n)
//*** for calculating in mathematical equation form refer subsequence pattern notes. */
//S.C is O(n)(recursive call stack)
