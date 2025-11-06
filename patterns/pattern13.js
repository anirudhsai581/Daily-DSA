/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
1 
2 3 
4 5 6
7 8 9 10 
11 12 13 14 15
*/

let n = 5;
let a = 1;
for (let i = 1; i < n + 1; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += `${a} `;
    a++;
  }
  console.log(str);
}

/* approach 2 : 
class Solution {
    pattern13(n) {
         1 2 4 7 11 //if diff are linear(like here +1,+2,+3,+4)
     /and differences of differences is constant (+1,+1,+1,..) this means the its a quadratic equation 
    /* ax**2 +b*x+c ,solving it gives (i(i-1)/2  +1) is the equation from
    if differences are constant it means its linear eqaution
    if differences of differences are constant it means quadratic equation
    (the rate of change constant=linear, if rate of change of rate of change is constant that means its quadratic) 


        let str='';
        for(let i=1;i<=n;i++){
            str='';
            for(let j=0;j<i;j++){
             str+=(i*(i-1)/2 +1)+j;
             str+=' ';
            }
            console.log(str);
        }

    }
} */
