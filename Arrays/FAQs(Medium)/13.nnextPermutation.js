/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integers.
More formally, if all the permutations of the array are sorted in lexicographical order, then the next permutation of that array is the permutation
 that follows it in the sorted order.
If such arrangement is not possible (i.e., the array is the last permutation), then rearrange it to the lowest possible order (i.e., sorted in 
ascending order).
You must rearrange the numbers in-place and use only constant extra memory.
Input: nums = [1,2,3]
Output: [1,3,2]
Input: nums = [3,2,1]
Output: [1,2,3]
Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 100

NOTE: TAKE AN EXAMPLE WITH BIGGER LENGTH TO NOTICE THE PATTERN
ex: 12438632
*/
/*
Brute force is:to generate all possible permutations ,sort them ,then iterate and find the given array match ,now return the next one.
we can use recursion to generate all ,we know if there are 3 numbers [1,2,3] there will be 3! permutations,similarly we have to generate n! permutations and for each lemgth is 'n' 
so approx time complexity will be somewhere around n!*n to generate all(estimated with analysis,as we can just mention this approach in interview not
actually implement ),S.C is O(n*n!) to store all permutations and recursive call stack space of O(n)
*/
/*
Brute code copied from editor:


class Solution {

    // Function to get the next permutation of given array
    nextPermutation(nums) {
        // Get all the Permutations
        const ans = this.getAllPermutations(nums);

        let index = -1; // Current permutation index

         Perform a linear search to get the
        permutation of current permutation 
        for (let i = 0; i < ans.length; i++) {
            if (this.arraysEqual(nums, ans[i])) {
                index = i;
                break;
            }
        }

        // Store the next permutation in-place
        const next = (index === ans.length - 1) ? ans[0] : ans[index + 1];
        for (let i = 0; i < nums.length; i++) {
            nums[i] = next[i];
        }

        return;
    }

    /* Function to generate all permutations of 
    the given array in sorted order */
    /*
    getAllPermutations(nums) {
        const ans = []; // To store the permutation

        // Recursive Helper function call 
        this.helperFunc(0, nums, ans);

        ans.sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
            }
            return 0;
        });

        return ans; // Return the result
    }

    // Helper function to get all the permutations of the given array
    helperFunc(ind, nums, ans) {

        // Base case
        if (ind === nums.length) {
            // Add the permutation to the answer
            ans.push([...nums]);
            return;
        }

        // Traverse the array
        for (let i = ind; i < nums.length; i++) {
            [nums[ind], nums[i]] = [nums[i], nums[ind]]; // Swap-In

            // Recursively call the helper function
            this.helperFunc(ind + 1, nums, ans);

            [nums[ind], nums[i]] = [nums[i], nums[ind]]; // Swap-Out
        }

        return;
    }

    // Function to match two arrays
    arraysEqual(a, b) {
        return a.length === b.length && a.every((val, i) => val === b[i]);
    }
}

// Main Function
const nums = [1, 2, 3];

/* Creating an instance of 
Solution class
const sol = new Solution();

// Output
process.stdout.write("Given array: ");
nums.forEach(x => process.stdout.write(x + " "));

// Function call to get the next permutation of given array
sol.nextPermutation(nums);

// Output
process.stdout.write("\nNext Permutation: ");
nums.forEach(x => process.stdout.write(x + " "));




*/
/*
Optimal: when i saw the pattern for next permutation like manually how we determine the next pattern is we see where the point after which everything is decreasing order
so we take that point and find just next bigger than that in rem array and keep it in this place and all the next number we arrange in ascending order.
so same we have to translate to code,1.identify pivot from end where next num is bigger than it , then find immediately next bigger element to its right
to do this we can observe all the next numbers to pivot are in decreasing order so iterate from n-1 and check first element greater than nums[pivot] 
now exchange that value with pivot and to right of it all should be sorted to ascending order, if we observe all to right is in decreasing order even after exchange this means
we just have to reverse to sort them. if there was no pivot it means whole array is reverse sorted , so reverse it to find the first permutation.
T.C is O(n) for finding pivot +O(n) to reverse the array+O(n) to find next idx of element greater than pivot. Overall : O(n)
S.C is O(1).
*/
class Solution {
  nextPermutation(nums) {
    //solved on own
    let n = nums.length;
    let pivot = -1;
    let idx = -1;
    for (let i = n - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        pivot = i - 1;
        break;
      }
    }
    if (pivot == -1) {
      return nums.reverse();
    }
    for (let i = n - 1; i > pivot; i--) {
      if (nums[i] > nums[pivot]) {
        idx = i;
        break;
      }
    }
    [nums[pivot], nums[idx]] = [nums[idx], nums[pivot]];

    return this.reverse(nums, pivot + 1, n - 1);
  }

  reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++, end--;
    }
    return arr;
  }
}
const nums = [1, 2, 3];
const sol = new Solution();
console.log(sol.nextPermutation(nums));//[1,3,2]