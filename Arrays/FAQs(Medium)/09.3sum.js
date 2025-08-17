/*
Given an integer array nums. Return all triplets such that:
i != j, i != k, and j != k
nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets.
 The output and the triplets can be returned in any order.
Input: nums = [2, -2, 0, 3, -3, 5] Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]
Input: nums = [2, -1, -1, 3, -1] Output: [[-1, -1, 2]]
Input: nums = [8, -6, 5, 4] Output: []
Constraints:
1 <= nums.length <= 3000
-10**4 <= nums[i] <= 10**4
*/
/*
Brute force: use Nested loops ,with condition (j=i+1,k=j+1) to avoid all permuatations of triplets like (1,2,3)=>(2,1,3),(2,3,1).....
but when nums array has duplicates [-1,2,-1,3,0] etc our result will have duplicates , so to avoid it we can do two ways
1.sort the array then add check in each loop that nums[i]==nums[i-1] skip, similarlly for j and k
2.Use set , each triplet array we can sort individually,now (-1,2,-1)(2,-1,-1) will both be (-1,-1,2) then we stringify this 
(as set cannot store arrays it can only store primitives, becuase even if 2 arrays has same values there reference will be diff we cannot find unique);
after stringify we check if set has that if not store also push this to res array, at last return res.

//Time complexity for 1 and 2 are both :O(n**3), Space complexity for 1:O(1) (if res array counted O(m) m is no.of unique triplets.) 
// for 2: set is taking O(m),m is no.of unique triplets and output array is also O(m).
code for 1 :
function bruteforce3sum(nums){
    let n=nums.length;let res=[];
     nums.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i>0 && nums[i]==nums[i-1]){continue};// as array is sorted checking if previous is not same as this to avoid dups.
        for(let j=i+1;j<n;j++){
        if(j>i+1 && nums[j]==nums[j-1]){continue};
            for(let k=j+1;k<n;k++){
                if(k>j+1 && nums[k]==nums[k-1]){continue};
                if((nums[i]+nums[j]+nums[k])==0){
                    res.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return res;
}

code for bruteforce2:
function  brute2threeSum(nums) {
    //Absolute bruteforce : 3nested loops but we dont want duplicate triplets
    // we can use 1.set to avoid dups 2.sort array initially then skip in each of nested loop if previous num is same as current
    let n = nums.length;
    let res = [];
    let seen = new Set();
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          if (nums[i] + nums[j] + nums[k] == 0) {
            let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
            let key = triplet.toString(); //can also use JSON.Stringify(triplet)
            if (!seen.has(key)) {
              seen.add(key);
              res.push(triplet);
            }
          }
        }
      }
    }
    return res;
  }
*/
/*
Better : Use Hashmap, traverse array two times check if target-(nums[i]+nums[j]) is present in array then we got a valid pair
store it if its unique pair (we use set).
//we iterate first loop i , then second loop (kind of as k of triplet), then we find the what should be the other 
number which is target -nums[i]-nums[j], we call this completement. idea is to check this complemenet in O(1) time usinh
hashmap, but if we store all numbers of array in hashmap then we complement may also point to our already two numbers
of triplet i and j . so we intiate hash map after i loop and store all the j's after processing. such that we find
at any point hash will only contain numbers between i and j (excluding i,j).so it can be valid third num of triplet.
we wont be missing on any triplet as if compliment can be out of (i,j) range those will be covered when j is at that point 
then number between we will be finding. this avoids taking same number two positions in a triplet.
also  our triplet may not be unique if we had duplicates in array etc. so we sort the triplet ,then stringify it and 
check in set if already present if not we store this now in set and also push this to result array.
T.C is O(n**2), hashlookup and insertion set is almost always O(1). S.C is O(n) worst case for hashmap size.
 threeSum(nums) {
    let n = nums.length;
    let res = [];
    let seenTriplets = new Set();
    let target = 0;
    for (let i = 0; i < n; i++) {
      let map = new Map();
      target = -nums[i];
      for (let j = i + 1; j < n; j++) {
        let complement = target - nums[j];
        if (map.has(complement)) {
          let triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
          let key = triplet.toString(); // or JSON.stringify(triplet)
          if (!seenTriplets.has(key)) {
            seenTriplets.add(key);
            res.push(triplet);
          }
        }
        map.set(nums[j], j);
      }
    }
    return res;
  }
*/

/* 
More better &best: sorting +2 pointer
1.More better: sorting +2 pointer but use set at end to handle duplicates :
T.C is O(n**2),space compelxity is o(m)-m no.of unique triplets stored in set.
function threeSum(nums) {
    let  n=nums.length;let target =0;
    let res=[];
    let seen = new Set();
    nums.sort((a,b)=>a-b);
        for(let i=0;i<n-2;i++){
            target=-nums[i];
                let low=i+1;let high=n-1;
            while(low<high){
                let sum=nums[low]+nums[high];
               if(sum==target){
                    let ans=[nums[i],nums[low],nums[high]];
                    let key= JSON.stringify(ans); 
                    if(!(seen.has(key))){
                        seen.add(key);
                        res.push(ans);
                    }
                    low++;high--;
               }
               else if(sum<target){
                 low=low+1;
                }
                else{
                    high=high-1;
                }
            } 
        }
        return res;
    }

Best: sorting +2 pointer and handling duplicates takind advantage of array is sorted without using set
T.C is O(n*n) S.C is O(1).
*/ 
function OptimalthreeSum(nums) {
    let  n=nums.length;let target =0;
    let res=[];
    nums.sort((a,b)=>a-b);
        for(let i=0;i<n-2;i++){
            //to avoid duplicates with same i values and also as we know arr is sorted we add this
            if(i>0 &&nums[i]==nums[i-1]){continue};
            target=-nums[i];
                let low=i+1;let high=n-1;
            while(low<high){
                let sum=nums[low]+nums[high];
               if(sum==target){
                    let ans=[nums[i],nums[low],nums[high]];
                     res.push(ans);
                    low++;high--;
                    while(low<high && nums[low]==nums[low-1]){low++};
                    while(low<high && nums[high]==nums[high+1]){high--};
                    //handling duplicate low and high that can form valid answers(2nd and 3rd values of triplet)
               }
               else if(sum<target){
                 low=low+1;
                }
                else{
                    high=high-1;
                }
            } 
        }
        return res;
}
let nums=[2, -2, 0, 3, -3, 5]
console.log(OptimalthreeSum(nums));
