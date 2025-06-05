/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5 
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 2 1 2 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5 
5 4 4 4 4 4 4 4 5 
5 5 5 5 5 5 5 5 5


Print the pattern in the function g
*/

let n=4;
let curr=n;
let half=[];
for(let i=0;i<n;i++){
    let str='';
    let curr1=curr;
    for(let j=0;j<i+1;j++){
        str+=`${curr1}`;
        curr1--;
    }
    for(let j=1;j<2*n-1-2*i;j++){
        str+=`${curr1+1}`;
    }
     for(let j=0;j<i;j++){
        str+=`${curr1+2}`;
        curr1++;
    }
    half.push(str);
}

let full = [...half,...half.slice(0,n-1).reverse()];
full.forEach((row)=>{
  console.log(row);
})