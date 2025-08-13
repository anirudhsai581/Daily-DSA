/*
Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique
element appears only once. Return the number of unique elements in the array.
If the number of unique elements be k, then,Change the array nums such that the first k elements of nums contain 
the unique values in the order that they were present originally.
The remaining elements, as well as the size of the array does not matter in terms of correctness.
An array sorted in non-decreasing order is an array where every element to the right of an element is either 
equal to or greater in value than that element.

Input: nums = [0, 0, 3, 3, 5, 6] Output: 4  Explanation: Resulting array = [0, 3, 5, 6, _, _]
Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5] Output: 4 Explanation: Resulting array = [-2, 2, 4, 5, _, _, _, _]
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

Bruteforce: To use set data structure ,insert all elements into set , it will only accept unique elements, then retrieve
all elements and place in the array from index 0 till set is empty, the last index where we inserted+1 will be the total 
number of elements inserted(0 based indexing)so that many unique elements count .Rest of the array will be filled with 
duplicates which we dont care anyway.
T.C is : For insertion into set is O(N) for traversal of arr, each element insertion is O(1))
if K unique elements ,we can get K by set.size then O(K) to insert set elements back to array 
K can be upto N in worst case , so O(N)+O(N) overall O(N)
S.C is O(K),worst case O(N) when all are Unique set needs N space.
  // Function to remove duplicates from the array
   function removeDuplicates(nums) {
        // Set data structure to store unique elements
        let s = new Set();
        // Add all elements from array to the set
        for (let val of nums) {
            s.add(val);
        }
        // Get the number of unique elements
        let k = s.size;
        let j = 0;
        // Copy unique elements from set to array
        for (let val of s) {
            nums[j++] = val;
        }
        // Return the number of unique elements
        return k;
    }
*/
/*optimal: we keep track of count variable which tracks the count of placing the non duplicate value, its basically
travelling the same array again and storing numbers like we always maintain non duplicate values till count index and 
our initial loop lets say we start i at 1 and count lets initialise to 1, so our count index will not move when 
duplicate is present we always store next unique element found in iteration at index i , at the count, we just keep on 
moving i and we store all unique values one by one with track of count index by swaps by end of i reaching n ,we have
stored all unique at the count duplicates gets pushed to end by swaps
T.C : O(n), S.C is O(1) (we have done inplace as mentioned)

//essentially this is like a two pointer approach one pointer for iterating and another pointer pointing to till where 
current unique elements are present where next unique element to be updated.
Difficulty:Easy.
*/
function  removeDuplicates(nums) {
     //complete solved on own idea came from previous 
      //moving zeroes to end problem experience.
       let count=1; let a=null;
       let n=nums.length;let dup=0;
         a=nums[0];
       for(let i=1;i<n;i++){
        if(nums[i]!=a){
            a=nums[i];
            [nums[count],nums[i]]=[nums[i],nums[count]];
            count++;
       }
    } 
    return count;
}
//by end count will have no.of unique elements also.
let nums=[0, 0, 3, 3, 5, 6];
console.log(removeDuplicates(nums));//4