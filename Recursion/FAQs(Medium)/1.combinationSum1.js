/* Provided with a goal integer target and an array of unique integer candidates, provide a list of all possible
 combinations of candidates in which the selected numbers add up to the target. The combinations can be returned in
any order.

A candidate may be selected from the pool an infinite number of times. There are two distinct combinations if the
frequency of at least one of the selected figures differs. 

Input : candidates = [2, 3, 5, 4] , target = 7
Output : [ [2, 2, 3] , [3, 4] , [5, 2] ]
Input : candidates = [2], target = 1
Output : []
Input : candidates = [1], target = 1
Output:[ [1] ]
Constraints:
1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
*/
/* So the concept is about Recursion: this is the best recursive way.
Similar to powerset (generating all subsequenes- we use inclusion-exclusion method ) the extra condition here is each number can repeat any number of
 times. so when including we dont increase idx such that in subsequent calls this will be included any no.of times and in the exlusion call we do like normal
 idx+1 and dont include the current idx.So these two will ensure all such combinations will be generated.
 
 Points to remember : pass [...curr] or [curr.slice()] as array is passed as reference to each function call , all will be referencing same curr, if we pass
 diff arrays then memory will be exponential ,so here once curr is reused and in backtracking we pop so that it can be made the same way for the next exclusion call
 when inclusion call comes back. also here we instead of using sum variable we are reducing from target so base condition: if target becomes 0 we got our desired sum,if target <0
 our curr sum exceeded the target so we return also return if idx==n .
 
 TIME COMPLEXITY: here its not direct like power sum to calcualte timecomplexity . in normal powerset each can be
 included/excluded 2 ways so 2**n ways . If the smallest candidate value is 1, you can subtract 1 repeatedly so the
 recursion depth can be ≈ target and the recursion tree can have size on the order of 2** target. So a common
(loose) worst-case bound is:O(2**target)  adn we are copying elements from curr to ans which can have atmost length of target. (unlike n in powerset here even if we had just 1 in our arrya and target is 10 we can add 1 10 times)
so T.C is O((2**target)*target) this is just upperbound exact is difficult to analyse think of it as something exponential interms of target**/

//Space Complexity:considering call stack which can be depth of max of target as if we take all 1's so O(target) for call stack and curr can have
//at any time max length of target .so O(target) and main thing is output size .the callstack and curr length are generally much smaller.
//so output size will be lets say O(outputs .maxlength), no.of outputs can be exponential in worst case . this can be upperbounded by 2**target and maxlength target
//so s.c is always less than O(2**target)*target . if we consider only aux space (not considering output array) then its O(target).
class Solution {
  combinationSum(candidates, target) {
    let n = candidates.length;
    let ans = [];
    this.helper(candidates, target, [], 0, n, ans);
    return ans;
  }
  helper(candidates, target, curr, idx, n, ans) {
    if (target === 0) {
      ans.push([...curr]);
      return;
    }
    if (target < 0 || idx === n) {
      return;
    }
    curr.push(candidates[idx]);
    this.helper(candidates, target - candidates[idx], curr, idx, n, ans);
    curr.pop();
    this.helper(candidates, target, curr, idx + 1, n, ans);
  }
}
