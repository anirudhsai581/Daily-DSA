/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

E 
D E 
C D E 
B C D E 
A B C D E
*/
let n=5;
for(let i=0;i<n;i++){
    let code=64+n;
    let alphabet=String.fromCharCode(code);
    let str='';
   for(let j=0;j<i+1;j++){
    str+=`${alphabet} `;
    code--;
    alphabet =String.fromCharCode(code);  
   }
   console.log(str.trim().split('').reverse().join(''));
}