/*
Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only
 number missing from the array within this range.
Input: nums = [0, 2, 3, 1, 4] Output: 5
Input: nums = [0, 1, 2, 4, 5, 6] Output: 3
Constraints:
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

//dificulty:Easy
 */
/*brute force: to check in array for each element from 0 to N ,by iterating over array .once any number is not present
return that number immediately.T.C is O(n**2).S.C is O(1).(obvious solution )

Better:Use hashmap iterate over array and store all from 0 to N-1 Index into hashmap, Iterate from 0 to N check 
which has 0 freq in HashMap. T.C is O(N) for hash map storing ,O(N) for iterating from 0 to N to check in hashmap
O(2N)=>O(N)., S.C is O(N) for HashMap.(own thought)

Better2:Sorting the array O(nlogn) then iterating over sorted array and checking first num that is missing ,we can do
this by substracting previous value from current value if diff is not 1 and 2 then arr[i]-1 is the missing num
O(nlogn)+O(n) => O(nlogn) will be the time complexity , S.C is O(1) (own implementation)
```
function missingNumber(nums) {
            nums.sort((a,b)=>(a-b));
            if(nums[0]!=0){return 0}
            for(let i=1;i<nums.length;i++){
                if((nums[i]-nums[i-1])==2){
                    return nums[i]-1;
                }
            }
            return nums.length;
    }
```
optimal 1:Using Math we can find Expected Sum of numbers 0 to N is N(N+1)/2 and current array sum , then missing
number is Expected-current .(solution done own from hint watched sum word). T.C is O(N) S.C is O(1).
*/
function missingNumber(nums) {
    let n=nums.length;
    let sum=0;let expectedSum=0;
    for(let num of nums){
    sum+=num;
    }
    expectedSum=n*(n+1)/2;
    return expectedSum-sum;
}
let nums=[1,3,2,0,5];
console.log(missingNumber(nums));//4

/*
optimal 2:
    a^a =0; a^0=a using these we find xor1 xor of all 
    numbers potential xor then xor2 which is xor of all numbers in array
    //if we do xor of these two all like numbers will give 0 left over number 
    //xor1 was the missing number in array hence not present in xor2
   T.C is O(n) ,S.C is O(1).
    let n = nums.length;
    let xor1=0;let xor2=0;
    for(let i=1;i<=n;i++){
       xor1= xor1^i;
    }
    for(let i=0;i<n;i++){
        xor2=xor2^nums[i];
    }
    return xor1^xor2;
  }
*/