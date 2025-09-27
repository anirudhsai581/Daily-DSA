/* Given an array of integers, nums,sort the array in non-decreasing order using the merge sort algorithm. Return the
/* sorted array.

A sorted array in non-decreasing order is one in which each element is either greater than or equal to all the elements
to its left in the array. 
Input: nums = [7, 4, 1, 5, 3]
Output: [1, 3, 4, 5, 7]

Constraints:
1 <= nums.length <= 106
-104 <= nums[i] <= 104
nums[i] may contain duplicate values.
*/

/* Idea: we basically divide array in to two halves repeatedly , like if length is n ,we divide it into  0- florr(n/2) and floor(n/2)+1 to n indices
like if we had 9 elements 5 in to left half(0-4) and 4 elements to right half(5 -9) we can do the opposite also but stick to 1 for all subdivisions also
now we keep on dividing this recrusively until length becomes 1 .
Till here the logic can be implemented as ,taking low=0 high=n-1 ,find mid, then call margersort(arr,low,mid) and mergesort(arr,mid+1,high)
we need to stop at when length is 1 no further division possible , so when low==high we stop this is our base condition for safety we write
low>=high although > condition wont happen,after this repetetive division at each recursion level from bottom most we bactrack and during this we merge and backtrack
like so we have merge helper call which merges the two halves but during merging it makes sure they are merged in to sorted order, ultimately from down to top
after all the merges we will get complete sorted arrays our merge function logic works because at each time we are dealing with sorted arrays
so merging two sorted arrays is easier thats what reducing the time.(otherise merging two unsorted arrays of length n,m is O((n+m)(log(n+m))
compare to sorted arrays merge which just takes O(n+m).

the merge function logic:
we can do this two ways :
1.like here keep a temp array and then two pointers one is named left at low and other is for second array named right at mid+1
so low goes till mid and right till high which ever of these both is smaller pushed into temp and that particular pointer moves next
either of this gets exhausted then we come out of loop as && condition is used
once outside push all the elements of non exhausted part into the temp
now we need to copy all the temp into its repsective posiitons in the arr
so we know temp is from index low  to high and needs to be placed in arr from idx low to high
so we do    for (let i = low; i <= high; i++) {
                   arr[i] = temp[i - low];} //so that temp 0 index is accessed till end
2. second way is instead of one temp array. we have two arrays left and right then we copy arr elements with these indices to left and
array elements of right half indices to right then we directly modify original array trvaersing both these arrays liek same way as first method

in both these methods 2n times copying is done, the only difference is one uses single array other uses two arrays of half size
using single array at each recursion level is more cache-friendly  also memory allocations are less.

Memory allocations:
Two arrays → you allocate two new arrays every merge step (unless you manage memory carefully).
One temp array → you can allocate just one global array once and reuse it for all merges.
Cache-friendliness:
With one temp array, elements stay more sequential in memory → sometimes better for CPU caching.




T.C is as we know recursion is getting n/2 each time so n-> n/2 -> n/4 .... so this will be of length O(logn base2) now at each we are doing merge
which at max takes O(n) so overall timecomplexity is O(nlogn)
S.C we are using temp array at each recusrion level which is max of O(n) (as we know memory re allocations happen this space will be reused at each recursion level)
so S.C is O(n).

*/
class Solution {
  mergeSort(nums) {
    let n = nums.length;
    this.mergeSortHelper(nums, 0, n - 1);
    return nums;
  }
  mergeSortHelper(arr, low, high) {
    if (low >= high) {
      return;
    }
    let mid = Math.floor((low + high) / 2);
    this.mergeSortHelper(arr, low, mid);
    this.mergeSortHelper(arr, mid + 1, high);
    this.merge(arr, low, mid, high);
  }
  merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }
}

const main = () => {
  let arr = [9, 4, 7, 6, 3, 1, 5];
  let n = arr.length;

  console.log("Before Sorting Array: ");
  for (let i = 0; i < n; i++) process.stdout.write(arr[i] + " ");
  console.log();

  // Create an instance of the Solution class
  let sol = new Solution();
  // Function call to sort the array
  let sortedArr = sol.mergeSort(arr);

  console.log("After Sorting Array: ");
  for (let i = 0; i < n; i++) process.stdout.write(sortedArr[i] + " ");
  console.log();
};

// Execute the main function
main();
