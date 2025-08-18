/*
Note: //check page ending for kadane's algo follow up: to print the subarray that has max sum
Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [2, 3, 5, -2, 7, -4] Output: 15
Input: nums = [-2, -3, -7, -2, -10, -4] Output: -2
Constraints:
1 <= nums.length <= 10**5
-10**4 <= nums[i] <= 10**4


Brute force: find all possible subarray sums and store the max of all 
T.C is O(n**2),S.C is O(1).
function maxSubArray(nums) {
        let n=nums.length;
      let sum=0;let max=-Infinity;
      for(let i=0;i<n;i++){
         sum=nums[i];
         max=Math.max(sum,max);
        for(let j=i+1;j<n;j++){
            sum+=nums[j];
            max=Math.max(sum,max);
        }
      }
      return max;
    }
*/

/*
kadane's algo(optimal 1): The idea is to have a currSum and maxSum , currSum will check at each element if currSum is bigger or currSum+nums[i] is bigger
if currSum+nums[i] is bigger it means our subarray can extend to include nums[i] and if not we update currSum to nums[i] this means our Subarray is
starting fresh now from nums[i], if nums[i] is bigger than all previous sum and we already store at every point the max sum till then in maxSum, so we
can safely discard the current subarray and start fresh with nums[i] as our currSum with nums[i] alone is bigger than having previous sum, so we check 
for each element again trying to increase the current sum.

T.C is O(n), S.C is O(1).
*/
function KadaneMaxSubarraySumKadane(arr) {
    let currSum=0;let maxSum=-Infinity;
       for(let i=0;i<n;i++){
          currSum=Math.max(nums[i],currSum+nums[i]);
          maxSum=Math.max(currSum,maxSum);
       }
       return maxSum; 
    }
/*
prefix sum way (optimal 2): this does the same thing as kadane's but a different approach , indirectly both does the same we will compare at end
so the logic is , prefix sum means sum till that point, prefix[i] is sum of all elements from 0 to arr[i].lets first see if we want a sum of 
subarray [L to R] we can get by Prefix[R]-prefix[L-1]. This means taking the sum of all elements till R then substracting the sum of elements before L
will obviously give us Sum from element L to R. so we can write it as  Sum of Subarray[L,R] is prefix(R)-prefix(L-1).Now  we want a subarray with max sum 
means  Prefix(R)-prefix(L-1) should be max. so if we want a Subarray ending at R to be max we want an L such that prefix(L-1) should be least.
With this logic for every element while traversing array we treat it as R and check the min possible prefix till before this element ,as subarray 
ending at R should have atleast one element so we can take L till R , so we always keep track of min prefix till before R, and substract with prefix(R)
find best possible sum of  subarray ending at R, and keep track of it with maxSum,  move forward before that we update minprefix with comparision of curr prefix too.


*/
function PrefixMethodMaxSubarraySum(arr) {
  let prefix = 0;          // running prefix sum
  let minPrefix = 0;       // minimum prefix seen so far
  let maxSum = -Infinity;  // answer

  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];                        // update prefix sum
    maxSum = Math.max(maxSum, prefix - minPrefix); // best subarray ending here
    minPrefix = Math.min(minPrefix, prefix); // update minimum prefix seen
  }

  return maxSum;
}
let nums=[2, 3, 5, -2, 7, -4];
console.log(PrefixMethodMaxSubarraySum(nums));
console.log(KadaneMaxSubarraySumKadane(nums));
/*Analysis How similar both kadane's and prefix way is :
Both methods are tracking “how good is the best subarray that ends at i” — they just store that idea in different variables.
Prefix method:

prefix = total sum from start up to current index (running total).

minPrefix = the smallest running total seen before this index (the best place to cut the array so the remainder is largest).

prefix - minPrefix = best subarray sum that ends at current index.


Kadane:

current = best subarray sum that ends at the previous index (and we update it to be the best ending at current index).

max(arr[i], current + arr[i]) = either start fresh at arr[i] or extend the previous best with arr[i].

1.let bestEnding = prefix - minPrefix
 bestEnding  (vs)  current = Math.max(arr[i], current + arr[i])
— They produce the same value: the best subarray sum that ends at i.
2.maxSum = Math.max(maxSum, bestEnding)  (vs)  maxSum = Math.max(maxSum, current)
— both update the overall maximum.

3. prefix += arr[i] and  minPrefix = Math.min(minPrefix, prefix)
 together handle the bookkeeping Kadane keeps implicitly:

   3.1):If minPrefix equals the previous prefix (i.e., the best cut is at i-1), then bestEnding becomes arr[i] → same as current = arr[i].

    3.2):Otherwise bestEnding becomes (previous bestEnding) + arr[i] → same as current + arr[i].
*/


//Follow up:to find indexes of max sum subarray, we keep two variables for tracking running subarray and two for best subarray (max sum)

 //solved on own  followup qn for index of max sum subarray 
    /*let idx=[0,0]; //idx[0] is start and idx[1]=end;stores running subarray
      finalIdx=[0,0];// stores the best subarray start and end
        let currSum=0;let maxSum=-Infinity;
       for(let i=0;i<n;i++){
         if(nums[i]>currSum+nums[i]){
            idx[0]=i;idx[1]=i
             currSum=nums[i]}
            else{
            idx[1]=i
            currSum=currSum+nums[i]);
            }
         
          if(currSum>maxSum){
          finalIdx[0]=idx[0];finalIdx[1]=idx[1]
          maxSum=currSum
           };
       }
    */