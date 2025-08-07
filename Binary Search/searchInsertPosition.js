/*Given a sorted array of nums consisting of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
Input: nums = [1, 3, 5, 6], target = 5 Output: 2
Constraints:
  1 <= nums.length <= 10**5
  -10**5 <= nums[i] <= 10**5
  nums contains distinct values sorted in ascending order.
  -10**5<= target <= 10**5
*/

//brute force will again be traversing the whole array from left and if we find a number >= target we return that number index O(n), we find no such number we return length of array.
//Optimal: This is exactly the same  as finding lower bound problem(>=x)(bianry search) if we do exactly same we the index of number >=x will be ans if not length of array  REFER:"LOWERBOUND" SOLUTION FOR THIS.
//optimal : I have done it is just the other side of optimal ,so instead of finding >=x , i found number <x, if there is no such number  we insert at 0, if its we insert at the number +1 position , since all are distinct we wont be having any issues.  T.C:O(logn)  S.C:O(1).
function searchInsert(nums, target) {
       let low=0; let high=nums.length-1; let lidx=-1;
       while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]==target){
          return mid;
        }
        else if(nums[mid]<target){
          low=mid+1;
          lidx=mid;
        }
        else{
          high=mid-1;
        }
       }
       return lidx+1;
    }

    let nums =[1, 3, 5, 6]; let target=2
    console.log(searchInsert(nums,target));