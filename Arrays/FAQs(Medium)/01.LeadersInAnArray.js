/*
Given an integer array nums, return a list of all the leaders in the array.
A leader in an array is an element whose value is strictly greater than all elements to its right in the
given array. The rightmost element is always a leader. The elements in the leader array must appear in the
order they appear in the nums array.
Input: nums = [1, 2, 5, 3, 1, 2] Output: [5, 3, 2]
Input: nums = [-3, 4, 5, 1, -4, -5] Output: [5, 1, -4, -5]
Constraints:
1 <= nums.length <= 10**5
-10**4 <= nums[i] <= 10**4
*/
//bruteforce: use nested loops first outer loop at i, next inner loop from i+1 to n-1 we can have bool flag we will
//make it false if anything on right is greater than or equal(duplicates handling) to that.T.C is O(n**2),S.C is O(1). 
/*
optimal: Iterate from right, store the max seen till i at each point, compare with current i if current i is greater 
push into result array ,then reverse the result array by two pointer approach or reverse() use reverse in exams and
two pointer in interviews both are T.C of O(n) S.C of O(1). overall T.C is O(n) and S.C is O(1) as extra space to store 
ans is not considered.
*/

function leaders(nums) {
      //solved after 1st hint that maining a max var from right
      /*My wrong procedure :
      initially was trying to sort and compare index , that wont work as 
      we cannot actually find all cases even if no.of elements to it big enough to
      contain smaller values to this there can be a max element placed there
      even if its small enough to contain bigger elements of sorted array that current num
      there can be smaller values placed there */
        let n=nums.length;let max=nums[n-1];
        let res=[];res.push(max);
        for(let i=n-2;i>=0;i--){
           if(nums[i]>max){
            res.push(nums[i]);
            max=nums[i];
           }
        }

        //  let low=0,high=res.length-1;
        //  while(low<high){
        //   [res[low],res[high]]=[res[high],res[low]];
        //   low++;high--;
        //  }
        // can use two pointers two just for shorter length used reverse both are same interms of complexity.
        return res.reverse();
    }
let nums = [1, 2, 5, 3, 1, 2];
console.log(leaders(nums))//[5,3,2];
