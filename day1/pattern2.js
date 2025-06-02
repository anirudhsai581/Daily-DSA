/*
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.
An N/2-dimensional forest is represented by the lower triangle of the pattern filled with ‘*’.
For every value of ‘N’, help sam to print the corresponding N/2-dimensional forest.
Example:
Input:  ‘N’ = 3

Output: 
* 
* *
* * *

*/
let n=5;
for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write("* ");
    }
    console.log();
}