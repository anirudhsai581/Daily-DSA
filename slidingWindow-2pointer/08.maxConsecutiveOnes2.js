
/*
Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.
Input: nums = [1,0,1,1,0]
Output: 4
Constraints:
1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
*/










/*
we are using sliding window, taking a count variable to keep track of 0's that we can flip.as long as either we get 1 or count is less than k(k=2) we are good and proceed.
if we reach 0 and count value is k(k=2), then we cannot flip anymore and we shrink the window , removing left most (i.e l and then if we removed 0 we increase count by 1);
*/
function findMaxConsecutiveOnes(nums){
    let n=nums.length;
        let l=0; let r=0; let maxLen=0;let count=0;
        while(r<n){
            if((nums[r]==1)||(count<1)){
                maxLen=Math.max(maxLen,r-l+1);
                if(nums[r]==0){
                    count++;
                }
                r++;
            }
            else{
                if(nums[l]==0){
                    count--;
                }
                l++;
            }
        }
        return maxLen;
}
let arr=[1,0,1,1,0,1];
console.log(findMaxConsecutiveOnes(arr))

