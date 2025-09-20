/* Given an array nums of n integers. Return array of sum of all subsets of the array nums.
Output can be returned in any order.
Input : nums = [2, 3]
Output : [0, 2, 3, 5]
Input : nums = [5, 2, 1]
Output : [0, 1, 2, 3, 5, 6, 7, 8]
Input : nums = [1]
Output:[0, 1]
Constraints:
1 <= n <= 15
0 <= nums[i] <= 10**4
*/
//best recursive way:same as powerset (push sums instead of sets)
//include once then excldue once for the current element explore all combinations when idx reaches n we have to stop and its a valid subset
//T.C is O(2**n) for the no.of calls as leaf is dominating and has 2**n and total calls are (2**(n+1))-1which is still O(2**n) and copying the
//to ans array is O(1). So T.C is O(2**n).
class Solution {
  subsetSums(nums) {
    //inclusion -exclusion technique
    let ans = [];
    this.helper(nums, 0, 0, ans);
    return ans;
  }
  helper(nums, sum, idx, ans) {
    if (idx === nums.length) {
      ans.push(sum);
      return;
    }
    this.helper(nums, sum, idx + 1, ans); //exclusion
    this.helper(nums, sum + nums[idx], idx + 1, ans); //inclusion ,sum (passbyvalue)
  }
}

//iterative+backtracking way (DFS Like)

//timecomplexity:recursion explores all possible subsets in the worst case. For each element you can either include it in a subset or not
// — that gives up to 2**n possible subsets.Each call does O(1) .so total T.C is O(2**n)
//Every subset of the n elements is produced exactly once by this DFS. For each subset you make one ans.push(sum) call. The number of subsets of an n-element set is 2**n.So the algorithm performs O(2**n) pushes / visited nodes
//each call does constant work . so overall T.C is O(2**n).
//*** for calculating in mathematical equation form refer subsequence pattern notes. */

//S.C is The recursion stack space will take O(N).  if you consider the space used to return the output that the space complexity can go up to O(2**N).
//we are jsut storing sum its not dependent on length so no.of subset will be space complexity.
/*
class Solution {
  subsetSums(nums) {
    //iterative+Backtracking way
    let ans = [];
    this.dfs(nums, 0, 0, ans);
    return ans;
  }
  dfs(nums, sum, idx, ans) {
    ans.push(sum);
    for (let i = idx; i < nums.length; i++) {
      this.dfs(nums, sum + nums[i], i + 1, ans);
    }
  }
} 
 */
