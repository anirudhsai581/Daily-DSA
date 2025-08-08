/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
ABCDE
ABCD
ABC
AB
A
*/
let n=5;

for(let i=0;i<n;i++){
    let str='';
    let code=65;
    let a='A';
    for(let j=n;j>i;j--){
         str+=`${a}`;
         code++;
         a=String.fromCharCode(code);    
    }
    console.log(str);
}