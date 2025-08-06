/*
Given a sorted array of nums and an integer x, write a program to find the lower bound of x.
The lower bound algorithm finds the first and smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
If no such index is found, return the size of the array.
Input : nums= [1,2,2,3], x = 2 Output:1
nput : nums= [3,5,8,15,19], x = 9 Output: 3
Constraints: 1 <= nums.length <= 10**5
  -10**5 < nums[i], x < 10**5
  nums is sorted in ascending order.
*/
// use binary search , if our mid is >= (lower bound) we then check if it is the smallest index of such case, by checking if its index is 0 if not element before it is lesser than x, so that we can be sure this is the smallest . if element before it is not smaller we reduce the search space to till mid-1(by making high=mid-1).
//if our mid has value less than x we move search to right as we want more than equal to . So we have covered all cases arr[mid>=x] and arr[mid<x], if still dont find it when search space is reduced to 0(low>high) then we return length of array as specified in the problem.

//Time complexity : O(logn) , as we are using only binary search modification 
function lowerBound(nums, x) {
      let low=0;let high=nums.length-1;
      while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]>=x){
            if(mid==0){
                return 0;
            }
            if(nums[mid-1]<x){
            return mid;
            }
            else{
                high=mid-1;
            }
        }
        else if(nums[mid]<x){
            low=mid+1;
        }
      }
      return nums.length;
    }
let nums=[3,5,8,15,19] ,x=9;
console.log(lowerBound(nums,x));

//we can also use an answer variable and initiate ans to length of array if arr[mid]>=x then we store mid in ans , which could be probable answer, then we reduce search space to low to ans-1; and continue till low>high we return ans variable, this approach is faster despite not doing early exit like above approach where left neighbour is less we exit, because we have less branching in if , we check less conditions each time (nums[mid-1]<x).cleaner to read and direct classic binary search without extra checks.
function lowerBound2(nums, x){
    let ans=nums.length;let low=0 ; let high=nums.length-1;
   
    while(low<=high){
      let mid =Math.floor((low+high)/2) ;    
      if(nums[mid]>=x){
         ans=mid;
         high=mid-1;
       }
       else {
        low=mid+1;
       }
    }
   return ans;
}
console.log(lowerBound2(nums,x));
