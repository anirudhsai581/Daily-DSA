/* Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array.

Do not include the duplicates in the answer. 

Input : nums = [1, 2, 3]  Output : [ [ ] , [1] , [2] , [1, 2] , [3] , [1, 3] , [2, 3] , [1, 2 ,3] ]
Input : nums = [1, 2]  Output : [ [ ] , [1] , [2] , [1,2] ]
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/
/*
optimal:At each position we include it and not include it and make subsequent calls ,we keep an index parameter to check at which index we are on starting 
with 0, then we make next call directly making idx+1 it means we did not include curr element, then we push element at 0 to curr array and make another call idx+1
(this call has included current element in curr array).When any call with included curr element comes back we pop once, it meanse once call is back 
curr element will be exactly same as before the call happened. As this pop only happens once after the second recursion call notice we include element in second
recursion call only so once its back this pop will be executed in backtrack . after that both nested calls are done it will return to parent call which will return and 
in that parent level (1st call is done) so push happens again and second call happens returns pop happens then control to parent then to its parent ,its parent's second hall will 
happen return pop.this way backtracking happens. If we just make dry run on paper we can see pop happens after second call(where element was pushed)returns and 
pop enesures its back to how its was before the push.
Also this way we are trying out every possibility once , as each index inclusion once exclusion once => 2 possibilities if there are 3 elements 
2*2*2 exactly 8 whole power set we will generate perfectly without repetetions. tho order is not directly [] [1] [2] like that 
order will be something like [[] [3] [2] [2,3] [1] [1,3] [1,2] [1,2,3]] as after completion of one call nested calls completely it returns back 
then the push of the first callhappens and similarly goes for nested calls. 


//T.C is O(2**n) as we make one call for each element of powerset which takes O(1) so overall 2**n is no.of elements in powerset , 2calls for each inclusion exclusion
2*2*2 when n=3, general 2*2*2*...n 2**n. 
S.C is O(n* (2**n)) as 2**n subsets  in ans set  each set can have at most n . so generalising O((2**n )*n).

*/
/*important point of backtracking: here we are maintaining the same array curr for all recursive calls thats why backtracking is required as array ref is being
passed in parameter all rec calls refers the same array.if we had passed initially '[]' this into reccall in powerset function  like : this.power(0, [], res, nums);,
 and in power function like  power(idx, curr, res, nums) {}  and for initial call without include we can just do  this.power(idx + 1, [...curr], res, nums); 
 then for inclusion of element we do [...curr,nums[i]].so this way pop will not be required as array is a new one for each call.
 Negatives: this means we have one new array for each call lot of memory waste.
 so include pop in backtracking and reuse one array efficiently
 we can see here idx is passed as 0 static into parameter,even if we pass idx in powerset like this.power(idxmcurr,res,nums,n); it wont update same index
 instead each power function will get a new copy of idx as idx is number primitive datatype ,wont have reference like in array.
 but if our power function was inside powerset still then it wont be a problem if we are just passing idx+1 in argument, but in this if we had done
 something like "idx=idx+1" inside call or even in argument then it is being changed and all calls will ref this idx , then we have to handle index in backtrack  
 also like idx=idx-1 each time call comes back.same for even if power and powerset are separate functions (not nested) but idx was global variable and if
 we change idx like this.idx=this.idx+1 then also we have to do -1 in backtrack.
 very important to maintain local and global parameters correctly in recusrion for memory optimisation .
*/
class Solution {
    powerSet(nums) {
        //solved after watching editorial initially was doing slice with start ,end start +1 one call and end-1 another call this way only
        //consequent substring will be returned that too with repetetions not at all relavant to powerset.
        let n=nums.length;
        let res=[];
        let idx=0;let curr=[];
        this.power(0,curr,res,nums,n);
        return res;
    }

     power(idx,curr,res,nums,n){
            if(idx==n){
                res.push([...curr]);
                //we cannot do res.push(curr) because it will push curr ref into this which will be mutated
                //so we push ...curr just the copy value.
                return;
            }
            //excluding currenet element at index by directly calling idx+1 without pushing anything to current
            this.power(idx+1,curr,res,nums,n);
            //including current element ad index (idx) by pushing nums[idx] to current and increasing idx
            curr.push(nums[idx])//we cannot directly do it in recursive call parameter as 
            //in js push return new array length not the updated array.
            this.power(idx+1,curr,res,nums,n);
             //backtrack while this recursion cal explores till res and backtracks it would have extra element added
             //at current path to explore other possibilities we remove it 
             curr.pop();
            
        }
}
const sol = new Solution();
const nums = [1, 2, 3];
console.log(sol.powerSet(nums));  