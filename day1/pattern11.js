/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1

*/
let n=5;
for(let i=0;i<n;i++){
       let num =1;
    if(i%2==0) {
        num=1;
    }
    else{
        num=0;
    }
 
    for(let j=0;j<i+1;j++){
        process.stdout.write(`${num} `);
        num=1-num;
    }
    console.log();
    }