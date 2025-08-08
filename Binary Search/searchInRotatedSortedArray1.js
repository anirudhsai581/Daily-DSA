/*
Given an integer array nums, sorted in ascending order (with distinct values) and a target value k. The array is rotated at some pivot point that is unknown. Find the index at which k is present and if k is not present return -1.
Input : nums = [4, 5, 6, 7, 0, 1, 2], k = 0 Output: 4
Input: nums = [4, 5, 6, 7, 0, 1, 2], k = 3 Output: -1
Constraints:
  1 <= nums.length <= 10**4
  -10**4 <= nums[i] <= 10**4
  All values of nums are unique.
  nums is an ascending array that is possibly rotated.
  -10**4 <= k <= 10**4
*/

//brute force:linear search O(n)

//Optimal : Binary search as array is sorted, now by observation we know that when we are at mid ,one half is sorted and other is not , left will be sorted if arr[low]<=arr[mid] and right will be sorted half if arr[mid]<=arr[high].so by this we can figure out which half is sorted . then we check if target is present in this sorted array, we can check it by comparing with either ends of sorted array. (if this was not the sorted half we would not be surely knowing so we found out sorted half first). 
// so if left is sorted half : if we arr[low]<=target<arr[mid] we will know its in this left half. we do high=mid-1 else its in right half we do low=mid+1.
//if right is sorted half: if we check arr[mid]<target and target <=arr[high],we will will know its in this right half so we do low=mid+1 else high=mid-1.
//if its at arr[mid]:arr[mid]==target return 


function search(nums, k) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] == k) {
        return mid;
      } else if (nums[mid] >= nums[low]) {
        //nums[mid]>nums[low] will fail as when we have less elements like 1,2 in left half array
        //then both can be equal ,
        //left array sorted so checking if target is in this range
        if (nums[mid] > k && nums[low] <= k) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        //right half sorted so checking if target is in this range
        if (nums[mid] < k && nums[high] >= k) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }
    return -1;
  }
  let nums=[4, 5, 6, 7, 0, 1, 2],k1=7;k2=0;k3=5;


  console.log(search(nums,k1));
  
  console.log(search(nums,k2));
  
  console.log(search(nums,k3));