/*Given a sorted array of nums and an integer x, write a program to find the upper bound of x.
The upper bound algorithm finds the first and smallest index in a sorted array where the value at that index is greater than a given key i.e. x.
If no such index is found, return the size of the array.
Input : n= 4, nums = [1,2,2,3], x = 2
Constraints:
  1 <= nums.length <= 10**5
  -10**5 < nums[i], x < 10**5
  nums is sorted in ascending order.
*/
//Bruteforce 1:will be to taverse linearly from left and stop at first number greater than x and return index O(n) 
// Bruteforce2:also using binary search find the first number greater than x then traverse left from there until we find a number smaller than or equal to x or reach 0 index , this will still take O(n) in worst case, as once we find a number bigger we are traversing linearly till 0 index , it can be a case like all the numberse in are greater than x and we will end up till 0.
//Optimal : use binary search completely and store the smallest index where it is greater than x.  T.C :O(logn)
function upperBound(nums, x) {
      let low=0,high=nums.length-1;let ans=nums.length;
      while(low<=high){
         let mid=Math.floor((low+high)/2);
        if(nums[mid]==x){
          low=mid+1;
        }
        else if(nums[mid]<x){
          low=mid+1;
        }
        else{
          ans=mid;
          high=mid-1;
        }
      }
      return ans;
    }

    let nums=[3,5,8,15,19], x=9;
    console.log(upperBound(nums,x));