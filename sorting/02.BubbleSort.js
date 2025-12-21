/* Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort algorithm and return the sorted array.
A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.
Input: nums = [7, 4, 1, 5, 3]
Output: [1, 3, 4, 5, 7]
Constraints:
1 <= nums.length <= 1000
-104 <= nums[i] <= 104
nums[i] may contain duplicate values.
*/

/* idea:"Push maximum to the end in each iteration using adj swaps"
in each iteration we find out the maximum and push it to last, then we find out max in 0 to n-2 and push it to n-2 .Finding max is checking adjacents like
0,1 then 1,2 then 2,3 and keep swapping if num is greater than next number this way max will be pushed right. at first we check everuthing from 0 to n-1 then since n-1 contains max now,
we check only 0 to n-2 ,and so on
so outer loop is for 0 to n-2 as after n-1 operations the first element will automatically be shortest.
then inner loop first time from 0 to n-2 (we check arr[j] >arr[j+1]) so  we stop at n-2 if we check n-1 then arr[j+1] will be out of bounds
then second loop from 0 to n-3 then third loop from 0 to n-4 and ... ith loop is 0 to (n-i-1)*/
//T.C is O(n**2) S.C is O(1)
//T.C in worst and avg  and best :  O(n**2) //we can optimise best to O(n) by optimised bubble sort (using flag)
//Space complexity: O(1) (in-place)
//Stability: Yes (because only swaps when nums[j] > nums[j+1], equal elements don’t move past each other).

class Solution {
  bubbleSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
    return nums;
  }
}

/* Optimised Bubble sort:
In this we check an extra condition like if in any loop there is no swap happened it means array is sorted by that point no need to iterate further
this can be done using a boolean flag */
class Solution {
  bubbleSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
          swapped = true;
        }
      }
      if (!swapped) {
        return nums;
      }
    }
    return nums;
  }
}
//this just reduces some operations by returning early
//T.C is O(n**2) S.C is O(1)
//T.C in worst and avg :  O(n**2) ,Best is O(n) (when arr is sorted)
//Space complexity: O(1) (in-place)
//Stability: Yes (because only swaps when nums[j] > nums[j+1], equal elements don’t move past each other).
