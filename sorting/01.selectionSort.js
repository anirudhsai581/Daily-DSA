/*
Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.
A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.
Input: nums = [7, 4, 1, 5, 3]
Output: [1, 3, 4, 5, 7]
Explanation: 1 <= 3 <= 4 <= 5 <= 7.
Thus the array is sorted in non-decreasing order.
Input: nums = [5, 4, 4, 1, 1]
Output: [1, 1, 4, 4, 5]
Explanation: 1 <= 1 <= 4 <= 4 <= 5.
Thus the array is sorted in non-decreasing order.*/

/* Idea: at each iteration we find minimum of the array from its position to till end then we swap it with current ,so array will be sorted from 
start till current ,we move to next ,  we find min from curr till end , we swap with curr .
so outer loop to iterate over array, inner loop from curr to n find min and swap with outer loop element we are at.outer loop only till n-2 as
if all the elements before last element are sorted then last is automatically sorted .
T.C is inner loop runs for n,n-1,n-2,n-3....1  so n(n+1)/2 which is O(n**2) this is best,worst,avg all same
S.C is O(1)*/
//rarely used in practice as its not stable and O(n**2) in best case too.
//it can be used when we have specific need that memory writes are costly like EEPROM but even in this case cycle sort can also be used which is better than selection sort
//Stable?  No — because a smaller element can “jump” past equal ones when swapped.
class Solution {
  selectionSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (nums[j] < nums[min]) {
          min = j;
        }
      }
      [nums[min], nums[i]] = [nums[i], nums[min]];
    }
    return nums;
  }
}
// Example usage:
const solution = new Solution();
console.log(solution.selectionSort([64, 25, 12, 22, 11]));
