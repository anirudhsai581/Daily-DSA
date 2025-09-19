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
