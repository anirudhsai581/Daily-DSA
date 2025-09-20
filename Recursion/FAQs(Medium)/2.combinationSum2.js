/* 
Given collection of candidate numbers (candidates) and a integer target.Find all unique combinations in candidates where
the sum is equal to the target.There can only be one usage of each number in the candidates combination and return the
answer in sorted order.
e.g : The combination [1, 1, 2] and [1, 2, 1] are not unique.
Input : candidates = [2, 1, 2, 7, 6, 1, 5] , target = 8
Output : [ [1, 1, 6] , [1, 2, 5] , [1, 7] , [2, 6] ]
Input : candidates = [2, 5, 2, 1, 2] , target = 5
Output : [ [1, 2, 2] , [5] ]
Input : candidates = [2, 1, 2] , target = 5
Output:[ [1, 2, 2] ]

*/
/* in exclusion branch exclude all duplicates ,if not earlier included value of duplicates first occurence will again repeat same sequence when
in exclusion branch of duplicate first occurence (we skipped including first occurence) in next index (dup second occurence) if we include now 
then earlier included sequence will repeat
like if we had [0,1,1,2] at idx=1 exclude we will have suppose [0] and idx=1 include we will have [0,1] now in thise exclusion call([0]) at idx=2 if  
we include this again it will be [0,1](1 from idx=2) so this subsequence repeats so the best way is when excluding excluding all duplicates also
so the inclusion branch will ensure they are included once ,excluding branch skipping dups will ensure no dupl at later inclusions*/

class Solution {
  combinationSum2(candidates, target) {
    //your code goes here
    candidates.sort((a, b) => a - b);
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
    this.helper(candidates, target - candidates[idx], curr, idx + 1, n, ans);
    curr.pop();
    idx++;
    while (idx < n) {
      if (candidates[idx] == candidates[idx - 1]) {
        idx++;
      } else {
        break;
      }
    }
    this.helper(candidates, target, curr, idx, n, ans);
  }
}
/* Iterative+backtracking way
(as we are doing the second way for all subsequence patterns.learn more on this in powerset)
//here sorting allows us to skip duplicates also prune early too
//we should skip duplicate at first level as we want to include it in first depth like , [1,1,2,2,5,6,7] target 8 then initially we go like [],[1],[1,1],[1,1,2],[1,1,2,2],[1,1,2,2,5]....(after backtracking )we go for next iteration
like initial iteration was i=start , now i=start+1 will start , suppose we now have [1,1] initially we did i=2(including first 2 ) ad went all depth ,now after backtrack ,[1,1] again
but this time i=3,now if we include 2(at idx=3) again we will get repetetion of [1,1,2](here 2 was idx=3) earlier we already covered this in idx=2 so we skip
duplicates from i>start.(ensuring one combination full depth is traversed)

Time Complexity:Let N = candidates.length, m = min(candidates), T = target, D = min(N, ⌊T/m⌋) (max depth).
at every stage we are skipping duplicates if found , esentially this is generating powerset but with Ans arrays containing only valid sums , 
hence this is upperbounded by (2**n)*(n)(at max O(n) work for copying the valid subsets to ans).in general its O(d) for copying as max subset can be depth
D .
In combination sum1 since reuse allowd N branches upto depth D it went upto N**D calls. here no reuse allowed so its like 2 branches included or excluded 

If exactly need to calculate with recursion equation in the form of summation(for loop) that recursion equation can be solved by taking difference of i+1 and i
full steps refer:SubsequencePatterns.md file in this recursion repo.
Space Complexity:
Auxiliary space (stack + curr): O(k) = O(min(N, T/m)).
Output space (ans): O(#solutions × max_solution_length) = O(S × k).(# represents no.of solutions)

class Solution {
    combinationSum2(candidates, target) {
        //dfs (iterative+backtracking method);
        candidates.sort((a,b)=>a-b);
        let ans=[];
        this.dfs(candidates,target,[],0,ans);
        return ans;
    }
    dfs(candidates,target,curr,start,ans){
        if(target==0){ans.push([...curr]);return;}
        if(target<0){return}
        for(let i=start;i<candidates.length;i++){
            if(i>start && candidates[i]==candidates[i-1]){continue;}
            if(candidates[i]>target){return}
            curr.push(candidates[i]);
            this.dfs(candidates,target-candidates[i],curr,i+1,ans);
            curr.pop();
        }
        
    }
    
} */
