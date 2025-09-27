/* Given an array of integers called nums, sort the array in non-decreasing order using the quick sort algorithm and return the sorted array.
A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.
Input: nums = [7, 4, 1, 5, 3]
Output: [1, 3, 4, 5, 7] 
Input: nums = [5, 4, 4, 1, 1]
Output: [1, 1, 4, 4, 5]
Constraints:
1 <= nums.length <= 10**5
-10**4 <= nums[i] <= 10**4
nums[i] may contain duplicate values.
*/
//T.C is same as merge sort O(nlogn) but this does not use extra space other than recursion but merge uses temporary array etc
/* Idea:fix the pivot (can be first element or the last element or median or random)
once pivot is fixed then using partition function partion the array such that all elements less than pivot on one side and greater than pivot on one side
(to tackle equal values we put the <= on left side) ,lets take pivot as first element
we do this for any subarray firs we take low as pivot then we have two pointer i,j.  i at low and j at high and we reduce j as long as 
arr[j]> pivot and we increase i as long as arr[i] < pivot so when they stop ,and if i did not cross j then we swap arr[i] and arr[j] 
such that lesser than pivot on right is transfered to left and greater than pivot on left is transfered to right they will stop
once i>j ,at this point we know our pivot should be positioned at j as right of j all will be greater and j is now at  less than pivot so swapping 
with j ensures left of pivot is having all lesser values.so in conclusion we positioned our pivot at correct positon
then we recurse for the subarray from low to before pivot and sub array from after pivot to high, so we have to return pivot index (j index) inside
partition function. */
//T.C is O(nlogn) in best and avg cases ,as no.of levels is logn base 2 and then each does work of O(n) in partition
//step ,so O(nlogn) T.C in O(n**2) in worst case if the array is already sorted then each time we always have n-1
//elements one side and other side 0 .so recursion depth is n instead of logn. *** use random pivot not like the first
//element as pivot for better performance vy avoiding the worst case probability. also  S.C is only recursion call stack
//space O(logn) no other space used.
//* its not stable as :suppose you have [(5,A), 3, (5,B)] where A comes before B. A common partition implementation can swap elements such that the result becomes [(5,B), 3, (5,A)] — the two equal 5s lost their original order.

class Solution {
  quickSort(nums) {
    let n = nums.length;
    this.quickSortHelper(nums, 0, n - 1);
    return nums;
  }
  quickSortHelper(arr, low, high) {
    if (low >= high) {
      return;
    }
    let p = this.partition(arr, low, high);
    this.quickSortHelper(arr, low, p - 1);
    this.quickSortHelper(arr, p + 1, high);
  }
  // 54123
  //i=0 pivot =5 i=0 1 2 3 4
  //j=4 pivot=5 j=4
  //12345 i=1 j=0
  //i will move atleast one position with our logic and j will at max go till 0 so if first itself is the smallest then first element
  //will be swapped with itself so no issues, if last is biggest then i will be at high and j will also be at high  so while loop(i<j) is false
  // so breaks and then too pivot last element
  //will be swapped with itself
  partition(arr, low, high) {
    let pivot = arr[low]; //fix a pivot
    let i = low;
    let j = high;
    while (i < j) {
      while (arr[i] <= pivot && i < high) {
        i++;
      }
      while (arr[j] > pivot && j > low) {
        j--;
      }
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }
}
