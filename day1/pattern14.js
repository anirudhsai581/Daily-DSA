/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

A
AB
ABC
ABCD
ABCDE
Print the pattern in the function given to you.
*/

let n=5;

   for(let i=0;i<n;i++){
    let str='';
    let code=65;
    let a='A';
    for(let j=0;j<i+1;j++){
         str+=`${a}`;
         code++;
         a=String.fromCharCode(code);    
    }
    console.log(str);
}