/*
Given a binary array nums, return the maximum number of consecutive 1s in the array.
A binary array is an array that contains only 0s and 1s.
Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
Output: 3
Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

//just find max length by increasing r (window) till 0 is occured then move l to right of that 0 (basically r+1 at that point).

function findMaxConsecutiveOnes(nums) {
        let n=nums.length;
       let l=0; let r=0; let maxLen=0 ; 
       while(r<n){
        if(nums[r]==1){
            maxLen=Math.max(maxLen,r-l+1);
            r++;
        }
        else{
            l=r+1;
            r++;
        }
       }
       return maxLen;
    }
let arr= [1, 1, 0, 0, 1, 1, 1, 0];
    console.log(findMaxConsecutiveOnes(arr));