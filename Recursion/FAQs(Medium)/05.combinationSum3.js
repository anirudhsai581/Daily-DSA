/* Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:
There is only use of numerals 1 through 9. A single use is made of each number.
Return list of every feasible combination that is allowed. The combinations can be returned in any order, but the list
cannot have the same combination twice.
Input : k = 3 , n = 7
Output : [ [1, 2, 4] ]
Input : k = 3, n = 9
Output : [[1, 2, 6],[1, 3, 5],[2, 3, 4]]
Input : k = 3, n = 8
Output:
[ [1, 2, 3, 4] ]
 Constraints:
2 <= k <= 9
1 <= n <= 60*/
/* idea is to use nums array with 1-9 number this is same as generating powerset sums but we only check sums with length k, otherwise we dont push

T.C is O(1) here like we have fixed size array at most 2**9 combinations are checked and each can be at most length k, so (2**9)*k
S.C is O(k) for depth of recursive stack and storing ans array takes O((2**9)*(k)) */
class Solution {
  combinationSum3(k, n) {
    //your code goes here
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let ans = [];
    this.helper(nums, [], 0, ans, 0, k, n);
    return ans;
  }
  helper(nums, curr, idx, ans, sum, k, n) {
    if (sum === n && curr.length === k) {
      ans.push([...curr]);
      return;
    }
    if (sum > n || curr.length + (nums.length - idx) < k) {
      return;
    } //just for earlier pruning
    if (curr.length === k || idx === 9) {
      return;
    }
    this.helper(nums, curr, idx + 1, ans, sum, k, n); //exclusion
    curr.push(nums[idx]);
    this.helper(nums, curr, idx + 1, ans, sum + nums[idx], k, n); //inclusion
    curr.pop();
  }
}

/* iterative +backtracking method (Dfs style) 

idea instead of using sum we are doing n-(curr element) at each call reducing the target also instead of using an actual nums array as we 
know each element of nums array is 1-9 which can directly be obtained by doing index+1 also for pruning we are checking if idx is 9 or if curr length
exceeded k or if curr length + remaining elements are less than k (this happens due to our exclusion branches we may have excluded 7 out of 9 elements and remaining are 2 elements but our k is 4 like this we cna
return early) also if n has become negative (curr sum exceeded target ) we can return .*/
//time complexity same as above style at most 2**9 subsets are generated + copying the curr array can take k each, so O((2**9)*k) and S.C is O(k) for stack and for ans array (no.of solutions *k) maxw will be ((2**n)*k)
//both of these are constant as we know k is <=9 here and 2**9 is 512
class Solution {
  combinationSum3(k, n) {
    let ans = [];
    this.dfs(k, n, [], 0, ans);
    return ans;
  }
  dfs(k, n, curr, idx, ans) {
    if (n === 0 && curr.length === k) {
      ans.push([...curr]);
      return;
    }
    if (n < 0 || curr.length + (9 - idx) < k) {
      return;
    }
    if (curr.length > k || idx === 9) {
      return;
    }
    for (let i = idx; i < 9; i++) {
      curr.push(i + 1); //assume imaginary array nums 1-9 with 0-8 index
      this.dfs(k, n - (i + 1), curr, i + 1, ans);
      curr.pop();
    }
  }
}
