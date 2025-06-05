//first
/*
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.

For every value of ‘N’, help sam to print the corresponding N-dimensional forest.

Example:
Input: ‘N’ = 3

Output: 
* * *
* * *
* * *

*/
let n =5;
let str ="";
for(let i=0;i<n;i++){
    str += "* ";
}
for (let i = 0; i < n; i++) {
    console.log(str);
    }
console.log("Pattern printed successfully via first way!");
//second 
let n1 = 5;
for(let i = 0; i < n1; i++) {
    for(let j=0; j<n1;j++){
        process.stdout.write("* ");
    }
    console.log();
}
console.log("Pattern printed successfully via Second way!");