/*
Given a sorted array nums and an integer x. Find the floor and ceil of x in nums. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x. If no floor or ceil exists, output -1.
Input : nums =[3, 4, 4, 7, 8, 10], x= 5 Output: 4 7
Input : nums =[3, 4, 4, 7, 8, 10], x= 8 Output: 8 8
Constraints:
  1 <= nums.length <= 10**5 
  0 < nums[i], x < 10**5 
  nums is sorted in ascending order.
*/
//bruteforce: traverse whole array and store floor if nums[i]<=x, ceil if nums[i]>=x find if its greater than previous ceil then only update,if nums[i]==x return [nums[i],nums[i]],
//optimal:binary search low and high pointers for search space, find mid, if its equal then  return immediately,if its not if nums[mid]>x we search left to find floor which is less than or equal to x and also to find smallest ceil. if nums[mid]<x then we go right to find ceil and largest floor.

//T.C is O(logn) ,S.C is O(1).(extra space used )
 function getFloorAndCeil(nums, x) {
        let floor=-1 ;let ceil=-1;
        let low=0,high=nums.length-1;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            if(nums[mid]==x){
                return[nums[mid],nums[mid]];
            }
            else if (nums[mid]<x){
                floor=nums[mid];
                low=mid+1;
            }
            else {
                high=mid-1;
                ceil=nums[mid];

            }
        }
       
        return [floor , ceil];
    }
let nums=[3, 4, 4, 7, 8, 10];let x=5;
console.log(getFloorAndCeil(nums,x));