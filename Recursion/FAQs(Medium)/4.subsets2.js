/* Given an integer array nums, which can have duplicate entries, provide the power set.
Duplicate subsets cannot exist in the solution set. Return the answer in any sequence. 
Input : nums = [1, 2, 2]
Output : [ [ ] , [1] , [1, 2] , [1, 2, 2] , [2] , [2, 2] ]
Input : nums = [1, 2]
Output : [ [ ], [1] , [2] , [1, 2] ]
Input : nums = [1, 3, 3]
Output:[ [ ], [1] , [1, 3] , [1, 3, 3] , [3] , [3, 3] ]
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10*/
//inclusion exclusion way
/* idea is first we sort the array to bring duplicates together then at exlcuding step instead of skipping the current value we skip all its duplicates 
as well.the logic is if we skipped only current element like in regular powerset, like we have [1,1,2,3] suppose at idx 0 we exclude and include
so one call with  [] and another call with [1] now at idx 1 for this []  we exclude and include [] and [1[(1 of idx=1) we produced [1] now 
which is same as the value included at idx=0 [1] ,anything after this will be duplicate of what idx=0 inclusion branch does. so the idea is to exclude
the current element and all its duplicates also such that those duplicates inclusion in later step wont call repetetive branches.*/

/* Time complexity:
Time: worst-case Θ(2^n) — you generate each subset once (we are skipping dups but incase there are no dups worst case we can generate powerset completely
which is 2**n (each has 2 choices) refer powerset Time complexity for more).

Auxiliary space: O(n) recursion depth + current curr.(which is also max of n)
space for ans : 2**n subsets at max ,one subset can be max of n length so O(n*(2**n))

Total space (including output): O(2^n) to store all subsets. */
class Solution {
  subsetsWithDup(nums) {
    //inclusion +exclusion way
    let ans = [];
    nums.sort((a, b) => a - b);
    this.helper(nums, [], 0, ans);
    return ans;
  }
  helper(nums, curr, idx, ans) {
    if (idx === nums.length) {
      ans.push([...curr]);
      return;
    }
    let i = idx + 1;
    while (i < nums.length && nums[i] === nums[i - 1]) {
      i++;
    }
    this.helper(nums, curr, i, ans);
    curr.push(nums[idx]);
    this.helper(nums, curr, idx + 1, ans);
    curr.pop();
  }
}
/* iterative+dfs way 
idea:we sort the array here too so that duplicates come together.suppose arr=[1,1,2,3]if we do normally first we explore all combinations with idx=0 element as first
after all the backtracking is done then this will be popped and we move to i=2 at first dfs for loop in this we include idx=1 now again include 
[1] in this iteration we again explore depth of all subsets that start with this idx and include later idx elements .but this will be duplicate
so we first inclyde all and go depth ,but in next iterations of each dfs that is i>idx(initial start idx of each dfs call) then in those iterations
we skip if its a duplicate of previous using if condition in the loop:
T.C is O(2**n) in worst case if no duplicates we generate powerset. s.c is Auxiliary space (stack + curr):O(n)
Total space including output: O(n*(2**n)
 in the worst case (storing all subsets).
class Solution {
    subsetsWithDup(nums) {
        //iterative+backtracking way(DFS like)
        nums.sort((a,b)=>a-b);
        let ans=[];
        this.dfs(nums,[],0,ans);
        return ans;
    }
    dfs(nums,curr,idx,ans){
      ans.push([...curr]);
      for(let i=idx;i<nums.length;i++){
        if(i>idx && nums[i]===nums[i-1]){continue}
        curr.push(nums[i]);
        this.dfs(nums,curr,i+1,ans);
        curr.pop();
      }
    }
}
 */
