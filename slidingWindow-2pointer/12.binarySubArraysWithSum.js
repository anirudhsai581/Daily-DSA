/*
Given a binary array nums and an integer goal. Return the number of non-empty subarrays with a sum goal.
A subarray is a continuous part of the array.
Input : nums = [1, 1, 0, 1, 0, 0, 1] , goal = 3
Output : 4
Constraints:
1 <= nums.length <= 3*104
0 <= goal <= nums.length
nums consist of only 0 and 1.
*/

//brute check all substrings and increase ans count wherever the condition is satisfied 

function bruteSubarraysWithSum(nums, goal) {
        //your code goes here
        let count=0;let arr=[];
        let n=nums.length;let ans=0;
        for(let i=0;i<n;i++){
          count=0;
          for(let j=i;j<n;j++){
            count+=nums[j];
            if(count==goal){
              ans++;
            }
          }
        }
        return ans;
    }

    /* we find count of subarrays with sum<= goal and then we find count of subarrays with sum <=goal-1 now if we substract these we know we get the count of subarrays thats exactly the goal.so we calcualte the subarrays less than equal to goal with another function , there if goal is less than 0 we return 0.(if qn goal is 0 then we are doing goal-1 so we return 0 for such case)
    now the logic of finding all the subarrays with sum<=goal is so we take nums[r] if adding it to sum is still holds the condition sum<=goal; then we consider the all the combinations of current window ending with this number 'r' which is r-l+1, all these subarrays are valid, then we move r by one and check all the subarrays ending with this new 'r' in current window which will be r itslef and r and its previous element and r its previous and its previous previous and so on until l , total of these(r-l+1).
    once we reach sum>goal we shrink the window till count is reduced and then again we expand .
    */

    function optimalSubarraysWithSum(nums,goal){
        
        //your code goes here
        let n=nums.length; 
        function countLessthanEqualGoal(nums,goal){
            if(goal<0){return 0};
            let l=0;let r=0;let sum=0;
        let ansCount=0;
        while(r<n){
            
                sum+=nums[r];
            while(sum>goal){
                if(nums[l]==1){
                    sum--;
                }
                l++;
            }
            ansCount+=r-l+1;
                r++; 
        }
        return ansCount;
        }

        return countLessthanEqualGoal(nums,goal)-countLessthanEqualGoal(nums,goal-1);
        
    }
    

    let nums=[1, 1, 0, 1, 0, 0, 1];
    let goal=3;
    console.log(bruteSubarraysWithSum(nums,goal));
    console.log(optimalSubarraysWithSum(nums,goal));