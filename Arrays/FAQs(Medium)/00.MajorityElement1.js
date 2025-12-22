/* Given an integer array nums of size n, return the majority element of the array.
The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.
Example 1
Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
Output: 7
Example 2
Input: nums = [1, 1, 1, 2, 1, 2]
Output: 1

 */
/* 
Brute: use a hash map store frequencies of all the elements. traverse through the hash map find the largest 
T.C is O(n+n), S.C O(n).
Better: Sort the array then the middle element must be the majority element if exists(qn gurantees it exists)
T.C is O(nlogn) SC:O(1)
Optimal: Using boore moyers algorithm(voting) Idea: Cancellation of majority element and non majority elements in pairs will make the majority one 
leading at the end. so Iterate a loop, maintain a count of an element along with element , whenever there is a diff element decrease the count, and once the count 
reaches 0 then make the element where it became 0 as next majority prospect, and count=1 ,and continue the iteration , at the end majority element will be the value of the ele.
(as majority will win out of cancellation strategy)
T.C is O(n) , S.C is O(1)
*/

/* Better:Sort and middle value
    class Solution {
    majorityElement(nums) {
        let n=nums.length;
        nums.sort((a,b)=>a-b);
       return nums[Math.floor(n/2)]; 
    }
} */
/* Optimal: Boyer moore Algorithm (voting and cancellation*/
class Solution {
  majorityElement(nums) {
    let n = nums.length;
    let ele = nums[0];
    let count = 1;
    for (let i = 1; i < n; i++) {
      if (nums[i] === ele) {
        count++;
      } else {
        count--;
      }
      if (count === 0) {
        ele = nums[i];
        count = 1;
      }
    }
    return ele;
  }
}
function main() {
  let arr = [2, 2, 1, 1, 1, 2, 2];

  // Create an instance of Solution class
  let sol = new Solution();

  let ans = sol.majorityElement(arr);

  // Print the majority element found
  console.log("The majority element is:", ans);
}

// Execute the main function
main();
