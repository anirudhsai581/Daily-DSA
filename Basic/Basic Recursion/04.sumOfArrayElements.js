/*
Given an array nums, find the sum of elements of array using recursion.
Input : nums = [1, 2, 3]
Output : 6
Constraints:
1 <= n <= 100
1 <= nums[i] <= 100


T.C is O(n) S.C is O(n)->recursive call stack space.
*/
class Solution {
  newSum(nums, i) {
    if (i == nums.length) {
      return 0;
    }
    return nums[i] + this.newSum(nums, i + 1);
  }
  arraySum(nums) {
    //solved on own in revision
    return this.newSum(nums, 0);
  }
}

const solution = new Solution();
const nums = [1, 2, 3]; 
const result = solution.arraySum(nums); 
console.log(result);//6

function tailNewSum(nums,i,sum){
     //solved on own in revision
    if(i==nums.length){
        return sum;
    }
    return tailNewSum(nums,i+1,sum+nums[i]);
}
console.log(tailNewSum(nums,0,0));//6