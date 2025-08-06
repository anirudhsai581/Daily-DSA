/*
Given a sorted array of integers nums with 0-based indexing, find the index of a specified target integer. If the target is found in the array, return its index. If the target is not found, return -1.
Input: nums = [-1,0,3,5,9,12], target = 9 Output: 4;
Input: nums = [-1,0,3,5,9,12], target = 2 Output: -1
*/
//We use Bianry search here as array is sorted, we mark the search space(initially whole array) with left pointer(low=starting index (0)) and right pointer(high=length-1) , find mid element  if its greater than target reduce search space to left half, if element at mid index is less than target reduce search space to right half.if target matched return mid.Do this repeatedly stop when  low>high,return -1 if still not found.

//Time complexity O(logn) as at each time we are reducing the size by half,repeatedly so logn base 2 number of times we repeat (if number of elements search space reduces to 1 or less we stop.)
// as we know recursion tree where n is reducing n/2 then next step will be n/2**2 ,n/2**3.... till n/2**(k-1),we know at end in worst case our problem will have search space as one element(low=high) after that we stop, so approximately n/2**(k-1) will be 1 so k approx log n base 2. O(logn) time complexity.

//  Space Complexity:O(1) for iterative no extra space used other than 2 variables etc , 
// SC :O(logn) for recursive approach will have logn recursive calls in call stack.
//Iterative

 function search(nums, target) {
       let low=0;let high=nums.length-1;
       while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
       }
       return -1;
    }
let nums=[-1,0,3,5,9,12];let target=9;
console.log(search(nums,target));

//recursive Binary search
 function recBinary(nums,target,low,high){
        if(low>high){
            return -1;
        }
        let mid=Math.floor((low+high)/2);
          if(nums[mid]==target){
            return mid;
          }
          else if(nums[mid]>target){
               return recBinary(nums,target,low,mid-1);
          }
          else{
            return recBinary(nums,target,mid+1,high);
          }
       }
       console.log(recBinary(nums,target,0,nums.length-1));
