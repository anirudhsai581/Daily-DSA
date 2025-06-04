/*
Given an integer n. 
You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*
**
***
****
*****
****
***
**
*
*/
let n=3;
for(let i=0;i<n;i++){
        let stars = '*'.repeat(i+1);
        console.log(stars);
    }

for(let i=n-1;i>0;i--){
    let stars ='*'.repeat(i);
    console.log(stars);
}