/* Given an array arr of size n containing elements, find the next greater element for each element in the array in the order of
their appearance.

The next greater element of an element in the array is the nearest element on the right that is greater than the current element.

If there does not exist a next greater element for the current element, then the next greater element for that element is -1. 
Input: arr = [1, 3, 2, 4]

Output: [3, 4, 4, -1]

Explanation: In the array, the next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4 is -1, since it does not exist.

Input: arr = [6, 8, 0, 1, 3]

Output: [8, -1, 1, 3, -1]
Constraints:
  1 ≤ n ≤ 10**5
  0 ≤ arr[i] ≤ 10**9

*/
/* Bruteforce: Use nested loops traverse right of everyelement till end of array first found greater element is the ans if not found we 
will store -1.In interviews its better to store the ans in new array instead of modifying original array though we can do modify it 
here without issues.
T.C:O(n**2) S.C:O(n) to store ans arrray.

function  nextLargerElement(arr) {
        
        let n = arr.length; // size of array
        
        // To store the next greater elements
        let ans = new Array(n).fill(-1);

        for(let i = 0; i < n; i++) {
            // Get the current element
            let currEle = arr[i];
            
            for(let j = i + 1; j < n; j++) {
                
                // If the next greater element is found
                if(arr[j] > currEle) {
                    
                    // Store the next greater element
                    ans[i] = arr[j];
                    
                    // Break from the loop
                    break;
                }    
            }
        }
        // Return the answer
        return ans;
    }
}


/* Optimal: solved completely on own little syntax mistake
we start from end of array and traverse to start, because we want to find nextgreater element on right , if we start from right we will know
what elements to its right are at each point. Next we push element each time into stack, when top of stack is smaller than current element
then we pop till either stack is empty or stack has greter element than this , its safe to pop element if its less than this because 
for next iteration the element to its right will be in top of stack so if its not greater than the curr element then popped elements also would 
not be greater anyway. This way we are maintaining the stack in increasing order.
T.C is O(n) for input array traversal, if we store ans in different array (recommneded to not modify input array without asking in interview)
then to store in ans array O(n) and to traverse stack O(n) as all elements are pushed to stack once and atmost and popped if traversed.
overall T.C is O(n) S.C is O(n)(n+n for stack +ans array).
*/
class Solution {
  nextLargerElement(arr) {
    let st = [];
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
      while (st.length > 0 && st[st.length - 1] <= arr[i]) {
        st.pop();
      }
      let el = arr[i];
      if (st.length > 0) {
        arr[i] = st[st.length - 1];
      } else {
        arr[i] = -1;
      }
      st.push(el);
    }
    return arr;
  }
}

/* Intital version of my answer: used extra if block which is already being covered in while block if else.
class Solution {
    nextLargerElement(arr) {
       let st=[];let n=arr.length;
       st.push(arr[n-1]);arr[n-1]=-1;
       for(let i=n-2;i>=0;i--){
         if(arr[i]<st[st.length-1]){
            let el=arr[i];
              arr[i]=st[st.length-1];
              st.push(el);
         }
         else{
            while(st.length>0&&st[st.length-1]<=arr[i]){
                st.pop();
            }
            if(st.length>0){
               let el=arr[i];
                arr[i]=st[st.length-1];
                st.push(el);
                }
             else{
                st.push(arr[i]); arr[i]=-1;
             }
         }

       }
       return arr;
    }
} */
// Creating an instance of Solution class
let sol = new Solution();

let n = 4;
let arr = [1, 3, 2, 4];

/* Function call to find the next greater 
element for each element in the array */
let ans = sol.nextLargerElement(arr);

console.log("The next greater elements are: " + ans.join(" "));
