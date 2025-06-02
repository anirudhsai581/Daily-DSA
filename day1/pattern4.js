/*
Sam is making a Triangular painting for a maths project.

An N-dimensional Triangle is represented by the lower triangle of the pattern filled with integers representing the row number.

For every value of ‘N’, help sam to print the corresponding Triangle.

Example:
Input: ‘N’ = 3

Output: 
1
2 2 
3 3 3
*/


let n=3;
for(let i=1;i<n+1;i++){
    for(let j=0;j<i;j++){
    process.stdout.write(`${i} `);
    }
    console.log();
}