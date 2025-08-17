/*//i guess this is also called as dutch national flag problem
Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done
 in-place, without making a copy of the original array.
Input: nums = [1, 0, 2, 1, 0] Output: [0, 0, 1, 1, 2]
Input: nums = [0, 0, 1, 1, 1] Output: [0, 0, 1, 1, 1]
Constraints:
1 <= nums.length <= 105
nums consists of 0, 1 and 2 only.


//completely solved 3 approaches of brute better and optimal on own.
brute:use nums.sort((a, b) => a - b);  T>C is O(nlogn), space O(1) , also problem is mentioned inplace .
better:counting number of 0's and 1's and 2's then from i to till the count of0's is0 fill 0 etc we can comeup with
till what index to fill directly in single loop , we can do this in other ways too ,lilke using three loops ,
 one sample below.
for (let i = 0; i < cnt0; i++) {
            nums[i] = 0;
        }

        // placing 1's
        for (let i = cnt0; i < cnt0 + cnt1; i++) {
            nums[i] = 1;
        }

        // placing 2's
        for (let i = cnt0 + cnt1; i < nums.length; i++) {
            nums[i] = 2;
        } 

T.C is O(n)+O(n) to count + to overwrite, effectively O(n). we reduce the second O(n) with our optimal
*/
//optimal:3 pointers, kind of like 2 pointers +iterator (i);
//optimal due to intution of swapping to be done from pushing zeroes to end problem
//initially started with count variable and swapping 0 to count var position in for loop iteration
//then got idea if i do same for 2 and swap with end ,then need of one more var came 
//then understood low and high are needed went with while loop but still needed one more index like for loop i
//so used i to iterate updated in all cases then realised testcases failing as when i crossing when 2is swapped
// if swapped position has 0 then that is getting ignored if we move i, so we should not move i when 2 is swapped without 
//knowing current index has 0 after swap .

//T.C is O(n) S.C is O(1).
function sortZeroOneTwo(nums) {
        //was able to solve complete brute,better,optimal on own 
        let n =nums.length;
        let low=0;let high=n-1; let i=0;
        while(low<high&&i<=high){
            
             if(nums[i]==0){
                [nums[i],nums[low]]=[nums[low],nums[i]];
                low++;i++;
            }
            else if(nums[i]==2){
                 [nums[i],nums[high]]=[nums[high],nums[i]];
                 high--;
            }
            else{
                i++;
            }
        }
        return nums;
}
let nums=[0,2,1,0,1,2,1,0];
console.log(sortZeroOneTwo(nums));//[0,0,0,1,1,1,2,2]
