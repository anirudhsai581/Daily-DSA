/*
Given a binary array nums and an integer k, flip at most k 0's.
Return the maximum number of consecutive 1's after performing the flipping operation.
Input : nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0] , k = 3
Output : 10
Input : nums = [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1] , k = 3
Output : 9
*/


/*
we are using sliding window, taking a count variable to keep track of 0's that we can flip.as long as either we get 1 or count is less than k we are good and proceed.
if we reach 0 and count value is k, then we cannot flip anymore and we shrink the window , removing left most (i.e l and then if we removed 0 we increase count by 1);
when we are shrinking in else block we wont update r there as we go to else loop when we have encountered 0 and unable to flip , if we increase r we move to next num skipping the current nums[r](which is 0) check , so to not skip we have r++ only in if block.



*/
 function maxConsecutiveOnes(nums, k) {
        //your code goes here
        let n=nums.length;
        let l=0;let r=0; let maxLen=0;
        let count=0;
        while(r<n){   
          if((nums[r]==1)||count<k){
           maxLen=Math.max(maxLen,r-l+1);
           if((nums[r]==0)){
                count++;    
           }
           r++;
          }
          else{
            if(nums[l]==0){
                count--;
            }
            l=l+1;
         
          }
         
          
        }
        return maxLen;
    }

    let nums=[0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1];
    let k=3;
    console.log(maxConsecutiveOnes(nums,k));