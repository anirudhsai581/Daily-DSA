/*
Given an integer array nums, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False.
Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3 Output: True
Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10 Output: False
Constraints:
  1 <= nums.length <= 10**4
  -10**4 <= nums[i] <= 10**4
  nums is guaranteed to be rotated at some pivot.
  -10**4 <= k <= 104
*/

//BruteForce:search all the elements in array and return true once element is found O(n);

//Optimal: DO the same logic as searching in rotated sorted array using Binary search . But this time since we have duplicates we need to add extra logic to handle duplicates and by observation we can still find which half is sorted array even if we have duplicates except when the duplicates are present at arr[low],arr[mid],arr[high] like : [3,3,3,3,3,1,2,2,2,3], here arr[low]==arr[mid]==arr[high] so our logic to find which half is sorted is not enough like previous question ,so for these cases we are have to compare low+1 and high-1 with mid ,if they are different we know that side is not sorted and other side is sorted(with all values equal), but we cannot simply check low+1 and high-1 with mid and be sure,as they can also be same with mid like [1,1,1,1,1,1,1,2,1,1,1] like this example we can have repetetions of ends with mid multiple levels so we just have to linearly increase low and high till we find a point where all three of low mid and high are not same so we do low+1 and high-1 each time until all three are not same.In worst case like if our target is not present in array then we end up doing (n/2) iterations . this is necessary as we wont know which half is sorted until that condition meets .

//Time Complexity: on avg O(logn),O(n/2) in worst case.
// ***************************start :Logic to search an element in rotated search array is : 
// Binary search as array is sorted, now by observation we know that when we are at mid ,one half is sorted and other is not , left will be sorted if arr[low]<=arr[mid] and right will be sorted half if arr[mid]<=arr[high].so by this we can figure out which half is sorted . then we check if target is present in this sorted array, we can check it by comparing with either ends of sorted array. (if this was not the sorted half we would not be surely knowing so we found out sorted half first).

// so if left is sorted half (arr[low]<=arr[mid]): if we arr[low]<=target<arr[mid] we will know its in this left half. we do high=mid-1 else its in right half we do low=mid+1.
//if right is sorted half: if we check arr[mid]<target and target <=arr[high],we will will know its in this right half so we do low=mid+1 else high=mid-1.
//if its at arr[mid]:arr[mid]==target return ) ********************************End.

function searchInARotatedSortedArrayII(nums, k) {
        let n=nums.length;
       let low=0;let high=n-1;
       while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==k){
            return true;
        }
        //handle duplicates in array.
        if((nums[low]==nums[mid])&&(nums[mid]==nums[high])){
            low=low+1;high=high-1;
        }
        //left half sorted
        else if((nums[low]<=nums[mid])){
           if((nums[low]<=k)&&(k<=nums[mid])){
             high=mid-1;
           }
           else{
            low=mid+1;
           }
        }
        //right half sorted
        else{
            if((nums[mid]<=k)&&(k<=nums[high])){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
       }
       return false; 
    }

    let nums=[7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k1 = 3 ,k2=10
   console.log(searchInARotatedSortedArrayII(nums,k1));
console.log(searchInARotatedSortedArrayII(nums,k2));
