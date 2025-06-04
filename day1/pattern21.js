/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*****
*   *
*   *
*   *
*****
*/
let n=4;
for(let i=0;i<n;i++){
    let str='';
    for(let j=0;j<i+1;j++){
       if(i==0||i==n-1){
          str='*'.repeat(n);
       }
       else{
        str='*'+' '.repeat(n-2)+'*';
       }
    }
    console.log(str);
}