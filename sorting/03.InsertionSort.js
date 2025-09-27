/* Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort algorithm and return the sorted array.
A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.
Input: nums = [7, 4, 1, 5, 3]

Output: [1, 3, 4, 5, 7]
Constraints:
1 <= nums.length <= 1000
-10**4 <= nums[i] <= 10**4
nums[i] may contain duplicate values.

 */

/*idea: iterate over the array, for every element till that element find its //correct position and insert there,
        (instead of having every continous swaps from that element we copy the current element  then find the position
        to insert by moving the elements of it to right by 1 position as long as they are greater than this ,then we
        insert . if we had followed swaps it would be little extra though its also O(n**2) in each movement we are moving key to left and element to right 
        2 operations, instead we can just reduce j and move the greater element one position right, one operation .
        */
class Solution {
  insertionSort(nums) {
    let n = nums.length;
    //we take i=1 as start because i=0 till that point its already sorted
    for (let i = 1; i < n; i++) {
      const key = nums[i];
      let j = i - 1;
      while (j >= 0 && nums[j] > key) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = key;
    }
    return nums;
  }
}

// *Analysis of Insertion sort:
/* T.C isworst case & avg is  O(n**2) , Best is O(n)(input already sorted)
S.C is O(1) 
Stable Algorithm(maintains relative order after sort (like if duplicates exist, or sorting objects based on one prop which is duplicate in input))
Good for small arrays or nearly-sorted arrays. For large random arrays, use a faster algorithm (merge/quick/TimSort). */

/* There is an optimised idea for insertion sort :
as we know we are finding the position to insert for each element in its left half ,this makes left half sorted till that element 
so  to find the insertion position instead of using regular linear search while loop which takes O(n) we can use binary search here 
which takes O(logn) and moving greater elements to right by 1 position is O(n) in both so overall is O(n**2) but using BS saves us some operations
*TimSort used in JS’s .sort() switches to insertion sort on small subarrays
 */
/* 
Binary-insertion example:
    class Solution {
        * helper: find index to insert key into nums[0..right] (inclusive) using binary search
        binarySearch(nums, key, left, right) {
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] === key) return mid + 1; // place after equal to preserve stability
                else if (nums[mid] < key) left = mid + 1;
                else right = mid - 1;
            }
            return left;
        }

        insertionSort(nums) {
            const n = nums.length;
            for (let i = 1; i < n; i++) {
                const key = nums[i];
                * // find location to insert in nums[0..i-1]
                const insertIdx = this.binarySearch(nums, key, 0, i - 1);
                * // shift elements to the right
                let j = i - 1;
                while (j >= insertIdx) {
                    nums[j + 1] = nums[j];
                    j--;
                }
                nums[insertIdx] = key;
            }
            return nums;
        }
    } */
