/* Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
Input: nums = [1, 1, 1], k = 2

Output: 2

Explanation: In the given array [1, 1, 1], there are two subarrays that sum up to 2: [1, 1] and [1, 1]. Hence, the output is 2.
Input: nums = [1, 2, 3], k = 3

Output: 2
Constraints:
   1 <= nums.length <= 10**5
   -1000 <= nums[i] <= 1000
   -10**7 <= k <= 10**7 */
/* 
Brute: Absolute brute will be to generate all subarrays and have one more loop to find sum of each subarray which is O(n**3)
generally we wont use one more loop to find sum as we know sum is just adding current j to previous sum
so with that it is O(n**2) only
generate all subarrays and whenever a subarray is valid ,increase count. T.C is O(n**2) S.C is O(1)
//code pasted from editor, as know the process didnot solve the brute
  subarraySum(nums, k) {
        let n = nums.length;
        // Number of subarrays
        let count = 0;

        // starting index
        for (let startIndex = 0; startIndex < n; startIndex++) {
            let currentSum = 0;
            // ending index
            for (let endIndex = startIndex; endIndex < n; endIndex++) {
                // calculate the sum of subarray [startIndex...endIndex]
                // sum of [startIndex..endIndex-1] + nums[endIndex]
                currentSum += nums[endIndex];

                // Increase the count if currentSum == k:
                if (currentSum == k)
                    count++;
            }
        }
        return count;
}

 */
//optimal:when mix of pos an d negatives are there we cannot use sliding window , so we take map where at each step we find if subarray
//ending with that element is valid if then we increase count with how many valid subarrays ending with this element are present
//***Logic for it to be valid:*** the logic is we are checking the max length subarray ending with the current element likwise we check
//for all elements hence its guaranteed we find the subarray if exist. now to check if there is valid subarray ending with current
//element we use prefix sums.suppose prefix sum till current elements is x, we check for any prefix sum before this with value
//x-k(we use hashmap to check if previously such prefix exist) so if such prefix with x-k exist it means ,the subarray sum starting
//from prefixsum (with value x-k) to current prefixsum(value x) will have sum k, if suppose k=6 prefix sum currently is 8 if there
//exist prefix sum earlier with 2 that means after that element onwards till current element the subarray sum is k.
//T.C is O(n) S.C is O(n)
class Solution {
  //solved on own(with longest subarray with sum k knowledge)
  subarraySum(nums, k) {
    let map = new Map();
    let prefixSum = 0,
      n = nums.length,
      count = 0;
    for (let i = 0; i < n; i++) {
      prefixSum = prefixSum + nums[i];
      if (prefixSum == k) {
        count++;
      } //we can skip this if block by having a base case that to have {0:1} in map
      //this means when prefix sum==k ,if we check prefixsum-k there will be atleast one occurence of it.
      //our if block is doing exactly same.
      if (map.has(prefixSum - k)) {
        count += map.get(prefixSum - k);
      }
      map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
  }
}
const solution = new Solution();
const nums = [3, 1, 2, 4];
const k = 6;
// Function call to get the result
const subarrayCount = solution.subarraySum(nums, k);
console.log("The number of subarrays is:", subarrayCount);

/* Better: if given input contains only positives then we can use sliding window (not even useful when we have zeroes as there is no
single monotonous flow mixture of 0's and the numbers make it hard to have clear logic) 
Remember: to find the length of subarray this works when we have zeroes too because we can count one subarray with max length , but we
cannot count all the subarrays as many middle zeroes etc creates overlaps cannot be done with sliding window , dont  think further already 
spent 1.5hr and understood for counting subarrays sliding window not possible when we have zeroes*/

//optimal than hashmap approach for positive integers in array T.C is start can travel at most n ,end travels n , so O(2n) i.e O(n),
//S.C is O(1). when there are only positives we can use slidingwindow , we can increase elements in window (i->j)if sum exceeds we
//remove one from left (moving i ) then we imclude j and move right .

/*subarraySum(nums, k) {
    let n = nums.length;
    let count = 0;
    let sum = 0;
    let start = 0,
      end = 0;
    while (end < n) {
      sum = sum + nums[end];
      while (sum > k) {
        sum = sum - nums[start];
        start++;
      }
      if (sum == k) {
        count++;
      }
      end++;
    }
    return count;
  }  */
