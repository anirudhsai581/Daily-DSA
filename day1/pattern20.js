/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

*/

let n=5;
for(let i=0;i<n;i++){
     let stars1 ='*'.repeat(i+1);
     let space =' '.repeat(2*n-2*i-2);
     console.log(stars1+space+stars1);
}
for(let i=1;i<n;i++){
    let stars1 ='*'.repeat(n-i);
    let space =' '.repeat(2*i);
    let stars2 ='*'.repeat(n-i);
    console.log(stars1+space+stars2);
}
