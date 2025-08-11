/*
Given an array nums of size n, which denotes the positions of stalls, and an integer k, which denotes the number of aggressive cows, assign stalls to k cows such that the minimum distance between any two cows is the maximum possible. Find the maximum possible minimum distance.
Input: n = 6, k = 4, nums = [0, 3, 4, 7, 10, 9] Output: 3
Input : n = 5, k = 2, nums = [4, 2, 1, 3, 6] Output: 5
Input : n = 5, k = 3, nums = [10, 1, 2, 7, 5] Output: 4
Constraints:
  2 <= n <= 10**5
  2 <= k <= n
  0 <= nums[i] <= 10**9
*/

/* Ignore the worst brute force if needed as its absolutely lengthy not feasible
****
Worst Brute Force:without sorting the nums array finding all the differences means first selecting k  values of array,  nCk(combinations) then differences is by selecting all possible 2 from the selected combination kC2 selections of differences in each combinations and then finding the least of each combination and finidng max of all those min differences.
no.of combinations nCk * kC2, kC2 differences means k*(k-1)/2 means O(k**2), now nCk at max will be when k=n/2 and it ~~ equals O((2**n)/sqrt(n)); and multiplied by k**2 (k can be max n). so not at all feasible solution and also we will need extra storage to store all these 
*****
:::::::
Good Brute Force: so the best way to avoid calculatimg all those differences is sorting the arrat, this way min differences of k cows will be just the min (adjacent cow differences) as array is sorted, it will be O(k).and sorting is O(n logn). now we dont check for all cow combinations. we take the min possible difference which is 1, max possible difference which is nums[n-1]- nums[0], we traverse linearly from the min possible to max possible, i.e 1 to (nums[n-1]-nums[0]). and check if we can place all the cows with this difference , 
we have a function that return true or false to check if we can place all cows with the current difference. lets say "validDifference"
the function will traverse the whole array and have count variable initiated to 1(first cow is placed directly) and index variable idx . first cow is placed at nums[0] as we want to find the difference between array values to be less ,placing first cow at least array value is the best for us. from here we traverse all the array  whenever the difference nums[i]-nums[idx] is less than equal to the difference we pass to this function, we increase count ,store the idx=i, and continue , so every cow will be checked the distance from previous cow. if our count is >=k then our current difference value is valid and continue checking till the maxpossible difference (nums[1]-nums[0]). 
::::::::::
*******
Optimal: so as we know diff low=1, high = nums[n-1]-nums[0] so instead of checking linearly we use binary search and compute mid and check if mid is valid using validDifference function, if valid we move right low=mid+1, to find max possible ans, if not we go left high=mid-1;
*********
*/
//Time complexity : sorting O(nlogn) then binary search O(log(nums[n-1]-nums[0]))*(O(n)), as in each binary search iteration we are using function to check validity ,which is of O(n).
//so over all :O(NlogN) + O(N *log(max-min)), as nums[n-1]is max and nums[0] is min  after sorting . 
function aggressiveCows(nums, k) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let low = 1;
    let high = nums[n - 1] - nums[0];
//solved on own after watching hint ( to know how to apply binary search)
    function checkMidValidity(nums, mid, k) {
      let idx = 0;
      let count = 0; //we can initiate count to 1 and check for k cows placement in total 
      //or keep it 0 and check for k-1 cows as first cow we any way place at nums[0].
      for (let i = 0; i < n; i++) {
        if (nums[i] - nums[idx] >= mid) {
          idx = i;
          count++;
          if (count >= k - 1) {
            return true;// having this if block inside of for loop we can exit early once we have sufficient count ,as only k cows needs to be placed not more.
          }
        }
      }
       return false;
      
    }

    let ans = 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (checkMidValidity(nums, mid, k)) {
        low = mid + 1;
        ans = mid;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  }
  let nums=[0, 3, 4, 7, 10, 9],k=4;
  console.log(aggressiveCows(nums,k));//3