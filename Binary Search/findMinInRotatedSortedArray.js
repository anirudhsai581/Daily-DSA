/*
Given an integer array nums of size N, sorted in ascending order with distinct values, and then rotated an unknown number of times (between 1 and N), find the minimum element in the array.
Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]  Output: 0
Input : nums = [4, 5, 6, 7, -7, 1, 2, 3] Output: -7
Constraints:
n == nums.length
 1 <= n <= 10**4
 -10**4 <= nums[i] <= 10**4
 All the integers of nums are unique.
 nums is sorted and rotated between 1 and n times.
*/


//bruteforce: find min in an array linear traversal
//optimal:using binary search , we know that after rotation one half will be sorted and other half will be not sorted like if we have 4567123 we consider 4567 sorted and 7123 not sorted ,as 7>1 (ascending array), so what we do is we find which side is sorted by comapring mid with low and high if arr[low]<= mid ,left is sorted half else directly right is sorted half, once sorted half is found , we know if left is sorted half its min value will be arr[low], we check with our current min and update min and remove that half from search space by doing low=mid+1,similarly if right is sorted half we know min will be arr[mid] we update min by checking min(min,arr[mid]) and then remove right sorted half from search space by doing high =mid-1;
//T.C is O(logn).
function findMin(arr) {
       let n=arr.length; let low=0;let high=n-1;
       let min=Infinity;
       while(low<=high){
           let mid =Math.floor((low+high)/2);
           if (arr[low]<=arr[high]) {
            min=Math.min(min,arr[low]); break;}//early exist if are having sorted array (this happens when suppose we have subarray like 0 1 2 3)here both halfs are sorted instead of moving one side we can stop here.
           //also technically that happens when we crossed pivot on which rotation happened, 
         // extra info when we will have sorted array (not required for this problem):like we have 1234567 initially if pivot was 5(or index 4)
         // 5671234 once our search space crosses pivot index either side will be sorted array
           //left half is sorted
           if(arr[mid]>=arr[low]){
             min=Math.min(min,arr[low]);
             low=mid+1;
           }
           //right half sorted
           else {
            min=Math.min(min,arr[mid]);
            high=mid-1;
           }
       }
       return min;
    }
let arr=[4, 5, 6, 7, 0, 1, 2, 3]
console.log(findMin(arr));


