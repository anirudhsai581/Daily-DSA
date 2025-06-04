/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
1 
2 3 
4 5 6
7 8 9 10 
11 12 13 14 15
*/

let n=5;
let a=1;
for(let i=1;i<n+1;i++){
    let str='';
    for(let j=0;j<i;j++){
         str+=`${a} `;
         a++;
    }
    console.log(str);
}