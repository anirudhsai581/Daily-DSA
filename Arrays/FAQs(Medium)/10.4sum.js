/*
Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
·      a, b, c, d are all distinct valid indices of nums.
·      nums[a] + nums[b] + nums[c] + nums[d] == target.
Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the
 quadruplets can be returned in any order.
Input: nums = [1, -2, 3, 5, 7, 9], target = 7 Output: [[-2, 1, 3, 5]]
Input: nums = [7, -7, 1, 2, 14, 3], target = 9 Output: []
Constraints:
1 <= nums.length <= 200
-104 <= nums[i] <= 104
-104 <= target <= 104
Bruteforce using 4 nested loops and set to filter out unique pairs , T.C is O(n**4), S.C is O(k) for set+O(k) for answer array if considered, 
here k-> no.of unique triplets  
function fourSum(nums, target) {
//solved completely on own with previous experience of 2sum,3sum
      let n=nums.length; let seen=new Set();let res=[];
          for(let i=0;i<n-3;i++){
            for(let j=i+1;j<n;j++){
              for(let k=j+1;k<n;k++){
                for(let l=k+1;l<n;l++){                    
                  if((nums[i]+nums[j]+nums[k]+nums[l]) == target){
                     let triplet =[nums[i],nums[j],nums[k],nums[l]].sort((a,b)=>(a-b));
                     let key=JSON.stringify(key);
                     if(!(seen.has(triplet))){
                       res.push(triplet);
                       seen.add(key);
                     }
                  }
                }
              }
            }
          }
        return res;
    }
Brute force 2 : same 4 nested loops but before we sort the array and add condition to skip duplicates in each loop,avoid using set.
T.C is O(n**4) S.C is O(1) auxilary space and O(k) for output array (k is no.of unique triplets)
function fourSum(nums, target) {
//solved completely on own with previous experience of 2sum,3sum
      let n=nums.length;let res=[];
      nums.sort((a,b)=>a-b);
          for(let i=0;i<n-3;i++){
            if(i>0 && nums[i]==nums[i-1]){continue};
            for(let j=i+1;j<n;j++){
               if(j>i+1 && nums[j]==nums[j-1]){continue};
              for(let k=j+1;k<n;k++){
                if(k>j+1 && nums[k]==nums[k-1]){continue};
                for(let l=k+1;l<n;l++){
                  if(l>k+1 && nums[l]==nums[l-1]){continue};  
                  if((nums[i]+nums[j]+nums[k]+nums[l]) == target){
                     let triplet =[nums[i],nums[j],nums[k],nums[l]];
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
Better approach: fix 2 numbers i,j and loop with 3rd number for each k check if remaining desired element is present in between j and k (we maintain this with hashmap/set)
if compliment exist in between j and k its valid quadruplet , T.C is O(n**3) for three loops, and set and hash retrievals and insertions are O(1) in js
and S.C is O(n) for hashmap +O(m) for set and result where m is no.of unique quadruplets 

function fourSum(nums, target) {
      let n=nums.length; let res=[]; let seen=new Set();
      //solved completely on own with previous experience of 2sum,3sum
      for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
          let hashmap = new Map();//we are using  hashmap and store compliment and its index or can also store any other value instead of idx 
          //we dont care about val only if complimennt is present or not so set will also be sufficient.
          let rem =target-nums[i]-nums[j];
        for(let k=j+1;k<n;k++){
          let compliment=rem-nums[k];
          if(hashmap.has(compliment)){
            let triplet =[nums[i],nums[j],nums[k],compliment].sort((a,b)=>a-b);
            let key =JSON.stringify(triplet);
            if(!(seen.has(key))){
              seen.add(key);
              res.push(triplet);
            }
          }
          hashmap.set(nums[k],k)//pushing all k's seen so far we find complement in between j and k so that we dont include j and k again if we had stored whole array
          //refer 3sum for this idea
        }
        }
      }
      return res;
    }
*/

/*Optimal:sorting the array fixing i,j and finding remaining using two pointer , T.C is O(n**3) and S.C is O(1) aux space, output array O(k) no.of unique quadruplets.

*/

function otpimalFourSum(nums, target) {
    //solved completely on own with previous experience of 2sum,3sum
      let n=nums.length;let res=[];
         nums.sort((a,b)=>(a-b));
         for(let i=0;i<n-3;i++){
          if(i>0 &&nums[i]==nums[i-1]){continue};
          for(let j=i+1;j<n;j++){
            if(j>i+1 &&nums[j]==nums[j-1]){continue};
            let low=j+1; let high=n-1;
            let rem=target-nums[i]-nums[j];
            while(low<high){
              let sum=nums[low]+nums[high];
              if(sum==rem){
                res.push([nums[i],nums[j],nums[low],nums[high]]);
                low++;high--;
                while(low<high &&nums[low]==nums[low-1]){low++};
                while(low<high &&nums[high]==nums[high+1]){high--};

              }else if(sum<rem){
                low=low+1;
              }
              else{
                high=high-1;
              }
            }
          }
         }
         return res;
    }
let nums=[1, 1, 3, 4, -3]; let target=5;
console.log(otpimalFourSum(nums,target));
