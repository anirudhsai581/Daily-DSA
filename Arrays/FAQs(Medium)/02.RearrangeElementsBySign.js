/*
Given an integer array nums of even length consisting of an equal number of positive and negative integers.
Return the answer array in such a way that the given conditions are met:
Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Examples:
Input : nums = [2, 4, 5, -1, -3, -4] Output : [2, -1, 4, -3, 5, -4]
Input : nums = [1, -1, -3, -4, 2, 3] Output : [1, -1, 2, -3, 3, -4]
Constraints:
2 <= nums.length <= 105
1 <= | nums[i] | <= 104
nums.length is an even number.
Number of positive and negative numbers are equal.
*/
/*
Bruteforce naive: using res array maintaining pos_idx and neg_idx and iterating array each time for positive index once 
then flip the flag iterate for neg index .we only iterate from last seen postive and last seen negative and immediately
break once our pos or neg is found and increment pos to our current pos+1 and similarly neg we do this n times to fill
res array with n elements 
T.C is O(n*n) ->all positibe numbers travelled once n/2 and neg once n/2 ,outer loop n
overall n*(n/2+n/2); O(n**2), S.C is O(n) to store res array.

*/
function  bruteRerrangeArray(nums) {
        //came up with whole brute force on own
        
       let n= nums.length;
       let res=[]; let pos_idx=0;let neg_idx=0; let flag=true;
       while(res.length<(n)){
        if(flag==true){
            for(let i=pos_idx;i<n;i++){
             if(nums[i]>0){
                res.push(nums[i]);
                pos_idx=i+1;
                flag=false;
                break;
              }
            }
        }
        else{
             for(let i=neg_idx;i<n;i++){
             if(nums[i]<0){
                res.push(nums[i]);
                neg_idx=i+1;
                flag=true;
                break;
              }
            } 
        }
       }
       return res;
    }
/*
BruteForce Better:
i came up with bruterforce better but i thought we should not use extra space to store +ves and -ves and thiking in
swapping elements or maintaining two pointers to store pos and neg in result array , but the pitfall is
i could have used two n/2 arrays for storing + and -ve separately , as anyway for result array im using O(n) space
so my overall space complexity would have been O(n+n)=>O(n).anyway in our above brute we reduce some space but 
time was very costly O(n**2). 

So bruteforce better was to use two n/2 arrays of pos and neg numbers then iterate from 0 to n/2 and push one element
from both the arrays to resulting array ,T.C is O(n) to store original array into subarrays pos and neg ,then O(n/2)
to store pos and neg in single pass into result array ,T.C overall is O(n+n/2) and space complexity is O(n/2+n/2+n)
=> O(n) .

*/
function bruteBetterRearrangeArray(nums) {
        let n=nums.length;
    let pos=[];let neg=[]; let res=[];
    for(let i=0;i<n;i++){
        if(nums[i]>0){
            pos.push(nums[i]);
        }
        else{
            neg.push(nums[i]);
        }
    }
    for(let i=0;i<n/2;i++){
        res.push(pos[i]);
        res.push(neg[i]);
    }
    return res;
    }

/*
Optimal:
In optimal we will  try to reduce bruter better O(2n) space to O(n) and O(2n) time to O(n),
as we know in result array every even index will have positve num and every odd index will have neg number.
while iterating over original array if we encounter positive we store it in next even index and if negative next odd
index.
T.C is O(n), S.C is O(n)(result array storage)
*/
function  OptimalRearrangeArray(nums) {
        let n=nums.length;
         let res=[];
    let pos_idx=0;let neg_idx=1;
    for(let i=0;i<n;i++){
        if(nums[i]>0){
           res[pos_idx]=nums[i];
           pos_idx=pos_idx+2;
        }
        else{
            res[neg_idx]=nums[i];
            neg_idx=neg_idx+2;
        }
    }
    return res;
    }
let nums=[1, -1, -3, -4, 2, 3]
console.log(bruteRerrangeArray(nums));
console.log(bruteBetterRearrangeArray(nums));
console.log(OptimalRearrangeArray(nums));