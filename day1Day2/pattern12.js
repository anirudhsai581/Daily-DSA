/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
1        1
12      21
123    321
1234  4321
1234554321
*/
let n=3;
for(let i=1;i<n+1;i++){
    let str='';
    for(let j=1;j<2*n+1;j++){
        if(j<i+1){
            str+=`${j}`;
        }
        else if(j<(2*n-i+1)){
            str+=' ';
        } else{
           str+=`${2*n-j+1}`;
        }
    }
    console.log(str);
}