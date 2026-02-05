/*  */
/* My Approach :
Initially store the jumps we can make at idx0 and then if we move to next idx we have consumed one jump available so jump-- and we check if after consumption
we had negative jumps now if yes that means we are at a position which we couldnt reach, and at every point of iteration the available jumps
are updated in such a way that they are maximum possible till now at that idx, we can update this by checking if jumps value of that idx is greater than max jumps we are tracking
optimisation if statment to check in each iteration if we can reach end directly if yes directly return true.
T.C is O(n) loop iteration at max.
S.C is O(1)
Greedy point: To keep Jumps to be as max as possible at each point so that we have ab bigger value to reach end as bigger value maximises the chances. 
 */

/* class Solution {
    canJump(nums) {
        //your code goes here
        const n=nums.length;
        let jump=nums[0];
        if(n===1){return true}
        for(let i=1;i<n;i++){
            jump--;
            if(jump<0){return false}
            if(nums[i]>jump){jump=nums[i]}
            if(jump>=(n-1-i)){return true}   
        }
        
    }
} */
/* Standard Approach : we keep track of maxidx we can react while iterating the array , if any time at any index if we see that the maxidx to be reached is lesser than
where we are standing right now then we return false,and to keep track of maxidx we can reach we just check if (curridx+jumps at curridx) is greater than prev maxidx 
then we update maxidx otherwise no. We can add another if statement in each iteration to check if maxidx is n-1 or more and return true 
T.C is O(n) Loop iteration once
S.C is O(1) aux space .As no extra variables used.
Greedypoint:Checking greedily the maximum overall we can make till the current idx and we want it to be max so overall better chances of reaching end 
*/
/* Trivia: We can always reach end if we dont have 0's at all in our array , 0's are the only one that may stop us to jump further. */
class Solution {
  // To determine if last index is reachable
  canJump(nums) {
    // Initialize maximum index
    let maxIndex = 0;

    // Iterate through each index of the array
    for (let i = 0; i < nums.length; i++) {
      /* If the current index 
               is greater than the 
               maximum reachable index
               it means we cannot move 
               forward and should 
               return false */
      if (i > maxIndex) {
        return false;
      }

      /* Update the maximum index that can be 
               reached by comparing
               the current maxIndex with the sum 
               of the current index and
               the maximum jump from that index */
      maxIndex = Math.max(maxIndex, i + nums[i]);
    }

    /* If we complete the 
           loop, it means we 
           can reach the 
           last index */
    return true;
  }
}

// Example usage
const nums = [4, 3, 7, 1, 2];

console.log(
  "Array representing maximum jump from each index: " + nums.join(" "),
);

const solution = new Solution();
const ans = solution.canJump(nums);

if (ans) {
  console.log("It is possible to reach the last index.");
} else {
  console.log("It is not possible to reach the last index.");
}
