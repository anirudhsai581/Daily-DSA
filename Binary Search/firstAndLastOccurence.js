/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].
Input: nums = [5, 7, 7, 8, 8, 10], target = 8 Output: [3, 4]
Constraints:
  0 <= nums.length <= 105**
  -10**9 <= nums[i] <= 10**9
  nums is a non-decreasing array.
  -10**9 <= target <= 10**9
*/
//brute force will be to initialise first with -1 and also have last -1 if we found target and first is -1 then only we update first but we keep updating last so by end of loop traversal we will have first and last correct values. T.C is O(n).
/*
we cannot find first and last occurence with single binary search loop in O(logn),as we are doing opposite things once a target is found.so we do two binary searches. 
for first occurence in the classic binary search we find the target first , once we know the target we check if element is first index then directly we can return (or we can keep this check at beginning of code to check only once) if its not first index and if previous element is diff from this then we know this is the first occurence,so we keep moving to left half untill this matches. so (high=mid-1). 
for last occurence same as first occurence, once target is found we check if its last element of array(for not checking out of bounds)(this check too we can push to start to check only once, left here for more readibility )now we check if next element is diff if yes we stop that is the last occurence ,if not we keep moving search space to right halfs, by low=mid+1.
T.C is O(logn)+O(logn)=>O(2logn)=>O(logn).  S.C is O(1)
//instead of checking previous element and stopping precisely ,we can just update first occurence everytime with mid and keep moving search space left ,this will automatically ensure first will have first occurence , but this way we are updating first multiple times. Instead of precisly stopping once found.where as our approach has more checks when target occurence is found but less writes to first variable. not much difference.

*/

function searchRange(nums, target) {
       let n=nums.length; let low=0;let high=n-1;
        let first=-1; let last=-1;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            if(nums[mid]==target){
                if((mid==0)||(nums[mid-1]!==nums[mid])){
                    first=mid;
                }
                high=mid-1;
             }
            else if(nums[mid]>target){
                high=mid-1
            }
            else{
                low=mid+1;
            } 
        }
        if(first==-1) return [-1,-1];
        low=first;high=n-1;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            if(nums[mid]==target){
                if((mid==n-1)||(nums[mid+1]!==nums[mid])){
                    last=mid;
                   return[first,last];
                }
                low=mid+1;
             }
            else if(nums[mid]>target){
                high=mid-1
            }
            else{
                low=mid+1;
            } 
            
        }
        
        return[first,last];
    }
let nums = [5, 7, 7, 8, 8, 10];let target=8;
console.log(searchRange(nums,target));
