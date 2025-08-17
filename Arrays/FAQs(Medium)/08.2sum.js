/*
Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums 
such that they add up to target.
Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in 
increasing order.
Input: nums = [1, 6, 2, 10, 3], target = 7 Output: [0, 1]
Input: nums = [1, 3, 5, -7, 6, -3], target = 0 Output: [1, 5]
Constraints:
2 <= nums.length <= 10**5
-10**4 <= nums[i] <= 10**4
-10**5 <= target <= 10**5
Only one valid answer exists.
*/
//Brute: nested loops traverse all possible pairs and check if sum==target if yes return as one and only pair is guaranteed.
//T.C is O(n**2) S.C is O(1).
function BrutetwoSum(nums, target) {
    let n=nums.length;
    for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++){
        if((nums[i]+nums[j])==target){
          return[i,j];
        }
      }
    }
}

/*
Better : using hashmap, we know that if we know one number say num ,then other has to be target-num.
so we iterate our original array ,find target-sum check if that exists in hashmap and return their indices.
we dont need to iterate whole array twice one to store and other to check, we can combine this and do in single pass
where we check for each number if target-num is already present in hashmap if not we put this in hashmap along with its index as value 
and move to next index.Note: we are storing here val,idx pair. value will be the key ,when iterating we check if value exist and 
then return value corresponding this key which will be index.
T.C is O(n) for array traversal,map "has" and "get" takes O(1) so overall O(n), S.C is O(n) (map with n entries)
in theory in worst case collisions may happen and map operations can degrade upto O(n) and hence overall O(n**2) -extremely rare in
 practical as JS engines v8 etc handle collisions very well,worst case scenario almost never happens.
twoSum(nums, target) {
        let map = new Map();  // key: number, value: index
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (map.has(complement)) {
                // found the pair, return indices
                return [map.get(complement), i];
            }
            // store current number with its index
            map.set(nums[i], i);
        }
    }
*/

/*my initial wrong approach: copied into new array, then found values after sorting+2pointer,tried to get indices
 from origial array using indexOf but this fails when we have duplicates in array like 5,5 (target=10), as indexOf returns
 only their first index.*/

 //Correct approach:
/*Optimal: Before sorting store both index and value pairs using any datastructure, we can use 2d arrays and store array of arrays with idx,val pairs
or we can use object to store idx and val pairs.like we did here. Both array of arrays or array of obj's has negligible performacne diff,obj has more readibility 


T.C is O(nlogn) to sort +O(n) to create array of object(idx+val) +O(n) for two pointer iteration=> overall O(nlogn)
S.C is O(n) for array of objects (array size n).
*/
function OptimalTwoSum(nums, target) {
     
    let numsWithidx = nums.map((val,idx)=>({val,idx}))

   /*arr.map(callback(element, index, array) { ... }) this is signature of Array.prototype.map
    first value in call back argument takes element, next index(optional generally here we want),(third is original array its rarely used)
    { val, idx } is shorthand in JavaScript for { val: val, idx: idx }.
     In object order does not matter we could have writtern {idx,val} does not make a diff 
     Note here names of object properties are coming from {} not the argument names we used in callback of map, as they are local names ,(here they are same)we can change them like :nums.map((x, i) => ({ value: x, index: i })),property names will be value,index*/

    numsWithidx.sort((a,b)=>(a.val-b.val));
    
    let low=0;let high=numsWithidx.length-1;
    while(low<high){
      let sum=numsWithidx[low]["val"]+numsWithidx[high].val; //using intentionally two diff notations to access obj prop
      if(sum==target){
         break;
      }
      else if(sum<target){
        low=low+1;
      }
      else{
        high=high-1;
      }
    }
    return [numsWithidx[low].idx,numsWithidx[high]["idx"]];//intentional use of two diff notations 
  }

  
  let nums=[1, 6, 2, 10, 3]; let target=12;
  console.log(OptimalTwoSum(nums,target));
  console.log(BrutetwoSum(nums,target))

  /*
Conlusion:
For current problem actually hashmap version is best , as we want indices the optimal approach needs extra space too.
*Approach*	                 *Best Use Case*	                     *Efficiency*
Brute-force             	Very small arrays                        Slow, O(n²) ,S.C is O(1).
Sorting + Two Pointers  	If you also need sorted pairs	        O(n log n), S.C:extra array O(n)
Hash Map	                Most practical for indices	            O(n) fastest,S.C is O(n)
For 2sum variant where index is not needed just want if a pair exist =>yes/no
then  sort+2 pointers is best as even though its O(nlogn) space is O(1), then hashmap solution which is O(n) space and time
  */