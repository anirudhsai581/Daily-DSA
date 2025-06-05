/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
*/
let n=3;
for(let i=1;i<n+1;i++){
    let str='';
    let code=65;
    let a='A';
   const space= ' '.repeat(n-i);
   for(let j=0;j<i;j++){
      str+=`${a}`;
      code++;
      a=String.fromCharCode(code); 
   }
   for(let j=i;j>1;j--){
      code--;
      a=String.fromCharCode(code-1);
    str+=`${a}`;
   }
   console.log(space+str);
}