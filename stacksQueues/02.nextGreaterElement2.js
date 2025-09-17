/* Given a circular integer array arr, return the next greater element for every element in arr.
The next greater element for an element x is the first element greater than x that we come across while traversing the array in a
clockwise manner. If it doesn't exist, return -1 for that element. 
Input: arr = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]
Output: [10, -1, 6, 6, 2, 6, 7, 7, 9, 9, 10]
Input: arr = [5, 7, 1, 7, 6, 0]
Output: [7, -1, 7, -1, 7, 5]
Input: arr = [1, 2, 3, 4, 5]
Output:
[2, 3, 4, 5, -1]
Constraints:
  1 ≤ n≤ 10**5
  0 ≤ arr[i] ≤ 10**9 */

/* brute force: nested loops , but this time after reaching right end we again have to check from beginning of arr
till current element ,so naive way would be to run a loop again after reaching end , from start till curr,
better way to do that is using circular array concept and we basically travel from j=i+1 and total of n-1 values(excluding currele)
so j=i+1 to j=i+n-1 but once j crosses n-1 we want to start from start , so if we take %n when we reach n
we go to 0 . so using this logic we calculate index in inner loop.
Also we initiate the ans array with -1 by default so the else case if no greater element no need to handle separately
T.C is O(n**2) S.C is O(n) (for storing ans only).
class Solution {
    nextGreaterElements(arr) {
    let n=arr.length;
    let ans=new Array(n).fill(-1);
    for(let i=0;i<n;i++){
        let currEle=arr[i];
        for(let j=i+1;j<i+n;j++){
            let idx=j%n;
            if(arr[idx]>currEle){
                ans[i]=arr[idx];
                break;
            }
        }
    }
    return ans;
    }
}*/

/* Optimal: The general optimal is more readable but my own optimal is slightly better timecomplexity 
but its not the generic way to solve so have to explain very clearly to interviewers
what i am doing is like NGE1 i just travel from array end to start i find right elements by maintaining 
stack and popping if stack has lesser value if stack became empty that means no ele in right is greater
so we go left , we keep a separate variable idx in top of function common to all the loops from there
we check from 0 index if its bigger we push to stack and move the index to next, so next time we continue
the index dont check from start, also we iterate the index variable only till curr element when checking
from start not beyond that , no need to go beyond as we ahve already covered right with stack at beginning
T.C: */
class Solution {
  //solved on own ,Diff apporach from generic optimal solution
  nextGreaterElements(arr) {
    let n = arr.length;
    let st = [];
    let idx = 0;
    for (let i = n - 1; i >= 0; i--) {
      let currEle = arr[i];
      while (st.length > 0 && arr[i] >= st[st.length - 1]) {
        st.pop();
      } //till here same as nge1
      if (st.length == 0) {
        while (idx < n && idx < i) {
          if (arr[idx] > arr[i]) {
            st.push(arr[idx]);
            idx++;
            break;
          }
          idx++;
        } //this while loop only runs in total of n times for all iterations of i.
        if (st.length == 0) {
          arr[i] = -1;
        } else {
          arr[i] = st[st.length - 1];
        }
        //the above if else to check after looking from the front till the curr ele do we have
        //a greater element that curr now in stack
      } else {
        arr[i] = st[st.length - 1];
      }
      st.push(currEle);
    }
    return arr;
  }
}
