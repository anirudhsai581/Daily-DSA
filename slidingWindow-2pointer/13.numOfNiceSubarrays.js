/*
Given an array nums and an integer k. An array is called nice if and only if it contains k odd numbers. Find the number of nice subarrays in the given array nums.
A subarray is continuous part of the array.
Input : nums = [1, 1, 2, 1, 1] , k = 3  Output : 2
Input : nums = [4, 8, 2] , k = 1 Output : 0
Input : nums = [41, 3, 5] , k = 2 Output:2
Constraints:
1 <= nums.length <= 5*104
1 <= nums[i] <= 105
1 <= k <= nums.length
*/

/* bruteforece generate all the substrings and check wherever nums[j]%2 ==1 increase count and once it equal k till it becomes >k increase count and then break ,then continue for all substrings starting with next i.

*/
 function numberOfOddSubarrays(nums, k) {
        //your code goes here
        let n=nums.length; let count; let ans=0
        for(let i=0;i<n;i++){
            count=0;
            for(let j=i;j<n;j++){
               if(nums[j]%2==1){
                count++;
               }
               if(count==k){
                ans++;
               }
               if(count>k){
                break;
               }
            }
        }
        return ans;
    }

  let nums=  [1, 1, 2, 1, 1] ;let k=3;
console.log(numberOfOddSubarrays(nums,k));



/*  we use sliding window so first we check for valid window when count ==k, now once we found valid window we check count of all subarrays till this r(this count can be checked as we know if we have even numbers at beginning of our window then we remove them or not doesnot influence count , so we can form subarrays if we count how many evens are there at beginning of window till we reach an odd number which can not be removed for counting of subarrays .)
//The key logic is when counting subarrays for validwindow ,we just count number of even's at beginning of window we dont remove them and move l, as the even's are required for suppose we move r and its even so these starting even's contribute to sub array count till the latest r.
then we increase r and if count exceeds k we shrink (i.e move l to right when l is odd we decrease count and stop moving l) and now again count==k so again check all subarrays till this r with latest l.
*/
function optimalNumberOfOddSubarrays(nums,k){
     
    let l = 0;
    let r = 0;
    let n = nums.length;
    let count = 0;
    let total = 0;
    while (r < n) {
      if (nums[r] % 2 == 1) {
        count++;
      }
       while (count > k) {
        if (nums[l] % 2 == 1) {
          count--;
        }
        l++;
      }

      if (count == k) {
        let temp = l;
        let even = 0;
        while ((nums[temp] % 2 == 0)  &&(temp<r)) {
          even++
          temp++;
        
        }
          total += (even + 1);
      }
     
       r++;
    }
    return total;
  }
console.log(optimalNumberOfOddSubarrays(nums,k));