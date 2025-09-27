/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:
Input: nums = [1]
Output: [[1]]


1.using Used array method

/* Permutations (LeetCode 46) – Time & Space Complexity Notes

1. Number of permutations of n elements = n!

2. Each permutation requires copying the current path of length n
   (using path.slice() or [...path]) → O(n) cost.

3. Two equivalent ways to analyze:

   (a) Output-count view:
       - There are n! permutations
       - Each takes O(n) to copy
       - Total = O(n × n!)

   (b) Recursion-tree view:
       - Depth 0: n calls
       - Depth 1: n × (n-1) calls
       - Depth 2: n × (n-1) × (n-2) calls
       - ...
       -Depth n-1:n! calls;
       - Depth n: n! leaves   
       -So the recursion tree has about n! leaves, and the total number of internal nodes is bounded by n × n!
       and also 
       - Each path has length n → pushes/pops O(n) per permutation
       - Each leaf copies path O(n)
       - Total work for this copying across tree = O(n × n!)
       so overall T.C is n*n! + n*n! which is O(n*n!);

4. Space complexity:
   - Recursion depth = O(n)
   - "used" array = O(n)
   - "path" array = O(n)
   - Result array stores all permutations = O(n × n!)

Final Complexity:
   - Time = O(n × n!)
   - Space = O(n × n!) including output
   - Space = O(n) auxiliary (excluding output)
*/
/*
var permute = function(nums) {
    const n= nums.length; const ans=[];
    const used=new Array(n).fill(false);const path=[];
  function backtrack(){
        if(path.length===n){ans.push(path.slice()); return}
        for(let i=0;i<n;i++){
            if(used[i]){continue};
            used[i]=true;
            path.push(nums[i]);
            backtrack();
            path.pop();
            used[i]=false;
        }
    }
    backtrack();
    return ans;
};*/
//
/*
Time: O(n * n!)  |  Space: O(n) auxiliary + O(n * n!) for storing all permutations

Reasoning:
- There are n! complete permutations (leaves of the recursion).
- At each leaf we do ans.push([...arr]) which copies n elements → O(n) per leaf.
  That alone contributes n! * O(n) = O(n * n!).
- The internal work (swaps, loop overhead, function calls) across the entire recursion
  tree also adds up to Θ(n * n!), so total is still O(n * n!).
- Swap-in-place removes a separate "used[]" array but doesn't change asymptotic cost.
- Auxiliary space (excluding output): recursion depth O(n) + arr O(n) → O(n).
- If you only need to *iterate* permutations (not store them), yield/stream them
  (generators/callback) to avoid O(n * n!) memory.
- Practical note: factorial grows extremely fast — generating all permutations
  is feasible only for small n (commonly n ≤ 8–10 in practice).
*/
var permute = function (nums) {
  const arr = nums.slice(); //copying array to not mutate given array directly (just in case if needed)
  const ans = [];
  const n = nums.length;
  function dfs(idx) {
    if (idx === n) {
      ans.push([...arr]);
      return;
    }
    for (let i = idx; i < n; i++) {
      [arr[idx], arr[i]] = [arr[i], arr[idx]];
      dfs(idx + 1); //note this , its not i+1 we are fixing idx at each level and swapping it with loop variable i each time in that level
      [arr[idx], arr[i]] = [arr[i], arr[idx]]; //backrack
    }
  }
  dfs(0);
  return ans;
};
console.log(permute([1, 2, 3]));
/*output:[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 2, 1 ],
  [ 3, 1, 2 ]
]
*/
