/* Given an array nums of n integers.
Return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.
Input: nums = [100, 4, 200, 1, 3, 2] Output: 4
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] Output: 9
Constraints:
     1 <= nums.length <= 10**5
     -10**9 <= nums[i] <= 10**9
*/
/*
Brute: traverse whole array at each index check if its consecutives are present by searching whole array once for each consectuive .
T.C is O(n**3)-> while loop can extend to n times in worst case(if all elements in array are consecutive),S.C is O(1).
    longestConsecutive(nums){
      //brute -idea on own.implementation directly watched editorial
      let n=nums.length;let curr=0;let max=0;
       for(let i=0;i<n;i++){
          curr=1;let x=nums[i]+1;
          while(this.searchElement(x,nums)){
             curr++;
             x++;
          }
          max=Math.max(curr,max);
       }
       return max;
    }
    searchElement(x,nums){
        for(let j=0;j<nums.length;j++){
            if(nums[j]==x){
                return true;
            }
        }
        return false;
    }
*/
/*
Better: sort the array and traverse the array initialise curr sum and reset everytime the next element is not consecutive one and update maxsum each time before
resetting curr sum.
T.C is O(nlogn) to sort +O(n) to traverse ,overall:O(nlogn).S.C is O(1).

longestConsecutive(nums){
      let n=nums.length;let curr=1;let max=1;
      nums.sort((a,b)=>a-b);
      //edge case mistake did : was updating max only in else case before resetting it to 1.
      //but this way when all are single consecutive we wont update max at all or if larger consecutive
      //sequence includes last element .so for these cases at the end return max of curr,max

      //edge case mistake 2: did not handle duplicate elements was resetting count as duplicates
      //should not be counted but ,instead we should just ignore duplicates but not reset count 
      //our longest consecutive no.s can contain dups but should not be included in count
      for(let i=1;i<n;i++){
          if((nums[i]==(nums[i-1]+1))){
            curr++;
          }
          else if(nums[i]==nums[i-1]){
            continue;
          }
          else{
            max=Math.max(curr,max);
            curr=1;
          }
      }
      return Math.max(curr,max);
    }
*/
/*
Optimal: Using a set , to store all unique elements and then traversing the set/array at each element we check if its starting point of consecutive sequence
by checking if num-1 is present in set, if its potential starting point only then we check for consecutive numbers in set.
If we think clearly we will be taking O(n) time for each element traversal and checking if num-1 is present or not . then for any num if its starting 
point of consecutive sequences we will check some elements right , at the total of all those consecutive checkings would be max O(n) if every number 
of array was part of some consecutive sequence .like if we had 1 3 2 4 80 82 81 in array we would only check when we are at 1 and 80 and then check
2,3,4,5 and when at 80 we check 81,82,83 so ultimately we check n  numbers for potential consecutive sequence count. 
overall T.C is O(n) to insert into set +O(n) to traverse set/array+O(n) to count consecutive elements.
S.C is O(n) for set. 

*/

function longestConsecutive(nums){
      let n=nums.length;
      let set =new Set();
      for(let i=0;i<n;i++){
        set.add(nums[i]);
      }
      let count=1; let max=1;
      for(let num of set ){
        if(!(set.has(num-1))){
            let x=num+1;
            while(set.has(x)){
                count++;
                x++;
            }
            max=Math.max(count,max);
            count=1;
        }
        //mistake did initial submission: did not reset count , so in output was getting extra value then instantly foundout.
      }
      return max;
    }