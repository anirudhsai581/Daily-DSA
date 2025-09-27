/* Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Constraints:
1 <= nums.length <= 8
-10 <= nums[i] <= 10 */

/* 
Idea: we sort the input to bring duplicates together, basically then we have to skip duplicates at same recusrion level
like if we had a,a,b at recursion depth 0 , filling first position , we try a _ _ (0 idx a) then after backtrack we go to i=1 . and try this at first
position,but this is a duplicate using it again at first position  a - - like this will repeat the permutations , so we have to skip this
but we have to skip only if the previous one is not used already at this level because if we are filling second position  a a - at this level if previous is used already we will create new combination only 
so we combiner the nums[i]==nums[i-1] skip condition with if also the previous is not already used then skip, 
so : if(i>0 && nums[i]==nums[i-1] && !used[i-1]){continue}, rest is same as permutations 1 .
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);
    let ans=[];let n=nums.length;
    let used=new Array(n).fill(false);
    let path=[];
    function backtrack(){
        if(path.length===n){ans.push([...path])};
        for(let i=0;i<n;i++){
            if(i>0 && nums[i]==nums[i-1] && !used[i-1]){continue}
            if(used[i]){continue;}
            used[i]=true;
            path.push(nums[i]);
            backtrack();
            used[i]=false;
            path.pop();
        }
    }
    backtrack();
    return ans; 
}; */
/* another approach to skip duplicates for used array approach is to track last removed element after  sorting  array input  , so everytime we need to iterate we check if its same
as the last removed element , as while backtracking the last removed element will be the previous one we are going to iterate now.so if its same we are doing a duplicate
permutation so skip
short snippet of the idea:
let lastRemoved = null; // loop-local marker: remembers last value we backtracked from
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (nums[i] === lastRemoved) continue; // skip duplicate value already tried at this depth
      used[i] = true;
      path.push(nums[i]);
      backtrack();
        !backtrack and record the removed value so identical values are skipped later in this loop
      lastRemoved = path.pop();
      used[i] = false;
    }
  }

The general skip in  visited-array method checks the previous neighbor in the array.
The lastRemoved  logic in visited-array method remembers the last value tried at this depth.
 */
